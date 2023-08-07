import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './productItem.scss';
import { useParams } from 'react-router-dom';
import { productActions } from '../../../stores/slices/product';

export default function ProductItem() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productStore = useSelector(store => store.productStore);

    useEffect(() => {
        dispatch(productActions.findProductById(id))
    }, [id])

    console.log("productStore", productStore)

    return (
        <div className='productItem_container'>
            <div className='image'>
                <img src={productStore?.data?.avatar} alt="" />
            </div>
            <div className='productItem_infor'>
                <h3>Name</h3>
                <p>1000</p>
                <button className='add_to_cart_btn'>Add to cart</button>
            </div>
        </div>
    )
}
