import React, {useState, useEffect} from 'react'
import Products from './Components/Products'
import '../src/Css/app.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {ProductData} from './ProductData';
import {useStateValue} from './Components/StateProvider';
function Home() {
    const [productData, setProductData] = useState(ProductData);
    const [{searchQuery}] = useStateValue();
    console.log('Home ', searchQuery);
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
    useEffect(()=>{
        if(!searchQuery || searchQuery.length < 1){
            setProductData(ProductData)
        }  else {
            setProductData(ProductData.filter((product) => product.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1))
        }
    },[searchQuery])
    return (
        <div className='home'>
            <div className="home__container">
                <div className="image__slider">
                <AliceCarousel autoPlay autoPlayInterval="2000">
                <img className="home__image" src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"  alt="Ads-img" />
                <img className="home__image" src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"  alt="product-img" />
                <img className="home__image" src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"  alt="product-img" />
                <img className="home__image" src="https://m.media-amazon.com/images/I/616vMpBDPTL._SX3000_.jpg"  alt="product-img" />
                <img className="home__image" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"  alt="product-img" />
                </AliceCarousel>    
                </div>
                <div className="home__row">
                    {productData.length > 0 ? productData.map(item =>{
                        return <Products
                            id = {item.id}
                            title = {item.title}
                            price = {item.price}
                            image = {item.image}
                            rating = {(item.rating.rate)}
                            description = {item.description}
                        />
                    }) : <h1>Product Not Found</h1> }
                 
                </div>
                <div
                onClick={scrollToTop}
                className="backToTop">
                    Back to top
                </div>
            </div>
        
        </div>
    )
}

export default Home
