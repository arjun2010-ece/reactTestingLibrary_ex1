import React, {useState} from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('counter increments the count', () => {
    const {container} = render(<Counter />);
    const button = container.firstChild;
    expect(button.textContent).toBe('0');
    fireEvent.click(button);
    expect(button.textContent).toBe('1');
})

// testing react-hooks usestate()
// usage of 'container' as its the first default div rendered by teating library
// and button is the firstchild of container ;