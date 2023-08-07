import { Route } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";

export default (
    <>
        <Route path="admin" element={LazyLoad(() => import("./Admin"))()}></Route>
    </>
);
