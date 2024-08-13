import React, { useContext } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  // Function to handle the refresh action
  const handleRefresh = () => {
    setCategory("All");
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>Explore our diverse menu of delicious dishes designed to satisfy your cravings. We're here to make every meal a delightful experience.</p>
      <div className="explore-menu-controls">
        <button className='refresh-button' onClick={handleRefresh}>Refresh</button>
      </div>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index}
            className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
