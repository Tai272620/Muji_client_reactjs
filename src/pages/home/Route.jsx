import { Route } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";

import Home from './Home'
import HomePage from "./components/HomePage";
import ListProduct from "./listProducts/ListProduct";
import ListAllProduct from "./listAllProducts/ListAllProduct";
import ProductItem from "./productItems/ProductItem";

export default (
  <Route path="/" element={<Home />}>
    <Route index element={<HomePage />} />
    <Route path="/:category" element={<ListAllProduct />} />
    {/* <Route path="/:category/:type" element={<ListProduct />} /> */}
    {/* <Route path="/products/:id" element={<ProductItem />} /> */}
    <Route path="/:category/:type" element={LazyLoad(() => import("./listProducts/ListProduct"))()} />
    <Route path="/products/:id" element={LazyLoad(() => import("./productItems/ProductItem"))()} />
  </Route>
);
