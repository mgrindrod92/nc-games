import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchCategories } from '../Api';
import Categories from './Categories';

const Navbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        FetchCategories()
        .then((allCategories) => {
            // const categoryArray = [];
            // for (let i = 0; i < res.categories.length; i++) {
            //     categoryArray.push(res.categories[i].slug)
            // }
            
            // console.log(allCategories);
            setCategories(allCategories);
        })
    }, [])

    return (
        <nav className="navBar">
            <ul className="navigationPoints">
            <li><Link to="/" className="nav__link">
                Home
            </Link> </li>
            <li><Link to="/reviews" className="nav__link">
                Game Reviews
            </Link> </li>
            <li><div>All Categories</div>
            <Categories categories={categories} />
             </li>
            </ul>
        </nav>
    )
}

export default Navbar;