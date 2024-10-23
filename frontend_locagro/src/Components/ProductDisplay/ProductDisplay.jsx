import React, { useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="product-right-prices">
                <div className="old-price">
                ₹{product.old_price}
                </div>
                <div className="new-price">
                ₹{product.new_price}
                </div>
            </div>
            <div className="product-description">
                <p>Bajraa</p>
            </div>
            <div className="prodct-quantity">
                <h1>Select Quantity</h1>
                <div className="product-quantitys">
                    <div>1kg</div>
                    <div>2kg</div>
                    <div>3kg</div>
                    <div>4kg</div>
                    <div>5kg</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDisplay