import React from 'react'
import '../Css/app.css'
import ReactStars from "react-rating-stars-component";
import { useStateValue } from './StateProvider';

import { Link } from "react-router-dom";

function Products({id,title,image,price,rating,description}) {
    const [{basket},dispatch] = useStateValue()
    
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      const handleProductClick = () => {
        dispatch({
            type:'SEE_BASKET',
            item: {
                id: id,
                title:title,
                image: image,
                price: price,
                rating: rating,
                description: description
            }
        })
      }
    return (
        <div className={'product'}>
            <div className="product__info">
               <Link 
               to='product-detail' 
               className='product__detail'
               onClick={handleProductClick}
               > <p>{title}</p> </Link>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div id ='star'className="product__ratings">
                <ReactStars
                    value={rating}
                    count={5}
                    onChange={ratingChanged}
                    size={20}
                    activeColor="#ffd700" />
                </div>
            </div>
            <div className="product__image-wrapper">
            <Link to='product-detail' className='product__image-link'> <img src={image} alt="Book" className='product__img'/></Link>
                </div>
           
            {/* <button
                onClick={handleAdd}            
            >Add to Cart</button> */}
            <Link to='product-detail' className='product__detail-text'>See details</Link>
        </div>
    )
}

export default Products
