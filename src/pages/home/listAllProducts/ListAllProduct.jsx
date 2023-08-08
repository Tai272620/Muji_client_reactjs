import React from 'react';
import './listAllProduct.scss';
import { useParams } from 'react-router-dom';

export default function ListAllProduct() {
    const { category } = useParams();
    console.log("category", category)
    return (
        <div className='listAll_container'>
            <h2>{category}</h2>
            <div className='main_image'>
                <img src="./images/banners/CatID_120000.jpg" alt="" />
            </div>
        </div>
    )
}
