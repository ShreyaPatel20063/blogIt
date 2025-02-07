import React from 'react';
import { Link } from 'react-router';
import './nav.css';
function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <h2>BlogIt</h2>
            </Link>
        </div>
    );
}
export default Navbar;
