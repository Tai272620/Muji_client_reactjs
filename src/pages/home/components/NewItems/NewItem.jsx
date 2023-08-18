import React from 'react';
import './newItem.scss';
import { convertToUSD } from '@mieuteacher/meomeojs';

export default function NewItem() {
    return (
        <>
            <h3>New Item</h3>
            <div className='newItem_container'>
                <div className='item_detail'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_1074496724438.4163.jpeg?alt=media&token=58295aee-68bd-4cc6-afe3-d19de95908c7" alt="" />
                    <div className='item_infor'>
                        <h5>Wine Glass 360ml</h5>
                        <p>{convertToUSD(2.95)}</p>
                    </div>
                </div>
                <div className='item_detail'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_1489323596765.1782.jpeg?alt=media&token=fc6362b2-4bb6-464e-8db5-656d81312679" alt="" />
                    <div className='item_infor'>
                        <h5>Travel Sewing Kit</h5>
                        <p>{convertToUSD(3.95)}</p>
                    </div>
                </div>
                <div className='item_detail'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_976583560466.5255.jpeg?alt=media&token=986f6439-5e0a-42ea-8c04-e575ddcefaed" alt="" />
                    <div className='item_infor'>
                        <h5>Hard Trolley Suitcase</h5>
                        <p>{convertToUSD(149.95)}</p>
                    </div>
                </div>
                <div className='item_detail'>
                    <img src="./images/categories/cate_01.avif" alt="" />
                    <div className='item_infor'>
                        <h5>Women's/Ladies</h5>
                        <p>1000</p>
                    </div>
                </div>
                <div className='item_detail'>
                    <img src="./images/categories/cate_01.avif" alt="" />
                    <div className='item_infor'>
                        <h5>Women's/Ladies</h5>
                        <p>1000</p>
                    </div>
                </div>
                <div className='item_detail'>
                    <img src="./images/categories/cate_01.avif" alt="" />
                    <div className='item_infor'>
                        <h5>Women's/Ladies</h5>
                        <p>1000</p>
                    </div>
                </div>
            </div></>
    )
}
