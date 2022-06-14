import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="nav__link">
                Home
            </Link>
            <Link to="/reviews" className="nav__link">
                Game Reviews
            </Link>
        </nav>
    )
}

export default Navbar;