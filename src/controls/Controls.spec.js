// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('controls render correctly', () => {
    expect(render(<Controls/>)).toMatchSnapshot()
})

test('lock/unlock button text changes when button is clicked', () => {
    const setButtonTextMock = jest.fn();
    const { getByText } = render(
        <Controls toggleClosed={setButtonTextMock} closed={false}/>
    );

    fireEvent.click(getByText(/close gate/i));

    expect(setButtonTextMock).toHaveBeenCalled();
    expect(setButtonTextMock).toHaveBeenCalledTimes(1);
    expect(fireEvent.click(getByText(/close gate/i)))
});


