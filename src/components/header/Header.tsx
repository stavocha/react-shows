import React, { ReactElement } from 'react';

interface Props {}

export default function Header({}: Props): ReactElement {
    return (
        <div className="header">
            <input type="text" />
            <button>Search</button>
        </div>
    );
}
