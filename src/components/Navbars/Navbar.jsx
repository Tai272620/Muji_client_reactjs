import { useState, useEffect, useContext } from 'react';
import './navbar.scss';
import { useNavigate } from 'react-router-dom';
import DropdownLogout from '../Dropdowns/DropdownLogout';
import DropdownLogin from '../Dropdowns/DropdownLogin';
import MenuFull from '../Menus/MenuFull';
import SearchModal from '../Search/Search';


export default function Navbar({ userStore, cartStore }) {
  const totalCart = cartStore?.data?.cart_details?.reduce((total, product) => {
    return total + product.quantity
  }, 0);
  const [cartCount, setCartCount] = useState(totalCart)
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null);

  const checkAdmin = () => {
    if (userStore.data?.role == "ADMIN") {
      setIsAdmin(!isAdmin)
    }
  }

  useEffect(() => {
    checkAdmin()
  }, [userStore])

  return (
    <nav>
      <div className='nav_content'>
        <div className="navbar-top">
          <span>MUJI Membership</span>
          <span>Store Locator</span>
          {isAdmin ? <span onClick={() => navigate("/admin")}>Admin</span> : <span>Support Pages</span>}
        </div>
        <div className="navbar-bottom">
          <div className="nav-left">
            <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/images%2Flogo%2Flogo.png?alt=media&token=93662449-3f09-4ab4-bbc0-83db7bcd6f4f" alt="logo" onClick={() => navigate("/")} />
          </div>
          <div className="nav-right">
            <span className='search_container'>
              <SearchModal />
            </span>
            <span className='account_container'>
              {isLogin ? <DropdownLogout userStore={userStore} /> : <DropdownLogin />}
            </span>
            <span className='icon_container'>
              <ion-icon name="heart-outline"></ion-icon>
              <span className='icon'>favorite</span>
            </span>
            <span className='cart-icon' onClick={() => navigate("/cart")}>
              <span><ion-icon name="cart-outline"></ion-icon><span className='cart-quantity'>{totalCart ? totalCart : 0}</span></span>
              <span className='icon'>cart</span>
            </span>
          </div>
        </div>
        <div className="navbar-dropdown">
          <MenuFull />
        </div>
      </div>
    </nav>
  )
}
