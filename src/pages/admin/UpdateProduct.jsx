import React, { useState, useRef } from 'react'; // Thêm import React
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { convertToUSD } from '@mieuteacher/meomeojs'; // Comment this out since it's not used
import "./updateProduct.scss";
import { useDispatch } from 'react-redux';
import actions from '../../stores/actions';

function UpdateProduct({ product }) { // Removed 'categories' since it's not used
    const dispatch = useDispatch();
    const urlPreviewRef = useRef();

    const [name, setName] = useState(product.name);
    const [des, setDes] = useState(product.des);
    const [price, setPrice] = useState(product.price);

    async function updateProduct(eventForm) {
        console.log("da vao update")
        eventForm.preventDefault();
        let updateInfor = {
            name,
            des,
            price
        };

        console.log("updateInfor", updateInfor)
        let formData = new FormData();
        if (eventForm.target.avatar.files.length > 0) {
            formData.append("avatar", eventForm.target.avatar.files[0]);
        }
        formData.append("product_infor", JSON.stringify(updateInfor));

        api.products.update(product.id, formData).then(res => {
            if (res.status == 200) {
                Modal.success({
                    content: res.data.message,
                    onOk: () => {
                        api.products
                            .findAllProducts()
                            .then((res) => {
                                if (res.status == 200) {
                                    dispatch(actions.productActions.addProducts(res.data.data));
                                } else {
                                    alert(res.data.message);
                                }
                            })
                            .catch((err) => {
                                alert("Loiii");
                            });
                    }
                })
            } else {
                Modal.error({
                    content: res.data.message
                })
            }
        }).catch(err => {
            console.log("err", err)
        })
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: "flex" }}>
                    <div className='main_image'>
                        <img style={{ width: "100px" }} src={product.avatar} alt="Product Avatar" ref={urlPreviewRef} />
                        <input
                            name="avatar"
                            onChange={(event) => {
                                if (event.target.files.length == 0) {
                                    console.log("Chưa chọn hình!");
                                } else {
                                    let blodUrl = URL.createObjectURL(event.target.files[0]);
                                    urlPreviewRef.current.src = blodUrl;
                                }
                            }}
                            type="file"
                        />
                    </div>
                    <div className='product_information'>
                        <input type="text" value={name} name='name' />
                        <input type="text" value={des} name='des' />
                        <input type="text" value={price} name='price' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button onClick={(e) => {
                        console.log("vao roi ne ")
                        updateProduct(e)
                    }} type='submit'>Save</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateProduct;
