import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';

const Categories = ({categories}) => {

    return (
        <div className="categoryList">
            <ul className="categories">
                {categories.map((category) => {
                    // Link relates to React Router
                    return (
                        <li  className="itemsByCategory">
                        <Link to={`/reviews/${category.slug}`} className="Link" key={category.slug}>
                                <p>{category.slug}</p>
                        </Link>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}

export default Categories;