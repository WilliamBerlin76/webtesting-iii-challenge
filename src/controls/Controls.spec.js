// Test away!
import React from 'react';
import { render, fireEvent, findByText } from '@testing-library/react';

import Controls from './Controls';

test('controls render correctly', () => {
    expect(render(<Controls/>)).toMatchSnapshot()
})

test('open/close gate button text displays open gate when closed', () => {
    const setButtonTextMock = jest.fn();
    const { getByText } = render(
        <Controls toggleClosed={setButtonTextMock} closed={true}/>
    );
    fireEvent.click(getByText(/open gate/i));

    expect(setButtonTextMock).toHaveBeenCalled();
    expect(setButtonTextMock).toHaveBeenCalledTimes(1);
    expect(fireEvent.click(getByText(/open gate/i)))
});

test('open/close gate button text displays close gate when open', () => {
    const setButtonTextMock = jest.fn();
    const { getByText } = render(
        <Controls toggleClosed={setButtonTextMock} closed={false}/>
    );
    fireEvent.click(getByText(/close gate/i));

    expect(setButtonTextMock).toHaveBeenCalled();
    expect(setButtonTextMock).toHaveBeenCalledTimes(1);
    expect(fireEvent.click(getByText(/close gate/i)))
});

test('lock/unlock button text displays "Lock Gate" when unlocked', () => {
    const setButtonTextMock = jest.fn();
    const { getByText } = render(
        <Controls toggleLocked={setButtonTextMock} locked={false} closed={true}/>
    )
    fireEvent.click(getByText(/lock gate/i));

    expect(setButtonTextMock).toHaveBeenCalled();
    expect(setButtonTextMock).toHaveBeenCalledTimes(1);
    expect(fireEvent.click(getByText(/lock gate/i)))
})

test('lock/unlock button text displays "Unlock Gate" when unlocked', () => {
    const setButtonTextMock = jest.fn();
    const { getByText } = render(
        <Controls toggleLocked={setButtonTextMock} locked={true} closed={true}/>
    )
    fireEvent.click(getByText(/Unlock gate/i));

    expect(setButtonTextMock).toHaveBeenCalled();
    expect(setButtonTextMock).toHaveBeenCalledTimes(1);
    expect(fireEvent.click(getByText(/Unlock gate/i)))
})



