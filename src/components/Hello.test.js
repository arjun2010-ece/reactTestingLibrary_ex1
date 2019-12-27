import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Hello from './Hello';

afterEach(cleanup);
describe('Hello', () => { 
 
    it('should contains name with prop change', () => {
        const { getByText, rerender } = render(<Hello name="Antony" />)
        getByText('Antony')
        rerender(<Hello name="Budi" />)
        getByText('Budi')
      });
    
    it('should click on text', () => {
        const { getByText } = render(<Hello name="Antony" />)
        const textEl = getByText('Antony')
        fireEvent.click(textEl)
    })

})


