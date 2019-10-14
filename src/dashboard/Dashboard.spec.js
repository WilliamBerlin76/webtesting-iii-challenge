// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';

test('dashboard renders correctly', () => {
  render(<Dashboard />)
});

test('buttons displaying', () => {
    const toggleMock = jest.fn();
    const { getByText } = render(
        <Dashboard toggleClosed={toggleMock} toggleLocked={toggleMock} closed={false} locked={false} />
    );

    toggleMock();
    getByText(/open/i)
    getByText(/Unlocked/i)
    getByText(/Lock Gate/i)
    getByText(/Close Gat/i)

    expect(toggleMock).toHaveBeenCalled();
})