import { Route } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";

export default (
    <>
        <Route path="register" element={LazyLoad(() => import("./Register"))()}></Route>
        <Route path="login" element={LazyLoad(() => import("./Login"))()}></Route>
        {/* <Route path="profile" element={LazyLoad(() => import("./Info"))()}></Route> */}
        <Route path="/profile" element={LazyLoad(() => import("./ProfilePage"))()}></Route>
        <Route path="/receipts" element={LazyLoad(() => import("./Receipt"))()}></Route>
    </>
);
