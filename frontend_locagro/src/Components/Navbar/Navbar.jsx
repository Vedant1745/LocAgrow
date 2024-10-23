import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../assets/LocAgrow.png';
import cart from '../assets/cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const [menu,setMenu]= useState("shop");
  const {getTotalCartItems}=useContext(ShopContext)

  const adminPanel=()=>{
    window.location.href="/admin";
  }


  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/Shop'>Shop</Link>{menu==="shop" ? <hr/> :<></>}</li>
        <li onClick={()=>{setMenu("fruits")}}><Link style={{textDecoration:'none'}} to='/fruits'>Fruits</Link>{menu==="fruits" ? <hr/> :<></>}</li>
        <li onClick={()=>{setMenu("vegies")}}><Link style={{textDecoration:'none'}} to='/vegies'>Vegies</Link>{menu==="vegies" ? <hr/> :<></>}</li>
        <li onClick={()=>{setMenu("spices")}}><Link style={{textDecoration:'none'}} to='/spices'>Spices</Link>{menu==="spices" ? <hr/> :<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button onClick={adminPanel}>Admin</button>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/Shop')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar