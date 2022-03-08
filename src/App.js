import React from "react";
import {useEffect} from 'react'
import "../src/Css/app.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Components/Checkout";
import ErrorMessage from './ErrorMessage'
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Payment from './Components/Payment';
import Orders from "./Components/Orders";
import Footer from './Footer';
import StyledComp from "./Components/StyledComp";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useStateValue } from "./Components/StateProvider";




function App() {
  const [{},dispatch] = useStateValue()
  

  // using wrapper to add 2 components in a single route <> Component1 Component2 </>
  return (
    <Router>
      <Routes>
          <Route path="/login"   element={<Login/>}  />
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/orders" element = {<> <Header/> <Orders/></>}/>
          <Route  path="/"  caseSensitive={false} element={<> <Header/> <StyledComp/> <Home/> <Footer/>  </>} />
          <Route  path="/payment"  caseSensitive={false} element={<> <Header/>  
            <Payment/>
            
           </>} />
            
          <Route exact path="/checkout"  caseSensitive={false} element={<> <Header/> <Checkout/></>}/>
          <Route path="*" element={<ErrorMessage/>}/>
          <Route path='/test' element={<StyledComp/>} />
      </Routes>
    </Router>
  );
}

export default App;
