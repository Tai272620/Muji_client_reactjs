import React, { useState, useContext, useEffect } from 'react';
import './menu.scss';
import { Link } from 'react-router-dom';
import { RootContext } from '../../App';
import { convertToUSD } from '@mieuteacher/meomeojs';

function MenuFull() {
    const [activeSection, setActiveSection] = useState(null);

    const { productStore } = useContext(RootContext);

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
                    {/* <div className="MENHOV" onMouseOver={() => showMenu('Food')} id="menitmSAL" style={{ display: 'inline', padding: '5px 5px' }}>
                        <span>Food</span>
                    </div> */}
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
                                <Link to="/Homeware/1" className="FNT13">
                                    Bedding
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="/Homeware/2" className="FNT13">
                                    Cooking & Dining
                                </Link>
                            </div>
                            <div className="PAD6">
                                <Link to="/Homeware/3" className="FNT13">
                                    Utility
                                </Link>
                            </div>
                        </div>
                        <Link to="/products/1" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_925756220737.8832.jpeg?alt=media&token=ec7f5692-4d4a-4b8d-aa85-2112b74d4d7a" alt="" />
                            <div className='product_infor'>
                                <h5>Wood Oak Veneer Bed</h5>
                                <p>{convertToUSD(299)}</p>
                            </div>
                        </Link>
                        <Link to="/products/2" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_1159567151921.5708.jpeg?alt=media&token=bfdc8926-0267-433d-b37c-862ebe28c22f" alt="" />
                            <div className='product_infor'>
                                <h5>Wooden Bed Oak Veneer Storage</h5>
                                <p>{convertToUSD(89.96)}</p>
                            </div>
                        </Link>
                        <Link to="/products/6" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_1074496724438.4163.jpeg?alt=media&token=58295aee-68bd-4cc6-afe3-d19de95908c7" alt="" />
                            <div className='product_infor'>
                                <h5>Wine Glass 360ml</h5>
                                <p>{convertToUSD(2.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/7" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_304258487692.64386.jpeg?alt=media&token=6bc93ffe-1d81-43cc-b197-18f21315c437" alt="" />
                            <div className='product_infor'>
                                <h5>Stoneware Side Plate</h5>
                                <p>{convertToUSD(7.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/11" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_914886603794.8096.jpeg?alt=media&token=80f68719-701c-4f80-bd1a-d5533d9633e7" alt="" />
                            <div className='product_infor'>
                                <h5>Cleaning System - Carpet Cleaner </h5>
                                <p>{convertToUSD(7.95)}</p>
                            </div>
                        </Link>
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
                        <Link to="/products/16" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_1526904596169.5461.jpeg?alt=media&token=8b5b1b3a-3e01-499e-a4a1-706295cbdd02" alt="" />
                            <div className='product_infor'>
                                <h5>Rechargeable Handheld Fan White</h5>
                                <p>{convertToUSD(17.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/17" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_1489323596765.1782.jpeg?alt=media&token=fc6362b2-4bb6-464e-8db5-656d81312679" alt="" />
                            <div className='product_infor'>
                                <h5>Travel Sewing Kit</h5>
                                <p>{convertToUSD(3.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/18" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_976583560466.5255.jpeg?alt=media&token=986f6439-5e0a-42ea-8c04-e575ddcefaed" alt="" />
                            <div className='product_infor'>
                                <h5>Hard Trolley Suitcase</h5>
                                <p>{convertToUSD(149.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/19" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_1066149433492.6759.jpeg?alt=media&token=54a09a2b-8616-4c20-b903-b9951f406bfb" alt="" />
                            <div className='product_infor'>
                                <h5>Nylon Pen Case With Pocket Grey</h5>
                                <p>{convertToUSD(4.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/20" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_448696203683.48285.jpeg?alt=media&token=17d1263e-c10b-4beb-ad9d-0e82b577c8e0" alt="" />
                            <div className='product_infor'>
                                <h5>Transparent TPU Pouch with Gusset</h5>
                                <p>{convertToUSD(7.95)}</p>
                            </div>
                        </Link>
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
                        <Link to="/products/21" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_203572201277.59048.jpeg?alt=media&token=a1e9d169-90ab-4107-a25c-94ac74dc0c62" alt="" />
                            <div className='product_infor'>
                                <h5>Sofabed - Eco Cotton</h5>
                                <p>{convertToUSD(1049)}</p>
                            </div>
                        </Link>
                        <Link to="/products/22" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_927161437522.2716.jpeg?alt=media&token=9925e729-7b4b-4346-9470-61315d202fd9" alt="" />
                            <div className='product_infor'>
                                <h5>2 Seater Sofa bed - Linen - Beige</h5>
                                <p>{convertToUSD(1049)}</p>
                            </div>
                        </Link>
                        <Link to="/products/23" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_1604108573490.7043.jpeg?alt=media&token=ad123eda-15dc-41cf-bd33-9224716fb97b" alt="" />
                            <div className='product_infor'>
                                <h5>Unit Sofa - Single - Light Grey</h5>
                                <p>{convertToUSD(479)}</p>
                            </div>
                        </Link>
                        <Link to="/products/26" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_1189093836847.4958.jpeg?alt=media&token=373ecdc0-c4de-4d09-903d-5aa4171fe220" alt="" />
                            <div className='product_infor'>
                                <h5>Oak Round Leg Chair</h5>
                                <p>{convertToUSD(199)}</p>
                            </div>
                        </Link>
                        <Link to="/products/27" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_690610753986.0857.jpeg?alt=media&token=a86234a2-1f5e-4088-81d7-77a243c5ec5f" alt="" />
                            <div className='product_infor'>
                                <h5>Oak Bench Small</h5>
                                <p>{convertToUSD(129)}</p>
                            </div>
                        </Link>
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
                        <Link to="/products/31" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_763473928933.333.jpeg?alt=media&token=41b870ca-9e6d-426f-a252-be29cfd4311a" alt="" />
                            <div className='product_infor'>
                                <h5>Ageing Care Toning Water</h5>
                                <p>{convertToUSD(6.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/32" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_113194464866.23354.jpeg?alt=media&token=5c31725f-e195-4ca2-b91f-7f2eca4f425a" alt="" />
                            <div className='product_infor'>
                                <h5>Ageing Care Toning Water</h5>
                                <p>{convertToUSD(16.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/33" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_1492529457614.7312.jpeg?alt=media&token=4d4e521c-170b-4b33-93c5-6e893ae62616" alt="" />
                            <div className='product_infor'>
                                <h5>Ageing Care All in One</h5>
                                <p>{convertToUSD(9.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/36" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_916369778557.6683.jpeg?alt=media&token=9ad60700-c17b-4b2d-be22-7fcab26e2338" alt="" />
                            <div className='product_infor'>
                                <h5>Nail Polisher</h5>
                                <p>{convertToUSD(3.5)}</p>
                            </div>
                        </Link>
                        <Link to="/products/37" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_363753524822.2227.jpeg?alt=media&token=102770fc-d223-4344-8260-5ca9b9d5235e" alt="" />
                            <div className='product_infor'>
                                <h5>Cosmetic Scissors</h5>
                                <p>{convertToUSD(13.95)}</p>
                            </div>
                        </Link>
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
                        <Link to="/products/43" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_551401211910.912.jpeg?alt=media&token=a5eeaabf-b857-44c3-8b73-44f93d365b0b" alt="" />
                            <div className='product_infor'>
                                <h5>6-in-1 Colour Pen 6 Colours</h5>
                                <p>{convertToUSD(5.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/44" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_653972661339.048.jpeg?alt=media&token=180f0c93-45d9-43fe-a1d1-3c6737d9b433" alt="" />
                            <div className='product_infor'>
                                <h5>Mechanical Pencil Leads - B0.5</h5>
                                <p>{convertToUSD(2.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/47" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_1286130133381.1035.jpeg?alt=media&token=f9a0557d-a81b-4fe1-aaae-4c5a7721c4b7" alt="" />
                            <div className='product_infor'>
                                <h5>Planting Tree Paper Double Ring Notebook A6 Beige </h5>
                                <p>{convertToUSD(1.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/50" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_499205036449.8637.jpeg?alt=media&token=7ffe5fa4-e9e9-48d5-8def-7c905c05bec0" alt="" />
                            <div className='product_infor'>
                                <h5>Loose Leaf Graph Paper B5 - 5mm</h5>
                                <p>{convertToUSD(1.95)}</p>
                            </div>
                        </Link>
                        <Link to="/products/51" className='product'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/products%2Fproduct_474145384236.9203.jpeg?alt=media&token=66c0fb2a-a090-482c-b2eb-7b1663f968ce" alt="" />
                            <div className='product_infor'>
                                <h5>Japanese Origami Paper150mm</h5>
                                <p>{convertToUSD(2.95)}</p>
                            </div>
                        </Link>
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
