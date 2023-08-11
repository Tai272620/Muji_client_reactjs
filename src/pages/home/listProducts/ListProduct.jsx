import { useEffect, useState } from 'react';
import './listProduct.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../../stores/slices/product';
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';

export default function ListProduct() {
    const dispatch = useDispatch();
    const { category_id } = useParams();

    useEffect(() => {
        dispatch(productActions.findByCategory(parseInt(category_id)));
    }, [category_id])


    let imgUrl;
    if (category_id == "1" || category_id == "2" || category_id == "3") {
        imgUrl = "https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/images%2Fbanner%2FCatID_120104.jpg?alt=media&token=058b27c9-c710-42db-9675-fe92c4e4ea91"
    } else if (category_id == "women-shirts" || category_id == "women-trousers" || category_id == "women-jackets") {
        imgUrl = "https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/images%2Fbanner%2FCatID_110000.jpg?alt=media&token=130e3716-851f-4b0d-bed8-a6bd5cd1cb2e"
    } else if (category_id == "baby-clothes") {
        imgUrl = "https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/images%2Fbanner%2FCatID_130000.jpg?alt=media&token=7aabd558-ccc0-4d06-a40a-92b930aba793"
    } else if (category_id == "pen-sets" || category_id == "gel-pens" || category_id == "ruled-notebooks" || category_id == "plain-notebooks") {
        imgUrl = "https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/images%2Fbanner%2FCatID_160000.jpg?alt=media&token=ae7563e6-305c-4193-9c73-53f72fa44cbc"
    }

    const categoryStore = useSelector(store => store.categoryStore);

    const navigate = useNavigate();

    return (
        <div className='listProduct_container'>
            <h2>{category_id == "men-shirts" ? "Men's Oxford shirts & Casual Shirts" : ""}</h2>
            <div className='main_image'>
                <img src={imgUrl} alt="" />
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
