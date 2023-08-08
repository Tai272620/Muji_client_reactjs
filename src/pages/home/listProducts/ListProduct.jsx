import { useEffect, useState } from 'react';
import './listProduct.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../../../stores/slices/category';

export default function ListProduct() {
    const dispatch = useDispatch();
    const { type } = useParams();

    // console.log("type", type);

    useEffect(() => {
        if (type == "men-shirts") {
            dispatch(categoryActions.findByCategory(1));
        }
        if (type == "men-trousers") {
            dispatch(categoryActions.findByCategory(2));
        }
        if (type == "men-jackets") {
            dispatch(categoryActions.findByCategory(3));
        }
    }, [type])

    const categoryStore = useSelector(store => store.categoryStore);

    const navigate = useNavigate();

    return (
        <div className='listProduct_container'>
            <h2>Men's Oxford shirts & Casual Shirts</h2>
            <div className='main_image'>
                <img src="./images/banners/men_banner_01.jpg" alt="" />
            </div>
            <div className='listProduct_content'>
                {categoryStore?.data?.map((product, index) => (
                    <div key={index} className='product' onClick={() => navigate(`/products/${product.id}`)}>
                        <img src={product.avatar} alt="" />
                        <div className='product_infor'>
                            <h5>Name</h5>
                            <p>{product.id}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
