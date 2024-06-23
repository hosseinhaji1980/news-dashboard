import React, { useState } from 'react';
import { FaBars, FaUser, FaNewspaper, FaTags, FaCog, FaUserAlt } from 'react-icons/fa';
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import './../App.scss';

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    { path: "/dashboard", name: "داشبورد", icon: <FaCog /> },
    { path: "/users", name: "کاربران", icon: <FaUser /> },
    { path: "/news", name: "اخبار", icon: <FaNewspaper /> },
    { path: "/categories", name: "دسته بندی", icon: <FaTags /> },
    { path: "/settings", name: "تنظیمات", icon: <IoSettingsOutline /> },
    { path: "/about", name: "درباره ما", icon: <FaUserAlt /> },
  ];

  return (
    <div className={`container-fluid ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar">
        <div className="top_section">
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink 
            to={item.path} 
            key={index} 
            className={({ isActive }) => "link" + (isActive ? " active" : "")}
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{isOpen ? item.name : ""}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
