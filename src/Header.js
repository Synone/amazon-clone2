import React,{useEffect, useState} from "react";
import "../src/Css/app.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import { useStateValue } from "./Components/StateProvider";
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Flags from 'country-flag-icons/react/3x2';
// install MaterialUI for icons

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

`


function Header() {
  useEffect(()=>{
    document.title = 'Amazon.com Spend less. Smile more'
  })
  const [{ basket, user, searchQuery }, dispatch] = useStateValue();
  const [subMenu, setSubMenu] = useState(false);
  const [input, setInput] = useState('')
  
  
  const handleAuthentication = () =>{
    if(user){
      console.log('You have logged out')
    }
  };
  const handleChange = (e) =>{
    setInput(e.target.value);
   
    dispatch({
      type: 'CHANGE_INPUT',
      input: e.target.value
    })
  }
  console.log(input);
  // useEffect(()=>{
  //   searchQuery = input
  // },[input])
  return (
    <Wrapper>
    <div className="header">
      <div className="header__logo">
      <Link to="/" className="header__link">
        <span className="header__sprite"></span>
      </Link>
      </div>
      <div className="header__ship-location">
          {/* <span className="header__ship-location-text">Deliver to</span>
          <div className="header__ship-location-country">
         
            <p>Vietnam</p>
            </div> */}
            <LocationOnIcon className="header__ship-location-icon"/>
            <div className="header__ship-location-country">
            <span className="header__ship-location-text">Deliver to</span>
            <span className="header__ship-location-name">Vietnam</span>
              </div>
              
        </div>
      <div className="header__search">
      <label htmlFor="category"></label>
          <select name="category" id="category" className="category__input">
              <option value="All departments">All</option>
              <option value="Arts and Crafts">Arts &amp; Crafts</option>
              <option value="Automotive">Automotive</option>
              <option value="Baby">Baby</option>
              <option value="beautynpersonalcare">Beauty &amp; Personal</option>
              <option value="books">Books</option>
              <option value="boyfashion">Boys' Fashion</option>
              <option value="Computers">Computers</option>
              <option value="Deals">Deals</option>
              <option value="Digital Musics">Digital Musics</option>
              <option value="girlfashion">Girl's Fashion</option>
              <option value="Electronics">Electronics</option>
              <option value="Luggage">Luggage</option>
              <option value="pet">Pet Supplies</option>
              <option value="homenkitchen">Home &amp; Kitchen</option>
              <option value="Software">Software</option>
            </select>
            <input type="text" 
              value = {input}
              onChange = {(e) => handleChange(e)}
              
              className="header__searchInput" />
              <SearchIcon className="header__searchIcon" />
        
      </div>
      <div className="header__nav">
        <div className="header__option-country">
        <Flags.VN title='Vietnam' className='header__country-flag' />
        <ArrowDropDownIcon className="header__icon"/>
          </div>
      <Link to={!user && '/login'} className="link header__option-link">
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello, Sign in</span>
         
            <span className="header__optionLineTwo">Account &amp; Lists</span>
        </div>
        </Link>
        <Link to={!user && '/login'} className="link header__option-link">
        <div onClick={handleAuthentication} className="header__option">
        <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&amp; Orders</span>
        </div>
        </Link>
        <Link to={!user && '/login'} className="link header__option-link">
        <div onClick={handleAuthentication} className="header__option">
        <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        </Link>
        <Link to="/checkout" className="header__basketLink">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      
    </div>

    </Wrapper>
  );
}

export default Header;
