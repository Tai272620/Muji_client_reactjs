import "./home.scss";
import { Outlet } from "react-router-dom";
import { useContext, useState } from 'react';

import Navbar from '@components/Navbars/Navbar'

import { useTranslation } from "react-i18next";

import Footer from "../../components/Footers/Footer";
import { RootContext } from "../../App";


function Home() {

  const { userStore, cartStore } = useContext(RootContext);

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
