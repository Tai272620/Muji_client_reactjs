import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';
import './product.scss';
import { useNavigate } from 'react-router-dom';
import Switch from '../../components/Switchs/Switch';

export default function Product() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    try {
        useEffect(() => {
            axios.get("http://localhost:4000/apis/v1/products")
                .then(res => {
                    setProducts(res.data.data)
                })
                .catch(err => {
                    console.log("err", err)
                })

        }, [])
    } catch (err) {
        // console.log("err", err);
    }
    const [categories, setCategories] = useState([]);
    try {
        useEffect(() => {
            axios.get("http://localhost:4000/apis/v1/categories")
                .then(res => {
                    setCategories(res.data.data)
                })
                .catch(err => {
                    console.log("err", err)
                })

        }, [])
    } catch (err) {
        // console.log("err", err);
    }
    console.log("categories", categories)
    return (
        <div className='product-admin-container'>
            <div>
                <div className='products'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product, index) => (
                                <tr key={randomId()} className="product">
                                    <th scope="row">{index + 1}</th>
                                    <td className="product_image"><img src={product.avatar} alt="" /></td>
                                    <td>{product.name}</td>
                                    <td>{convertToUSD(product.price)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='categories'>
                <table className="table">
                    {/* <h3>Product Categories</h3> */}
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories?.map((category, index) => (
                            <tr key={randomId()}>
                                <th scope="row">{index + 1}</th>
                                <td>{category.title}</td>
                                <td><Switch /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
