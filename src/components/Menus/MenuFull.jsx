import React, { useState } from 'react';
import './menu.scss';
import { Link } from 'react-router-dom';

function MenuFull() {
    const [activeSection, setActiveSection] = useState(null);

    const showMenu = (secid) => {
        setActiveSection(secid);
    };

    const hideMenu = () => {
        setActiveSection(null);
    };

    return (
        <div className='menu_container'>
            <div className="CATBAR MOBSZE TABSZE">
                <div className="WDT100 CATCNT">
                    <div className="MENHOV" onMouseOver={() => showMenu('Homeware')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <Link to="/Homeware">Homeware</Link>
                    </div>
                    <div className="MENHOV" onMouseOver={() => showMenu('Travel')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <Link to="/Travel">Travel</Link>
                    </div>
                    <div className="MENHOV" onMouseOver={() => showMenu('Furniture')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <Link to="/Furniture">Furniture</Link>
                    </div>
                    <div className="MENHOV" onMouseOver={() => showMenu('Beauty')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <Link to="/Beauty">Beauty</Link>
                    </div>
                    <div className="MENHOV" onMouseOver={() => showMenu('Stationery')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <Link to="/Stationery">Stationery</Link>
                    </div>
                    <div className="MENHOV" onMouseOver={() => showMenu('Food')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <Link to="/Food">Food</Link>
                    </div>
                </div>
            </div>
            <div className="MAINBAR" style={{ paddingTop: 0, display: activeSection === 'Homeware' ? 'block' : 'none' }} onMouseOver={() => showMenu('Homeware')} onMouseLeave={hideMenu} id="sec0">
                <div>
                    <div
                        style={{
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "auto auto auto auto auto auto auto auto",
                            gridColumnGap: 10
                        }}
                    >
                        <div className="">
                            <div className="PAD6">
                                <Link to="Homeware/1" className="FNT13">
                                    Bedding
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="Homeware/2" className="FNT13">
                                    Cooking & Dining
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="Homeware/3" className="FNT13">
                                    Utility
                                </Link>
                            </div>
                        </div>
                        <Link to="/products/1" className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </Link>
                        <Link to="/products/2" className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </Link>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MAINBAR" style={{ paddingTop: 0, display: activeSection === 'Travel' ? 'block' : 'none' }} onMouseOver={() => showMenu('Travel')} onMouseLeave={hideMenu} id="sec0">
                <div>
                    <div
                        style={{
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "auto auto auto auto auto auto auto auto",
                            gridColumnGap: 10
                        }}
                    >
                        <div className="">
                            <div className="PAD6">
                                <Link to="women/women-shirts" className="FNT13">
                                    Shirts
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="women/women-trousers" className="FNT13">
                                    Trousers
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="women/women-jackets" className="FNT13">
                                    Jackets
                                </Link>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MAINBAR" style={{ paddingTop: 0, display: activeSection === 'Furniture' ? 'block' : 'none' }} onMouseOver={() => showMenu('Furniture')} onMouseLeave={hideMenu} id="sec0">
                <div>
                    <div
                        style={{
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "auto auto auto auto auto auto auto auto",
                            gridColumnGap: 10
                        }}
                    >
                        <div className="">
                            <div className="PAD6">
                                <Link to="baby/baby-clothes" className="FNT13">
                                    Baby Clothes & Accessories
                                </Link>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MAINBAR" style={{ paddingTop: 0, display: activeSection === 'Beauty' ? 'block' : 'none' }} onMouseOver={() => showMenu('Beauty')} onMouseLeave={hideMenu} id="sec0">
                <div>
                    <div
                        style={{
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "auto auto auto auto auto auto auto auto",
                            gridColumnGap: 10
                        }}
                    >
                        <div className="">
                            <div className="PAD6">
                                <Link to="furniture/beds" className="FNT13">
                                    Beds
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="urniture/mattresses" className="FNT13">
                                    Mattresses
                                </Link>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MAINBAR" style={{ paddingTop: 0, display: activeSection === 'Stationery' ? 'block' : 'none' }} onMouseOver={() => showMenu('Stationery')} onMouseLeave={hideMenu} id="sec0">
                <div>
                    <div
                        style={{
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "auto auto auto auto auto auto auto auto",
                            gridColumnGap: 10
                        }}
                    >
                        <div className="">
                            <div className="PAD6">
                                <Link to="beauty/ageing-care" className="FNT13">
                                    Ageing Care
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="beauty/cleansing" className="FNT13">
                                    Cleansing
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="beauty/toning" className="FNT13">
                                    Toning
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="beauty/moisturising" className="FNT13">
                                    Moisturising
                                </Link>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MAINBAR" style={{ paddingTop: 0, display: activeSection === 'Food' ? 'block' : 'none' }} onMouseOver={() => showMenu('Food')} onMouseLeave={hideMenu} id="sec0">
                <div>
                    <div
                        style={{
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "auto auto auto auto auto auto auto auto",
                            gridColumnGap: 10
                        }}
                    >
                        <div className="">
                            <div className="PAD6">
                                <Link to="stationery/pen-sets" className="FNT13">
                                    Pen Sets
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="stationery/gel-pens" className="FNT13">
                                    Gel Pens
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="stationery/ruled-notebooks" className="FNT13">
                                    Ruled Notebooks
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="stationery/plain-notebooks" className="FNT13">
                                    Plain Notebooks
                                </Link>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="./images/categories/cate_01.avif" alt="" />
                            <div className='product_infor'>
                                <h5>Name</h5>
                                <p>1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuFull;
