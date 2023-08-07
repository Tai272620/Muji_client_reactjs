import React from 'react';
import './admin.scss';

export default function Admin() {
    return (
        <div className='admin_container'>
            <h2>Add Product</h2>
            <div className='admin_content'>
                <div className='product_infor'>
                    <div className="form_group">
                        <label htmlFor="">Product Name</label><br />
                        <input type="text" />
                    </div>
                    <div className="form_group">
                        <label htmlFor="">Description</label><br />
                        <input type="text" />
                    </div>
                </div>
                <div className='product_image'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/images%2Fupload_image.png?alt=media&token=0bd1b654-1f94-4b51-9139-9af63bf444c4" alt="" />
                </div>
            </div>
        </div>
    )
}
