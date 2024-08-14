import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink
          to='/add'
          className={`sidebar-option ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleClick(0)}
        >
            <img src={assets.add_icon} alt="Add" />
            <p>Add Items</p>
        </NavLink>
        <NavLink
          to='/list'
          className={`sidebar-option ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleClick(1)}
        >
            <img src={assets.order_icon} alt="List" />
            <p>List Items</p>
        </NavLink>
        <NavLink
          to='/orders'
          className={`sidebar-option ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleClick(2)}
        >
            <img src={assets.order_icon} alt="Orders" />
            <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
