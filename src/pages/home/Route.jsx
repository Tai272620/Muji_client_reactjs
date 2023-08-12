import { Route } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";

import Home from './Home'
import HomePage from "./components/HomePage";

export default (
  <Route path="/" element={<Home />}>
    <Route index element={<HomePage />} />
    <Route path="/:category/:category_id" element={LazyLoad(() => import("./listProducts/ListProduct"))()} />
    <Route path="/products/:id" element={LazyLoad(() => import("./productItems/ProductItem"))()} />
    <Route path="/cart" element={LazyLoad(() => import("./carts/Cart"))()} />
    <Route path="/payment" element={LazyLoad(() => import("./carts/Payment"))()} />
  </Route>
);
