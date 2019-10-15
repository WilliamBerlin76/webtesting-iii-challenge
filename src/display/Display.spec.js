// Test away!
import React from 'react';

import Display from './Display';
import { render, fireEvent } from 'react-testing-library';
import '@testing-library/jest-dom/extend-expect'

test('Display is rendered', () => {
    expect(render(<Display />)).toMatchSnapshot()
});

test('displays closed if closed prop is true', () => {
    const closedDisplayMock = jest.fn();
    const { getByText } = render(
        <Display closedClass={closedDisplayMock} closed={true} />
    );
    fireEvent.click(getByText(/closed/i))
});

test('displays unlocked if locked prop is false', () => {
    const lockedDisplayMock = jest.fn();
    const { getByText } = render(
        <Display openClass={lockedDisplayMock} locked={false} />
    );
    fireEvent.click(getByText(/unlocked/i))
})

test('lockedClass has green-led class when locked is false ', () => {
    const { getByText } = render(
        <Display />
    )
    const unlock = getByText(/unlocked/i)
        expect(unlock).toBeInTheDocument()
        expect(unlock).toHaveClass('green-led')
});

test('lockedClass class is red-led when locked is true', () => {
    const { getByText } = render(
        <Display locked={true}/>
    )
    const lock = getByText('Unlocked')
        expect(lock).toBeInTheDocument()
        expect(lock).toHaveClass('green-led')
});
test('closedClass class is changed to correct class when closed value is toggled', () => {
    const { getByText } = render(
        <Display />
    )
    const closed = getByText('Closed')
        expect(closed).toBeInTheDocument()
        expect(closed).toHaveClass('red-led')
    const open = getByText('Open')
        expect(open).toBeInTheDocument()
        expect(open).toHaveClass('green-led')
});
