import React, {useState} from 'react'
import styled,{ keyframes } from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LanguageIcon from '@mui/icons-material/Language';
import Flags from 'country-flag-icons/react/3x2';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';


const SlideIn  = keyframes`
    0% {transform: translateX(-100%);
        opacity: 0.6;
        }
    
    100% {transform: translateX(0);
        opacity: 1;
       }
`
const NavBar = styled.div`
    background-color: #232f3e;
    height: 36px;
    display: flex;
    color: white;
    justify-content: flex-start;
    align-items: center;
`

const NavBarItemFirstChild = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-left: 14px;
    padding: 5px;
    &:hover{
        border: 1px solid white;
        padding: 4px;
        cursor: pointer;
    }
`
const NavBarItem = styled.div`
    margin-left: 14px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding: 6px;
    &:hover{
        border: 1px solid white;
        padding: 5px;
        cursor: pointer;
    }
`
const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    font-family: 'Amazon Ember', sans-serif;
    display: ${({ sidebar }) => (sidebar ? 'flex':'none')};
    z-index: 1000;
    
`
const Modal = styled.div`
    position: relative;
    background-color: #f9fcff;
    width: 380px;
    display:block;
    overflow-y: scroll;
    transition: 550ms;
    animation-name: ${SlideIn};
    animation-duration: .5s;
    `
const ModalHeader = styled.div`
    background-color: #232f3e;
    display: flex;
    align-items: center;
    height: 50px;
    color: white;
`
const ModalHeaderHeading = styled.h1`
    font-family: 'Amazon Ember', sans-serif;
    font-size: 1.2rem;
    `
const ModalBody = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    color: #232f3e;
    width: 100%;

`
const ModalBodyItem = styled.div`

    padding: 10px 0;
    padding-left: 40px;
    padding-right: 10px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover{
        background-color: rgb(206, 224, 240);
        cursor: pointer;
    }
`
const ModalBodyItemH3 = styled.h3`
    padding-left: 30px;
    padding-top: 10px;
    font-size: 1.2rem;
    margin-bottom: 8px;
`

const ModalSpan = styled.span`
    margin-left: 40px;
    display: block;
    margin-bottom: 10px;
    font-size: .8rem;
`
const ModalLink = styled(Link)`
    margin-left: 40px;
    display: block;
    margin-bottom: 10px;
    font-size: .8rem;
    text-decoration:none;
  &:hover{
    text-decoration: underline;
  }
`
const ModalLanguage = styled.p`
    display: flex;
    align-items: center;
    margin: 10px 0;
    margin-left: 40px;
    font-size: .8rem;
`
const ModalBodyItemAll = styled.div`
    padding: 10px 0;
    padding-left: 40px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    &:hover{
        cursor: pointer;
        background-color: rgb(206, 224, 240);
    }
`


function StyledComp() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => {
      
      setSidebar(!sidebar)
      
    }
    const handleModalClick = (e) =>{
        setSidebar(!sidebar)
       
    }
    const handleModalBody = (e) =>{
        e.stopPropagation()
    };
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <>
          <NavBar>
            <NavBarItemFirstChild onClick = {showSidebar}>
                <MenuIcon
                    
                /> All
            </NavBarItemFirstChild>
            <NavBarItem>
            Today's Deals
            </NavBarItem>
            <NavBarItem>
            Customer Service
            </NavBarItem>
            <NavBarItem>
            Gift Cards
            </NavBarItem>
            <NavBarItem>
            Sell
            </NavBarItem>
          </NavBar>
        <ModalContainer 
            onClick={handleModalClick}
        sidebar = {sidebar}>
            <Modal 
            onClick={handleModalBody}
            sidebar = {sidebar}>
                <ModalHeader>
                    <AccountCircleIcon
                    className='modal__headerIcon'
                />
                    <ModalHeaderHeading>
                        Hello, {user ? user.displayName : 'Sign in'}
                    </ModalHeaderHeading>
                    
                </ModalHeader>
                
                <ModalBody>
                        <ModalBodyItemH3>
                        Digital Content &amp; Devices
                        </ModalBodyItemH3>
                    <ModalBodyItem>
                        Amazon Music
                        <ArrowForwardIosIcon className='modal__arrowIcon'/>
                    </ModalBodyItem>
                    <ModalBodyItem>
                    Kindle E-readers &amp; Books
                        <ArrowForwardIosIcon className='modal__arrowIcon'/>
                    </ModalBodyItem>
                    <ModalBodyItem>
                        Appstore for Android
                        <ArrowForwardIosIcon className='modal__arrowIcon'/>
                    </ModalBodyItem>
                    <ModalBodyItemH3>
                    Shop By Department
                    </ModalBodyItemH3>
                    <ModalBodyItem>
                        Electronics
                        <ArrowForwardIosIcon className='modal__arrowIcon'/>
                    </ModalBodyItem>
                    <ModalBodyItem>
                   Computers
                        <ArrowForwardIosIcon className='modal__arrowIcon'/>
                    </ModalBodyItem>
                    <ModalBodyItem>
                        Smart Home
                        <ArrowForwardIosIcon className='modal__arrowIcon'/>
                    </ModalBodyItem>
                    <ModalBodyItem>
                        Arts &amp; Carfts
                        <ArrowForwardIosIcon className='modal__arrowIcon'/>
                    </ModalBodyItem>
                    <ModalBodyItemAll>
                        See all
                        <KeyboardArrowDownIcon/>
                    </ModalBodyItemAll>
                    <ModalBodyItemH3>
                    Programs &amp; Features
                    </ModalBodyItemH3>
                    <ModalBodyItem>
                        Gift Cards
                        <ArrowForwardIosIcon className='modal__arrowIcon'/>
                    </ModalBodyItem>
                    <ModalBodyItem>
                            Amazon Live
                        <ArrowForwardIosIcon className='modal__arrowIcon'/>
                    </ModalBodyItem>
                    <ModalBodyItem>
                        International Shopping
                        <ArrowForwardIosIcon className='modal__arrowIcon'/>
                    </ModalBodyItem>
                    <ModalBodyItemAll>
                        See all
                        <KeyboardArrowDownIcon/>
                    </ModalBodyItemAll>
                    <ModalBodyItemH3>
                    Help &amp; Settings
                    </ModalBodyItemH3>
                    <ModalLink to='#'>Your Account</ModalLink>
                    <ModalLanguage>
                        <LanguageIcon className='modal__languageIcon'/>
                        English
                    </ModalLanguage>
                    <ModalLanguage>
                    <Flags.VN title='Vietnam' className='modal__country' />
                        Viet Nam
                    </ModalLanguage>
                    <ModalLink to='#'>
                        Customer Service
                    </ModalLink>
                    <ModalLink to={!user && '/login'}>
                        {user? 'Sign Out' : 'Sign In'}
                    </ModalLink>
                </ModalBody>
            </Modal>
            <CloseIcon className='navClose__icon' onClick ={showSidebar}/>
        </ModalContainer>

        </>
  
      )
}

export default StyledComp