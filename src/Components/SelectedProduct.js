import React from 'react'

import ReactStars from "react-rating-stars-component";
function SelectedProduct({id,title,image,price,rating,description}) {
  return (
    <>
        <div className='selected__product'>
            <div className="selected__product-warpper">
                <img src={image} alt="Product-IMG" className='selected__product-image'/>
            </div>
           <div className="selected__product-desc">
               <h3>{title}</h3>
               <p>{description}</p>
               <a href="#">Visit store</a>
               <div id ='star'className="product__ratings">
                <ReactStars
                    value={rating}
                    count={5}
                    size={20}
                    activeColor="#ffd700"
                    edit={false} 
                    />
                </div>
               <p>Price {price}</p>
               </div>
               <div className="selected__product-notice">
                    <span>{price}</span>  
                    <p>No Import Fees Deposit &amp; $25.79 Shipping to Vietnam</p>  
                    <a href="#">Details</a>
                    <span>Deliver to Vietnam</span>
                    <p>Available to ship in 1 - 2 days.</p>
                    <input type="number" list="quantities" min="1" step="1" className='product__qty' />

                </div>
        </div>
    </>
  )
}

export default SelectedProduct