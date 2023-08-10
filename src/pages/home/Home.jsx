import "./home.scss";
import { Outlet } from "react-router-dom";
import { useContext, useState } from 'react';

import Navbar from '@components/Navbars/Navbar'

import { useTranslation } from "react-i18next";

import Footer from "../../components/Footers/Footer";
import { RootContext } from "../../App";


function Home() {

  const { userStore } = useContext(RootContext);
  const { cartStore } = useContext(RootContext);

  // const totalCart = cartStore.data?.cart_details.reduce((total, product) => {
  //   return total + product.quantity
  // }, 0);

  // console.log("totalCart", totalCart)

  // const [cartItemCount, setCartItemCount] = useState(totalCart);

  // console.log("cartItemCount", cartItemCount)

  const { t } = useTranslation();


  return (
    <div className="root_page">
      {/* Navbar */}
      <Navbar userStore={userStore} cartStore={cartStore} />
      {/* Body */}
      <section className="body_container">
        <div className="body_container_center">
          {/* <Banner /> */}
          <Outlet />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
