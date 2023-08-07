import "./main.scss";
import { Routes } from "react-router-dom";
import { useEffect } from 'react';

/* Route Config */
import AuthRoute from "@pages/auths/Route";
import HomeRoute from "@pages/home/Route";
import AdminRoute from "@pages/admin/Route"

import { useDispatch } from 'react-redux';
import { userActions } from '@actions/user';
import { categoryActions } from "./stores/slices/category";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.authenToken())
    // dispatch(categoryActions.find())
  }, [])
  return (
    <Routes>
      {/* Auth Routing */}
      {AuthRoute}
      {/* Home */}
      {HomeRoute}
      {/* Admin */}
      {AdminRoute}
    </Routes>
  );
}

export default App;
