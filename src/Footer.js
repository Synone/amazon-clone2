import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import Flags from 'country-flag-icons/react/3x2';
function Footer() {

    
  return (
    <>
        <div className="footer">
            <div className="footer__upperPart">
            <div className="footer__body">
                <h6>Get to Know Us</h6>
                <ul className='footer__list'>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About Amazon</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Amazon Devices</a></li>
                    <li><a href="#">Amazon Science</a></li>
                </ul>
            </div>
            <div className="footer__body">
                <h6>Make Money with Us</h6>
                <ul className='footer__list'>
                    <li><a href="#">Sell products on Amazon</a></li>
                    <li><a href="#">Sell on Amazon Business</a></li>
                    <li><a href="#">Sell apps on Amazon</a></li>
                    <li><a href="#">Become an Affiliate</a></li>
                    <li><a href="#">Advertise Your Products</a></li>
                    <li><a href="#">Self-Publish with Us</a></li>
                    <li><a href="#">Host an Amazon Hub</a></li>
                    <li><a href="#">See More Make Money with Us</a></li>
                </ul>
            </div>
            <div className="footer__body">
                <h6>Amazon Payment Products</h6>
                <ul className='footer__list'>
                    <li><a href="#">Amazon Business Card</a></li>
                    <li><a href="#">Shop with Points</a></li>
                    <li><a href="#">Reload Your Balance</a></li>
                    <li><a href="#">Amazon Currency Converter</a></li>
                 
                </ul>
            </div>
            <div className="footer__body">
                <h6>Let Us Help You</h6>
                <ul className='footer__list'>
                    <li><a href="#">Amazon and COVID-19</a></li>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Your Orders</a></li>
                    <li><a href="#">Shipping Rates &amp; Policies</a></li>
                    <li><a href="#">Returns &amp; Replacements</a></li>
                    <li><a href="#">Manage Your Content and Devices</a></li>
                    <li><a href="#"> Amazon Assistant</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            </div>

            <div className="footer__lowerPart">
                <span className='footer__sprite'>
                    <a href="#">
                    <div className="footer__logoSprite"></div>
                    </a></span>
                <span className="footer__line">
                    <div >
                        <div className="footer__line-items">
                        <div className="footer__line-item footer__line-item-flex">
                        <LanguageIcon className='footer__language-icon'/> <p>  English</p>
                        </div>
                        <div className="footer__line-item">
                            USD - U.S Dollar
                        </div>
                        <div className="footer__line-item footer__line-item-flex">
                        <Flags.VN title='Vietnam' className='footer__flag' /> <span>Viet Nam</span>
                        </div>
                        </div>
                    </div>

                </span>
            </div>
            <div className="footer__finalPart">
               <div className="footer__finalPart-1">
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Music</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Advertising</h6>
                       <p>Find, attract, and
engage customers	</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Storage</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Storage</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Storage</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Storage</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                  
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Storage</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Storage</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Storage</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Storage</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Storage</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Storage</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                   <div className="footer__finalPart1-item">
                       <a href="#">
                       <h6>Amazon Storage</h6>
                       <p>Stream millions of songs</p>
                       </a>
                   </div>
                </div>
                <div className="footer__finalPart-2">
                    <a href="#">Condition of Use</a>
                    <a href="#">Privacy Notice</a>
                    <a href="#">Interest-Based </a>
                    <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
                    </div> 
            </div>
        </div>
    </>
    );
}

export default Footer;
