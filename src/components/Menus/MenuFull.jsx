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
                        <span>Homeware</span>
                    </div>
                    <div className="MENHOV" onMouseOver={() => showMenu('Travel')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <span>Travel</span>
                    </div>
                    <div className="MENHOV" onMouseOver={() => showMenu('Furniture')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <span>Furniture</span>
                    </div>
                    <div className="MENHOV" onMouseOver={() => showMenu('Beauty')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <span>Beauty</span>
                    </div>
                    <div className="MENHOV" onMouseOver={() => showMenu('Stationery')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <span>Stationery</span>
                    </div>
                    <div className="MENHOV" onMouseOver={() => showMenu('Food')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <span>Food</span>
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
                                <Link to="Travel/4" className="FNT13">
                                    Travel Accessories
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
                                <Link to="Furniture/5" className="FNT13">
                                    Living Room Furniture
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="Furniture/6" className="FNT13">
                                    Dining Room Furniture
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
                                <Link to="Beauty/7" className="FNT13">
                                    Skincare
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="Beauty/8" className="FNT13">
                                    Bodycare
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
                                <Link to="Stationery/9" className="FNT13">
                                    Pens & Pencils
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="Stationery/10" className="FNT13">
                                    Notebooks & Paper
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="Stationery/11" className="FNT13">
                                    Gifts & Gift Wrapping
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
                                <Link to="Food/12" className="FNT13">
                                    Rice, Pasta & Curries
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="Food/13" className="FNT13">
                                    Crisps, Snacks & Nuts
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
