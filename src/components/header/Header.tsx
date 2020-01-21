import React, { ReactElement, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import './header.css';

interface Props {
    handleSearchChange(q: ChangeEvent<HTMLInputElement>): void;
}

export default function Header({ handleSearchChange }: Props): ReactElement {
    const { searchTerm } =
    useSelector((state: RootState) => state.search);
    
    return (
        <div className="header">
            <div>
                <input
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
}
