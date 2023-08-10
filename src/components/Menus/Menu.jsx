import React from 'react';
import './menu.scss';
import { Link } from 'react-router-dom';

class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: null
        };
    }

    showMenu = (secid) => {
        this.setState({ activeSection: secid });
    };

    hideMenu = () => {
        this.setState({ activeSection: null });
    };

    render() {
        return (
            <div className='menu_container'>
                <div className="CATBAR MOBSZE TABSZE">
                    <div className="WDT100 CATCNT">
                        <div className="MENHOV" onMouseOver={() => this.showMenu('secSAL')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                            <Link to="/men">Men</Link>
                        </div>
                        <div className="MENHOV" onMouseOver={() => this.showMenu('women')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                            <Link to="/women">Women</Link>
                        </div>
                        <div className="MENHOV" onMouseOver={() => this.showMenu('kids')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                            <Link to="/kids">Kids</Link>
                        </div>
                        <div className="MENHOV" onMouseOver={() => this.showMenu('furniture')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                            <Link to="/furniture">Furniture</Link>
                        </div>
                        <div className="MENHOV" onMouseOver={() => this.showMenu('beauty')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                            <Link to="/beauty">Beauty</Link>
                        </div>
                        <div className="MENHOV" onMouseOver={() => this.showMenu('stationery')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                            <Link to="/stationery">Stationery</Link>
                        </div>
                    </div>
                </div>
                <div className="MAINBAR" style={{ paddingTop: 0, display: this.state.activeSection === 'secSAL' ? 'block' : 'none' }} onMouseOver={() => this.showMenu('secSAL')} onMouseLeave={this.hideMenu} id="sec0">
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
                                    <Link to="men/men-shirts" className="FNT13">
                                        Shirts
                                    </Link>
                                </div>
                                <div className="PAD6">
                                    <Link to="men/men-trousers" className="FNT13">
                                        Trousers
                                    </Link>
                                </div>
                                <div className="PAD6">
                                    <Link to="men/men-jackets" className="FNT13">
                                        Jackets
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
                <div className="MAINBAR" style={{ paddingTop: 0, display: this.state.activeSection === 'women' ? 'block' : 'none' }} onMouseOver={() => this.showMenu('women')} onMouseLeave={this.hideMenu} id="sec0">
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
                <div className="MAINBAR" style={{ paddingTop: 0, display: this.state.activeSection === 'kids' ? 'block' : 'none' }} onMouseOver={() => this.showMenu('kids')} onMouseLeave={this.hideMenu} id="sec0">
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
                <div className="MAINBAR" style={{ paddingTop: 0, display: this.state.activeSection === 'furniture' ? 'block' : 'none' }} onMouseOver={() => this.showMenu('furniture')} onMouseLeave={this.hideMenu} id="sec0">
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
                <div className="MAINBAR" style={{ paddingTop: 0, display: this.state.activeSection === 'beauty' ? 'block' : 'none' }} onMouseOver={() => this.showMenu('beauty')} onMouseLeave={this.hideMenu} id="sec0">
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
                <div className="MAINBAR" style={{ paddingTop: 0, display: this.state.activeSection === 'stationery' ? 'block' : 'none' }} onMouseOver={() => this.showMenu('stationery')} onMouseLeave={this.hideMenu} id="sec0">
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
}

export default MenuComponent;
