import React, { ReactElement, ChangeEvent } from 'react';
import './header.css';

interface Props {
    q: string;
    handleSearchChange(q: ChangeEvent<HTMLInputElement>): void;
}

export default function Header({ q, handleSearchChange }: Props): ReactElement {
    return (
        <div className="header">
            <div>
                <input
                    type="search"
                    placeholder="Search"
                    value={q}
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
}
