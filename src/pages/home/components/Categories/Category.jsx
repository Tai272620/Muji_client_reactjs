import React from 'react';
import './category.scss';
import { Link } from 'react-router-dom';

export default function Category() {
    return (
        <div className='category_container' id='category'>
            <div className='category_item'>
                <img src="./images/categories/cate_09.avif" alt="" />
                <p>Retort freeze-dried</p>
            </div>
            <Link to="http://localhost:3000/Beauty/8" className='category_item'>
                <img src="./images/categories/cate_08.avif" alt="" />
                <p>Beauty/Bodycare</p>
            </Link>
            <Link to='http://localhost:3000/Beauty/7' className='category_item'>
                <img src="./images/categories/cate_03.avif" alt="" />
                <p>Beauty/Skincare</p>
            </Link>
            <Link to="http://localhost:3000/Homeware/1" className='category_item'>
                <img src="./images/categories/cate_04.avif" alt="" />
                <p>Homeware/Bedding</p>
            </Link>
            <div className='category_item'>
                <img src="./images/categories/cate_05.avif" alt="" />
                <p>Interior goods</p>
            </div>
            <Link to="http://localhost:3000/Homeware/3" className='category_item'>
                <img src="./images/categories/cate_06.avif" alt="" />
                <p>Homeware/Utility</p>
            </Link>
        </div >
    )
}
