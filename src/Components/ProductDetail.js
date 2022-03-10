import React from 'react'
import { useStateValue } from './StateProvider';
import SelectedProduct from './SelectedProduct';
function ProductDetail() {
    const [{seeBasket},dispatch] = useStateValue()
    console.log(seeBasket);
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
  return (
    <>

        {seeBasket.map((item,index)=>(
          <SelectedProduct
            key={index}
            id = {item.id}
            title = {item.title}
            image = {item.image}
            price = {item.price}
            rating = {item.rating}
            description = {item.description}
          />
        ))}
         <div
                onClick={scrollToTop}
                className="backToTop">
                    Back to top
                </div>
    </>
  )
}

export default ProductDetail