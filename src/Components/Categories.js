import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchCategories } from '../Api';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        FetchCategories()
        .then((res) => {
            const categoryArray = [];
            for (let i = 0; i < res.categories.length; i++) {
                categoryArray.push(res.categories[i].slug)
            }
            
            console.log(categoryArray);
            setCategories(categoryArray);
        })
    }, [])

    return (
        <div className="categoryList">
            <h2>Categories</h2>
            <ul className="categories">
                {categories.map((category) => {
                    console.log(category)
                    return (
                        <li key={category}>
                            <p>{category}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories;