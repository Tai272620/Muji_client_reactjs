import "./cart.scss";
import React, { useEffect, useState, useContext } from "react";
import { RootContext } from "@/App";
import api from "@api";
import { convertToUSD, randomId } from "@mieuteacher/meomeojs";
import { message, Modal } from "antd";
import actions from "../../../stores/actions";

message.config({
    top: 200,
    duration: 1,
    maxCount: 1,
    rtl: true,
    prefixCls: "my-message",
});

export default function Cart() {
    const { cartStore, userStore, dispatch, localCartState, setLocalCartState } = useContext(RootContext);
    const [cartItems, setCartItems] = useState(null);

    useEffect(() => {
        if (cartStore.data) {
            setCartItems(cartStore.data.cart_details);
        }
    }, [cartStore.data]);

    function deleteItem(id, type = undefined) {
        if (!localStorage.getItem("token")) {
            if (localStorage.getItem("carts")) {
                let carts = JSON.parse(localStorage.getItem("carts"));
                carts = carts.filter(item => item.product_id != id);
                localStorage.setItem("carts", JSON.stringify(carts)); // save
                setLocalCartState(!localCartState) // reload ui
            }
            return
        }
        api.purchase.updateCart(userStore.data?.id, {
            type,
            cart_detail_record_edited: {
                id,
            },
        })
            .then((res) => {
                // gọi hàm kéo cart detail về lại!
                api.purchase.findCart(userStore.data?.id)
                    .then((res) => {
                        if (res.status == 200) {
                            dispatch(actions.cartActions.setCartData(res.data.data));
                        } else {
                            alert(res.data.message);
                        }
                    })
                    .catch((err) => {

                        alert("sập!");
                    });
            })
            .catch((err) => { });
    }

    function updateCart(e, item) {
        // 1 update, 0 delete
        /* req.body = {type, cart_detail_record_edited} */
        let quantityEl = e.target.parentNode.querySelector(".quantity");
        let quantity = Number(quantityEl.innerText);

        if (!localStorage.getItem("token")) {

            if (localStorage.getItem("carts")) {
                let carts = JSON.parse(localStorage.getItem("carts"));
                if (e.target.innerText == "-") {
                    for (let i in carts) {
                        if (carts[i].product_id == item.product_id) {
                            if (quantity == 1) {
                                carts.splice(i, 1);
                            } else {
                                carts[i].quantity -= 1;
                            }
                        }
                        localStorage.setItem("carts", JSON.stringify(carts)); // save
                    }
                } else {
                    carts = carts.map(itemMap => {
                        if (itemMap.product_id == item.product_id) {
                            itemMap.quantity += 1;
                        }
                        return itemMap
                    })
                    localStorage.setItem("carts", JSON.stringify(carts)); // save
                }
                setLocalCartState(!localCartState) // reload ui
            }
            return
        }
        if (e.target.innerText == "-") {
            if (quantity == 1) {
                if (window.confirm("Xóa ok?!")) {
                    // xóa
                    deleteItem(item.id, 0);
                }
            }
            // cập nhật -
            api.purchase
                .updateCart(userStore.data?.id, {
                    type: 1,
                    cart_detail_record_edited: {
                        id: item.id,
                        quantity: --quantity,
                    },
                })
                .then((res) => {
                    // gọi hàm kéo cart detail về lại!
                    api.purchase
                        .findCart(userStore.data?.id)
                        .then((res) => {
                            if (res.status == 200) {
                                dispatch(actions.cartActions.setCartData(res.data.data));
                            } else {
                                alert(res.data.message);
                            }
                        })
                        .catch((err) => {
                            alert("sập!");
                        });
                })
                .catch((err) => { });
        } else {
            // cập nhật +
            api.purchase.updateCart(userStore.data?.id, {
                type: 1,
                cart_detail_record_edited: {
                    id: item.id,
                    quantity: ++quantity,
                },
            })
                .then((res) => {
                    // gọi hàm kéo cart detail về lại!
                    api.purchase.findCart(userStore.data?.id)
                        .then((res) => {
                            if (res.status == 200) {
                                dispatch(actions.cartActions.setCartData(res.data.data));
                            } else {
                                alert(res.data.message);
                            }
                        })
                        .catch((err) => {
                            alert("sập!");
                        });
                })
                .catch((err) => { });
        }
    }

    async function generateDataCart() {
        let carts = JSON.parse(localStorage.getItem("carts"));
        for (let i in carts) {
            carts[i].product = await api.products.findProductById(carts[i].product_id).then(res => res.data.data);
        }
        setCartItems(carts);
    }

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            if (localStorage.getItem("carts")) {
                generateDataCart();
            }
        }
    }, [localCartState])
    return (
        <div>
            <div className="cart_container">
                <div className="cart_shipping">
                    <h5>Shopping Cart</h5>
                    <p>Cart: {cartItems?.length} items</p>
                </div>
                <div className="cart_content_container">
                    {cartItems?.length > 0 ? (
                        cartItems?.map((item, index) => (
                            <div key={randomId()} className="cart_content">
                                <div className="cart_image">
                                    <img src={`${item.product.avatar}`} alt="" />
                                </div>
                                <div className="cart_item">
                                    <h5> {item.product.name}</h5>
                                    <div className="cart_price">
                                        <div className="price">
                                            <span>{convertToUSD(item.product.price)}</span>
                                        </div>
                                        <div className="cart_count">
                                            <button
                                                onClick={(e) => {
                                                    updateCart(e, item);
                                                }}
                                            >
                                                -
                                            </button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button
                                                onClick={(e) => {
                                                    updateCart(e, item);
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div>
                                            <i
                                                onClick={() => {
                                                    Modal.confirm({
                                                        content: "Do you want to delete this product?",
                                                        onOk: () => {
                                                            deleteItem(item.id == undefined ? item.product_id : item.id, 0);
                                                        }
                                                    })
                                                }}
                                                style={{
                                                    fontSize: "20px",
                                                }}
                                                className="fa-solid fa-trash"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div
                            style={{
                                textAlign: "center",
                                fontSize: "30px",
                                marginTop: "7px",
                                fontWeight: "bold",
                            }}
                        >
                            Your Cart Is Empty
                        </div>
                    )}
                </div>
                <div className="total">
                    <h5>Total:</h5>
                    <p
                        style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                    >
                        {cartItems
                            ? convertToUSD(
                                cartItems?.reduce((value, nextItem) => {
                                    return (value +=
                                        nextItem.quantity * nextItem.product.price);
                                }, 0),
                            )
                            : 0}
                    </p>
                    <button
                        onClick={() => {
                            window.location.href = "/payment";
                        }}
                    >
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    );
}
