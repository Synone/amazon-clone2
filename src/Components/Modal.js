import React from 'react';
import '../Css/app.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LanguageIcon from '@mui/icons-material/Language';
import Flags from 'country-flag-icons/react/3x2';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Modal() {
   
  return (
    <>
        <div className="modal">
            <div className="modal__content">
                <div className="modal__content-header">
                <AccountCircleIcon
                    className='modal__headerIcon'
                /> <h1>Hello, Sign in</h1>
                </div>
                <div className="modal__content-body">
                    <div className="modal__content-bodyText">
                        <h3>Digital Content &amp; Devices</h3>
                        <div className="modal__content-bodyText-detail">
                            <span>Amazon Music</span>
                            <ArrowForwardIosIcon 
                                className='modal__detailIcon'
                            />
                        </div>
                        <div className="modal__content-bodyText-detail">
                            <span>Kindle E-readers &amp; Books</span>
                            <ArrowForwardIosIcon 
                                className='modal__detailIcon'
                            />
                        </div>
                        <div className="modal__content-bodyText-detail">
                            <span>Appstore for Android</span>
                            <ArrowForwardIosIcon 
                                className='modal__detailIcon'
                            /> 


                        </div>
                    </div>
                    <div className="modal__content-bodyText">
                        <h3>Shop By Department</h3>
                        <div className="modal__content-bodyText-detail">
                            <span>Electronics</span>
                            <ArrowForwardIosIcon 
                                className='modal__detailIcon'
                            />
                        </div>
                        <div className="modal__content-bodyText-detail">
                            <span>Computers</span>
                            <ArrowForwardIosIcon 
                                className='modal__detailIcon'
                            />
                        </div>
                        <div className="modal__content-bodyText-detail">
                            <span>Smart Home</span>
                            <ArrowForwardIosIcon 
                                className='modal__detailIcon'
                            />
                        </div>
                        <div className="modal__content-bodyText-detail">
                            <span>Arts &amp; Crafts</span>
                            <ArrowForwardIosIcon 
                                className='modal__detailIcon'
                            />
                        </div>
                        <div className="modal__content-bodyText-final">
                            <span>See All  </span> <KeyboardArrowDownIcon/>
                            
                        </div>
                    </div>
                    <div className="modal__content-bodyText">
                        <h3>Programs &amp; Features</h3>
                        <div className="modal__content-bodyText-detail">
                            <span>Gift Cards</span>
                            <ArrowForwardIosIcon 
                                className='modal__detailIcon'
                            />
                        </div>
                        <div className="modal__content-bodyText-detail">
                            <span>Amazon Live</span>
                            <ArrowForwardIosIcon 
                                className='modal__detailIcon'
                            />
                        </div>
                        <div className="modal__content-bodyText-detail">
                            <span>International Shopping</span>
                            <ArrowForwardIosIcon 
                                className='modal__detailIcon'
                            />
                        </div>
                        <div className="modal__content-bodyText-final">
                            <span>See All</span> <KeyboardArrowDownIcon/>
                            
                        </div>
                    </div>
                    <div className="modal__content-bodyText">
                        <h3>Help &amp; Settings</h3>
                        <span className='mt-l'>Your Account</span>
                        <p className='modal__language mt-l'> <LanguageIcon className='modal__languageIcon'/> <span>English</span></p>
                        <p className='modal__countries mt-l'> <Flags.VN title='Vietnam' className='modal__country' /> <span>Viet Nam</span></p>
                        <p className='mt-l'>Customer Service</p>
                        <p className='mt-l'>Sign In</p>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    );
}

export default Modal;
