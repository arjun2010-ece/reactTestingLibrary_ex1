import React, {useState} from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterStorage from './CounterStorage';

afterEach(() => {
    window.localStorage.removeItem('count');
})

test('reads and writes from localstorage', () => {
    window.localStorage.setItem('count', 3);
    const {container} = render(<CounterStorage />);
    const button = container.firstChild;
    expect(button.textContent).toBe('3');
    fireEvent.click(button);
    expect(button.textContent).toBe('4');
    expect(window.localStorage.getItem('count')).toBe('4');
})


// react hooks useEffect tested
// usage of localstorage in useState and useEffect