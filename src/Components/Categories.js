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
                        <Link to={`/reviews/${category.slug}`} className="Link" key={category.slug}>
                        <li  className="itemsByCategory">
                                <p>{category.slug}</p>
                        </li>
                        </Link>

                    )
                })}
            </ul>
        </div>
    )
}

export default Categories;