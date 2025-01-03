import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext.jsx';
import Item from '../Components/Item/Item';
import Navbar from '../Components/Navbar/Navbar.jsx';


const ShopCategory = (props) => {
  const{all_product}=useContext(ShopContext);
  return (
    <>
    <Navbar/>
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src="dropdown icon"alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image}
            new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">
        Explore More
      </div>
    </div>
    </>
  )
}

export default ShopCategory;