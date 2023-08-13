import { useRef, useState, useEffect } from 'react';
import './admin.scss';
import axios from 'axios';
import { message } from 'antd';
import { Link, Outlet } from 'react-router-dom';

message.config({
    top: 60,
    duration: 1,
    maxCount: 1,
    rtl: true,
    prefixCls: 'my-message',
});

export default function Admin() {

    return (
        <>
            <nav className='nav_admin'>
                <Link to="/admin" className='nav_left'>Product Manager</Link>
                <div className='nav_middle'>
                    <Link to="admin/add-product" className='product-admin'>Add Product</Link>
                    <Link to="admin/user" className='product-user' style={{ cursor: "pointer" }}>Account</Link>
                </div>
                <Link to="admin/receipts-all" className='nav_right'>
                    Receipts Manage
                </Link>
                <Link to="/" className='nav_right'>
                    Home
                </Link>
            </nav>
            <Outlet />
        </>
    )
}
