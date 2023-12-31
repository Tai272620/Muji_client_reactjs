import { useEffect, useContext, useState } from 'react';
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';
import api from '@api';
import actions from '../../../stores/actions';
import { RootContext } from '../../../App';
import { message } from 'antd';

export default function CartItem({ product }) {
    const { cartStore, dispatch, userStore } = useContext(RootContext);
    const [quantity, setQuantity] = useState(product.quantity)
    function handleDelete(product_id) {
        api.purchase.deleteProductFromCart(product_id)
            .then(res => {
                if (res.status == 200) {
                    dispatch(actions.cartActions.deleteProductFromCart(product_id))
                    message.success(res.data.message);
                } else {
                    message.error(res.data.message);
                }
            })
    }

    function updateCart(typeBtn) {

        if (typeBtn == "-") {
            if (quantity == 1) {
                if (confirm("xóa ok!")) {
                    api.purchase.updateCart(userStore?.data?.id, {
                        type: 0,
                        cart_detail_record_edited: {
                            id: product.id
                        }
                    }).then(res => {
                        api.purchase.findCart(userStore.data?.id)
                            .then(res => {
                                if (res.status == 200) {
                                    dispatch(actions.cartActions.setCartData(res.data?.data))
                                } else {
                                    alert('error')
                                }
                            }).catch(err => {
                                alert('sap !')
                            })
                    }).catch(err => {
                        alert('error!')
                    })
                } else {
                    return
                }
            }
            api.purchase.updateCart(userStore?.data?.id, {
                type: 1,
                cart_detail_record_edited: {
                    id: product.id,
                    quantity: quantity - 1
                }
            }).then(res => {
                api.purchase.findCart(userStore.data?.id)
                    .then(res => {
                        if (res.status == 200) {
                            dispatch(actions.cartActions.setCartData(res.data?.data))
                        } else {
                            alert('error')
                        }
                    }).catch(err => {
                        alert('sap !')
                    })
            }).catch(err => {
                alert('error!')
            })
        } else {
            api.purchase.updateCart(userStore?.data?.id, {
                type: 1,
                cart_detail_record_edited: {
                    id: product.id,
                    quantity: quantity + 1
                }
            }).then(res => {
                api.purchase.findCart(userStore.data?.id)
                    .then(res => {
                        if (res.status == 200) {
                            dispatch(actions.cartActions.setCartData(res.data?.data))
                        } else {
                            alert('error')
                        }
                    }).catch(err => {
                        alert('sap !')
                    })
            }).catch(err => {
                alert('error!')
            })
        }
    }
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <img
                                src={product.product.avatar}
                                className="img-fluid rounded-3"
                                alt="Shopping item"
                                style={{ width: 65 }}
                            />
                        </div>
                        <div className="ms-3">
                            <h5>{product.product.name}</h5>
                            <p className="small mb-0">{product.product.des}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ width: 50 }} className='product_quantity'>
                            <button><span className="material-symbols-outlined" onClick={() => updateCart("-")}>
                                remove
                            </span></button>
                            <h5 className="fw-normal mb-0">{quantity}</h5>
                            <button><span className="material-symbols-outlined" onClick={() => updateCart("+")}>
                                add
                            </span></button>
                        </div>
                        <div style={{ width: 80 }}>
                            <h5 className="mb-0">{convertToUSD(product.product.price)}</h5>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }} onClick={() => handleDelete(product.id)}>
                            <i className="fas fa-trash-alt" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
