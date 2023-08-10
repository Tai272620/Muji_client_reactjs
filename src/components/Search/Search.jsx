import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./search.scss";
import { useDispatch, useSelector } from 'react-redux';
import { convertToVND } from '@mieuteacher/meomeojs';
import { useNavigate } from 'react-router-dom';
import api from '@api';
import product from '../../services/api/modules/product';

function SearchModal() {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let timeOut; // tạo ra 1 biến để lưu timeout
    const [searchStatus, setSearchStatus] = useState(false);
    const [searchData, setSearchData] = useState([]);
    function search(e) {
        clearTimeout(timeOut); // việc đầu tiên khi on change là remove timeout sắp diễn ra.
        if (e.target.value == "") {
            setSearchData([])
        }
        // ghi đè timeout thành 1 time out mới  => nếu không onchange nữa thì sẽ không bị clear và sẽ diễn ra nội dung bên trong timeout
        timeOut = setTimeout(async () => {
            // call api
            setSearchStatus(true);
            try {
                if (searchStatus) {
                    return;
                }
                let result = await api.products.search(e.target.value);
                if (result.status == 200) {
                    // ok sau 1.5s thì update data và tắt hiệu ứng
                    setTimeout(() => {
                        setSearchStatus(false);
                        setSearchData(result.data.data);
                    }, 1500);
                } else {
                    // failed
                }
            } catch (err) {
                // lỗi call api
            }
        }, 700); // sau 700 ms không gõ thì thực thi
    }
    // console.log("searchData", searchData);
    return (
        <>
            <Button variant="light" onClick={handleShow} size="sm" className="search-btn-container">
                <div id="search-btn" className="fas fa-search search-btn"></div>
            </Button>

            <Modal show={show} onHide={handleClose} size='xl' fullscreen='xxl-down'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <input onChange={(e) => search(e)} className='input-search' type="text" placeholder='SEARCH PRODUCT' autoFocus />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-body-container'>
                        <div className='category'>
                            <h2>Category</h2>
                            <p onClick={() => {
                                navigate("/men/men-shirts")
                                handleClose()
                            }}>Men Shirts</p>
                            <p onClick={() => {
                                navigate("/men/men-trousers")
                                handleClose()
                            }}>Men Trousers</p>
                            <p onClick={() => {
                                navigate("/women/women-shirts")
                                handleClose()
                            }}>Women Shirts</p>
                            <p onClick={() => {
                                navigate("/women/women-trousers")
                                handleClose()
                            }}>Women Trousers</p>
                            <p onClick={() => {
                                navigate("/baby/baby-clothes")
                                handleClose()
                            }}>Kids</p>
                            <p onClick={() => {
                                navigate("/furniture/beds")
                                handleClose()
                            }}>Beds</p>
                        </div>
                        <div className='search-render'>
                            <h3>SUGGESTED PRODUCTS</h3>
                            <div className='search-product-container'>
                                {searchData?.map((product, index) => (
                                    <div className='product' onClick={() => { navigate(`/products/${product.id}`), handleClose() }}>
                                        <img src={product.avatar} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default SearchModal;