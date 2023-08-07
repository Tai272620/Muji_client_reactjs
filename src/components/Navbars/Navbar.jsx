import { useState } from 'react';
import './navbar.scss';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../Dropdowns/DropdownLogin';
import DropdownLogout from '../Dropdowns/DropdownLogout';
import DropdownLogin from '../Dropdowns/DropdownLogin';
import MenuComponent from '../Menus/Menu';
import CartModal from '../Carts/CartModal';

export default function Navbar({ userStore, categoryStore, mainCategoryStore }) {
  // console.log("category", categoryStore)
  // console.log("mainCategoryStore", mainCategoryStore.data)
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null);
  function checkIsLogin() {
    const token = localStorage.getItem("token");
    setIsLogin(token);
  }

  return (
    <nav>
      <div className='nav_content'>
        <div className="navbar-top">
          <span>MUJI Membership</span>
          <span>Store Locator</span>
          <span>Support Pages</span>
        </div>
        <div className="navbar-bottom">
          <div className="nav-left">
            <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/images%2Flogo%2Flogo.png?alt=media&token=93662449-3f09-4ab4-bbc0-83db7bcd6f4f" alt="logo" onClick={() => navigate("/")} />
          </div>
          <div className="nav-right">
            <span className='icon_container'>
              <ion-icon name="search-outline"></ion-icon>
              <span className='icon'>search</span>
              {/* <Search /> */}
            </span>
            <span className='account_container'>
              {isLogin ? <DropdownLogout userStore={userStore} /> : <DropdownLogin />}
            </span>
            <span className='icon_container'>
              <ion-icon name="heart-outline"></ion-icon>
              <span className='icon'>favorite</span>
            </span>
            <span className='cart-icon'>
              <span><ion-icon name="cart-outline"></ion-icon><span className='cart-quantity'>0</span></span>
              <span className='icon'>cart</span>
            </span>
          </div>
        </div>
        <div className="navbar-dropdown">
          <MenuComponent mainCategoryStore={mainCategoryStore} />
        </div>
      </div>
    </nav>
  )
}
