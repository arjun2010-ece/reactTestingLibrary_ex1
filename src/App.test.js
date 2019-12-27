import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
describe('App', () => { 
 
    it('check button text', () => {
        const { getByText } = render(<App />);
        const loginButton = getByText('Login');
        expect(loginButton.textContent).toBe('Login');

        loginButton.click();
        expect(loginButton.textContent).toBe('Logout');
      });

});

