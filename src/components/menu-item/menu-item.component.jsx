import React from 'react';
import './menu-item.styles.scss';
const MenuItem = ({ title, img, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${img})`
      }}
    ></div>
    <div className="content">
      <p className="title">{title}</p>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
