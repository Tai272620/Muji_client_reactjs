import "./home.scss";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';

import Navbar from '@components/Navbars/Navbar'

import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/user';
import Footer from "../../components/Footers/Footer";

function Home() {
  const store = useSelector(store => store);
  // console.log("store", store)
  const { t } = useTranslation();

  const [feature, setFeature] = useState([
    "Find a Store", "Help", "Join Us", "Sign In"
  ])

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.authenToken())
  }, [])
  return (
    <div className="root_page">
      {/* Navbar */}
      <Navbar userStore={store.userStore} categoryStore={store.categoryStore} mainCategoryStore={store.mainCategoryStore} />
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
