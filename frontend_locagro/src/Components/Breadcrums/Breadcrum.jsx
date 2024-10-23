import React from 'react';
import './Breadcrum.css';

const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className="breadcrum">
        HOME arrow icon SHOP arrow icon {product.category} arrow icon {product.name}
    </div>
  )
}

export default Breadcrum