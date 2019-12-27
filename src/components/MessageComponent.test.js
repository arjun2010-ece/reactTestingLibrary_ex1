import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import MessageComponent from './MessageComponent'



describe('<MessageComponent />', () => {
    test('Component renders with a count of 1', () => {
        const { getByTestId } = render(<MessageComponent />);
        const countMessage = getByTestId('countMessage').textContent;
        // console.log(getByTestId('countMessage').textContent);
        expect(countMessage).toEqual('The count is 1');
    });

    test('Clicking the button adds 1 to the count', () => {
        const { getByText, getByTestId } = render(<MessageComponent />)
        const button = getByText('Add 1 to Count');
        fireEvent.click(button);
        const countMessage = getByTestId('countMessage').textContent;
        expect(countMessage).toEqual('The count is 2')

    });

}
);