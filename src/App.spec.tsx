import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    it('Should render without crashing',() =>{
        const { getByTestId } = render(<App />);
        console.log('Console: ', document.body.innerHTML);
        const ele = getByTestId('list');
        expect(ele).toBeInTheDocument();
    }) ;  
});
