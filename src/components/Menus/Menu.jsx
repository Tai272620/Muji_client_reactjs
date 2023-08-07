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
                            <a href="#">Kids</a>
                        </div>
                        <div className="MENHOV" onMouseOver={() => this.showMenu('furniture')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                            <a href="#">Furniture</a>
                        </div>
                        <div className="MENHOV" onMouseOver={() => this.showMenu('beauty')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                            <a href="#">Beauty</a>
                        </div>
                        <div className="MENHOV" onMouseOver={() => this.showMenu('stationery')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                            <a href="#">Stationery</a>
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
                                    <Link to="men/men-trousers&shorts" className="FNT13">
                                        Trousers & Shorts
                                    </Link>
                                </div>
                                <div className="PAD6">
                                    <Link to="men/hoodies&sweatshirts" className="FNT13">
                                        Hoodies & Sweatshirts
                                    </Link>
                                </div>
                                <div className="PAD6">
                                    <Link to="men/jumpers&cardigans" className="FNT13">
                                        Jumpers & Cardigans
                                    </Link>
                                </div>
                                <div className="PAD6">
                                    <Link to="men/coats&jackets" className="FNT13">
                                        Coats & Jackets
                                    </Link>
                                </div>
                                <div className="PAD6">
                                    <Link to="men/tops&t-shirts" className="FNT13">
                                        Tops & T-Shirts
                                    </Link>
                                </div>
                                <div className="PAD6">
                                    <Link to="men/pyjamas&loungewear" className="FNT13">
                                        Pyjamas & Loungewear
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
                                    <a href="https://www.muji.eu/uk/sale" className="FNT13">
                                        Shirts & Blouses
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/women" className="FNT13">
                                        Tops & T-Shirts
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/men" className="FNT13">
                                        Tunics & Dresses
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/kids" className="FNT13">
                                        Trousers, Skirts & Shorts
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/accessories" className="FNT13">
                                        Jumpers & Cardigans
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/home" className="FNT13">
                                        Coats & Jackets
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/bedding" className="FNT13">
                                        Pyjamas & Loungewear
                                    </a>
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
                                    <a href="https://www.muji.eu/uk/sale" className="FNT13">
                                        Baby Clothes & Accessories
                                    </a>
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
                                    <a href="https://www.muji.eu/uk/sale" className="FNT13">
                                        Beds
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale" className="FNT13">
                                        Mattresses
                                    </a>
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
                                    <a href="https://www.muji.eu/uk/sale" className="FNT13">
                                        Ageing Care
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/women" className="FNT13">
                                        Cleansing
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/men" className="FNT13">
                                        Toning
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/kids" className="FNT13">
                                        Moisturising
                                    </a>
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
                                    <a href="https://www.muji.eu/uk/sale" className="FNT13">
                                        Pen Sets
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/women" className="FNT13">
                                        Gel Pens
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/men" className="FNT13">
                                        Ruled Notebooks
                                    </a>
                                </div>
                                <div className="PAD6">
                                    <a href="https://www.muji.eu/uk/sale/kids" className="FNT13">
                                        Plain Notebooks
                                    </a>
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
