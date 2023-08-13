import { Route } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";
import api from '@api';
import AddProduct from "./AddProduct";
import Product from "./Product";
import User from "./User";

let isAdmin = false;
async function authenAdmin() {
    await api.users.authenToken({
        token: localStorage.getItem("token")
    })
        .then(res => {
            if (res.status == 200) {
                if (res.data.data.role == "ADMIN") {
                    isAdmin = true;
                }
            }
        })
        .catch(err => {
            console.log("err", err)
        })
    if (isAdmin) {
        return LazyLoad(() => import("./Admin"))()
    } else {
        return <>404 Page</>
    }
}

export default (
    <>
        <Route path="/admin" element={await authenAdmin()}>
            <Route index element={<Product />}></Route>
            <Route path="admin/add-product" element={<AddProduct />}></Route>
            <Route path="admin/user" element={<User />}></Route>
        </Route>
    </>
);
