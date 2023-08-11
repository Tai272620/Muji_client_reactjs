import { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './productItem.scss';
import { useParams } from 'react-router-dom';
import { productActions } from '../../../stores/slices/product';
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';
import { RootContext } from '../../../App';
import { message } from 'antd';
import actions from '../../../stores/actions';
import api from "@api";

message.config({
    top: 200,
    duration: 3,
    maxCount: 1,
    rtl: true,
    prefixCls: 'my-message',
});

export default function ProductItem() {
    const { userStore } = useContext(RootContext);
    const { id } = useParams();
    const dispatch = useDispatch();
    const productStore = useSelector(store => store.productStore);

    useEffect(() => {
        dispatch(productActions.findProductById(id))
    }, [id])

    function addToCart(userId, product) {
        dispatch(actions.cartActions.addToCart({ userId, product }))
    }

    return (
        <div className='productItem_container'>
            <div className='image'>
                <img src={productStore?.data?.avatar} alt="" />
            </div>
            <div className='productItem_infor'>
                <h3>{productStore?.data?.name}</h3>
                <p>{productStore?.data?.des}</p>
                <p>{convertToUSD(productStore?.data?.price)}</p>
                <button className='add_to_cart_btn' onClick={() => addToCart(userStore?.data?.id, {
                    product_id: productStore?.data?.id,
                    quantity: 1
                })}>Add to cart</button>
            </div>
        </div>
    )
}
