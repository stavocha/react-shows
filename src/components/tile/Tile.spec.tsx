import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Item, TileTypes } from '../../types';

import Tile from './Tile';

interface Props {
    data: Item;
    type: TileTypes;
    hideSummary?: boolean;
    hideName?: boolean;
};
describe('Tile', () => {
    let props: Props;
    let history = createMemoryHistory();;
    beforeEach(() => {
        history 
        history.push = jest.fn();
        props = {
            data: { pic: 'test-url',
                title: 'test-title',
                description: 'test-description',
                id: 'test-id',
            },
            type: TileTypes.ShowTile,
        };
    });
    it('Should render without crashing', () => {
        render(<Router history={ history }>
            <Tile {...props } />
        </Router>);
    });
    it('Should push the right destination to history', () => {
        const { getByRole } = render(<Router history={ history }>
            <Tile {...props } />
        </Router>);
        const ele = getByRole('button');
        fireEvent.click(ele);
        expect(history.push).toHaveBeenCalledWith(`/show/test-id`)
    });
});
