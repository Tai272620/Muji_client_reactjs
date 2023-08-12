import { useEffect, useState, useContext } from 'react';
import { RootContext } from '../../../App';
import './listProduct.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../../stores/slices/product';
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';

export default function ListProduct() {
    const { category_id } = useParams();
    const { categories } = useContext(RootContext);

    const category = categories.categories.find((item) => {
        return parseInt(category_id) === item.id
    })

    const dispatch = useDispatch();


    const categoryStore = useSelector(store => store.categoryStore);

    const productStore = useSelector(store => store.productStore);

    useEffect(() => {
        dispatch(productActions.findByCategoryId(parseInt(category_id)));
    }, [category_id])

    const navigate = useNavigate();

    return (
        <div className='listProduct_container'>
            <h2>{category_id == "men-shirts" ? "Men's Oxford shirts & Casual Shirts" : ""}</h2>
            <div className='main_image'>
                <img src={category?.avatar} alt="" />
            </div>
            <div className='listProduct_content'>
                {categoryStore?.data?.map((product, index) => (
                    <div key={index} className='product' onClick={() => navigate(`/products/${product.id}`)}>
                        <img src={product.avatar} alt="" />
                        <div className='product_infor'>
                            <h5>{product.name}</h5>
                            <p>{convertToUSD(product.price)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
