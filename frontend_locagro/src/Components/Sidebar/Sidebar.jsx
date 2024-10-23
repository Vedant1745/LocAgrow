import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to={'/admin/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src="" alt="" />
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/admin/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src="" alt="" />
            <p>Product List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar;