import React, { ReactElement, ChangeEvent } from 'react';
import './header.css';
import { useAuth0 } from '../../react-auth0-spa';

interface Props {
    q: string;
    handleSearchChange(q: ChangeEvent<HTMLInputElement>): void;
}

export default function Header({ q, handleSearchChange }: Props): ReactElement {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    return (
        <div>
            <nav>
                <div>{user && <div>Hi {user.nickname}</div>}</div>
                {!isAuthenticated && (
                    <button onClick={() => loginWithRedirect()}>Log in</button>
                )}
                {isAuthenticated && (
                    <button onClick={() => logout()}>Log out</button>
                )}
            </nav>
            <div className="header">
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
