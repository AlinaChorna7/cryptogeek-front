import { useEffect, useState } from "react"
import './header.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';


export const Header = ()=>{

const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
const handleMouseEnter = () => setIsSubMenuVisible(true);
const handleMouseLeave = ()=> setIsSubMenuVisible(false);


const [isMenuOpen,  setIsMenuOpen]= useState(false);
const openMenu = () => setIsMenuOpen(true);
const closeMenu =()=> setIsMenuOpen(false);

const [isModalOpen, setIsModalOpen]= useState(false);
const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);


useEffect(()=>{
if(isModalOpen){
    document.body.classList.add('modal-open');
}
if(!isModalOpen){
    document.body.classList.remove('modal-open');
}
}, [isModalOpen]);




return(
    <header>
        <div className="header-container">
            <div className="header-first">
                <h2 className="header-logo">crypto<span className="header-logo-part">geek</span></h2>
            </div>
            <div className="header-midle">
                <nav>
                <ul className="header-list">
                    <li  className="header-list-item"><a href="">Academy</a></li>
                    <li className="header-list-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <p className="header-list-menu">Knowledge base</p>
                       
                       {isSubMenuVisible&&(
                        <ul className={`header-menu ${isSubMenuVisible ? 'visible' : ''}`}>
                            <li className="header-menu-item">
                                <div className="header-menu-div" href="">
                                    <h4 className="hover-menu-title">THEMES</h4>
                                    <p className="hover-menu-p">Browse by thematic content</p>
                                </div>
                            </li>
                            <li className="header-menu-item">  <div className="header-menu-div" href="">
                                    <h4 className="hover-menu-title">GLOSSARY</h4>
                                    <p className="hover-menu-p">Definitions of common crypto terms and language</p>
                                </div></li>
                            <li className="header-menu-item">  <div className="header-menu-div" href="">
                                    <h4 className="hover-menu-title">COLLECTIONS</h4>
                                    <p className="hover-menu-p">Crypto podcast, books, channels, and games to build your knowledge</p>
                                </div></li>
                            <li className="header-menu-item">  <div className="header-menu-div" href="">
                                    <h4 className="hover-menu-title">POPULAR COINS</h4>
                                    <p className="hover-menu-p">These crypto coins have their own blockchains</p>
                                </div></li>
                        </ul>
                    )}
                    </li>
                    <li className="header-list-item"><a href=""> Feed</a></li>
                    <li className="header-list-item"><a href="">Tools</a></li>
                </ul>
                </nav>
            </div>
            <div className="header-end">
                {/* <div className="language">
                    <ul className="select-language">
                        <li className="language-choise">EN</li>
                        <li className="language-choise">UK</li>
                        <li className="language-choise">PL</li>
                    </ul>
                </div> */}
                <div className="sing-in">
                    <button onClick={openModal} className="sing-btn">Sing in</button>
                </div>
                <button className="menu-button" onClick={openMenu}>
            <svg width="30px" height="30px" className="menu-header-icon">
                <use href="./images/icons.svg#icon-menu"/>
            </svg>
            </button>
            </div>
            {isModalOpen &&(
                <div className="backdrop" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="header-modal">
                    <h3 className="modal-title">Sing In</h3>
                    <button onClick={closeModal} className="close-modal-btn">
                 <svg width="28px" height="28px" className="modal-close-icon">
                    <use href="/images/icons.svg#icon-x-mark"/>
                 </svg>
                 </button>
                </div>
                <div className="modal-form-cnt">
                    <form className="modal-form">
                    <input
                type="email"
                name="user-email"
                className="modal-input"
                id="user-email"
                placeholder="Please enter your email"
              />
              <div className="form-btns">
                <button className="modal-link">Sent login link</button>
                <button className="google-modal">
                    <svg width="15px" height="15px" className="google-login-icon">
                        <use href="./images/icons.svg#icon-google"/>
                    </svg><p className="google-enter">Or sing in with google</p>
                </button>
              </div>
                    </form>
                </div>
                <div className="wallet-conection-div">
                    <div className="walet-modal-title">
                    
                       <svg width="15px" height="15px" className="wallet-modal-icon">
                        <use href="/images/icons.svg#icon-wallet"/>
                        </svg>
                        <p className="conect-wallet"> OR CONNECT WALLET
                    </p>
                    </div>
                    <div className="wallets-selection">
                        <button className="metamask-btn">
                            <svg width="15px" height="15px" className="metamask-icon">
                                <use href="/images/icons.svg#metamask"/>
                            </svg> <span className="metamask-p">MetaMask</span>
                        </button>
                        <button className="other-wallets-btn">
                            <svg width="15px" height="15px" className="other-wallets-icon">
                                <use href="/images/icons.svg#wallets-icon"/>
                            </svg> <span> Other wallets</span>
                        </button>
                    </div>
                </div>
            </div>
            </div>
            )}
              
{isMenuOpen &&(
            <div className="mobile-menu-header">
                <div className="mobile-menu-head">
                <div className="header-first">
                <h2 className="header-logo">crypto<span className="header-logo-part">geek</span></h2>
            </div>
            <div>
            <button  className="close-menu-btn" onClick={closeMenu}>
                 <svg width="28px" height="28px" className="menu-close-icon">
                    <use href="/images/icons.svg#icon-x-mark"/>
                 </svg>
                 </button>
                 </div>
                </div>
         
                <nav>
          <ul className="head-menu-mobile">
          <li className="head-menu-mob-item"><a href="">Academy</a></li>
            <li className="head-menu-mob-item">
            <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Knowledge Base
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
<ul className="submenu-mobile-header">
    <li className="submenu-mobile-item">  <div className="header-menu-div" href="">
                                    <h4 className="hover-menu-title">THEMES</h4>
                                    <p className="hover-menu-p">Browse by thematic content</p>
                                </div></li>
    <li className="submenu-mobile-item"> <div className="header-menu-div" href="">
                                    <h4 className="hover-menu-title">GLOSSARY</h4>
                                    <p className="hover-menu-p">Definitions of common crypto terms and language</p>
                                </div></li>
    <li className="submenu-mobile-item"> <div className="header-menu-div" href="">
                                    <h4 className="hover-menu-title">COLLECTIONS</h4>
                                    <p className="hover-menu-p">Crypto podcast, books, channels, and games to build your knowledge</p>
                                </div></li>
    <li className="submenu-mobile-item"> <div className="header-menu-div" href="">
                                    <h4 className="hover-menu-title">POPULAR COINS</h4>
                                    <p className="hover-menu-p">These crypto coins have their own blockchains</p>
                                </div></li>
</ul>

              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
            </li>
            <li className="head-menu-mob-item"><a href="">Feed</a></li>
            <li className="head-menu-mob-item"><a href="">Tools</a></li>
           
          </ul>
                </nav>
            </div>
            )}
        </div>
        
    </header>
)
}



