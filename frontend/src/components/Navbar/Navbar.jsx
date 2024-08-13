import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State for mobile menu visibility
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='navbar'>
      <Link to='/' onClick={scrollToTop}>
        <img className='logo' src={assets.logo} alt="Website Logo" />
      </Link>
      <ul className={`navbar-menu ${showMobileMenu ? 'show' : ''}`}>
        <Link to="/" onClick={() => { setMenu("home"); setShowMobileMenu(false); }} className={`${menu === "home" ? "active" : ""}`} aria-label="Home">Home</Link>
        <a href='#explore-menu' onClick={() => { setMenu("menu"); setShowMobileMenu(false); }} className={`${menu === "menu" ? "active" : ""}`} aria-label="Menu">Menu</a>
        <a href='#app-download' onClick={() => { setMenu("mob-app"); setShowMobileMenu(false); }} className={`${menu === "mob-app" ? "active" : ""}`} aria-label="Mobile App">Mobile app</a>
        <a href='#footer' onClick={() => { setMenu("contact"); setShowMobileMenu(false); }} className={`${menu === "contact" ? "active" : ""}`} aria-label="Contact Us">Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <Link to='/cart' className='navbar-search-icon' aria-label="Cart">
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)} aria-label="Sign In">Sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile Icon" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')} aria-label="My Orders"> <img src={assets.bag_icon} alt="Bag Icon" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout} aria-label="Logout"> <img src={assets.logout_icon} alt="Logout Icon" /> <p>Logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
