import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
// import { useGoBack } from './useGoBack';
import './nav.css';

function Navbar() {
    // const goBack = useGoBack('/');
    // const navigate = useNavigate();

    return (
        <div className="navbar">
            <Link to="/" id="back">
                <IoMdArrowRoundBack />
            </Link>

            <Link to="/">
                <h2>BlogIt</h2>
            </Link>
        </div>
    );
}
export default Navbar;
