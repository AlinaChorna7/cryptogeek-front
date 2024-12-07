import { useState } from "react"
import './header.css'

export const Header = ()=>{

const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
const handleMouseEnter = () => setIsSubMenuVisible(true);
const handleMouseLeave = ()=> setIsSubMenuVisible(false);

const [isModalOpen, setIsModalOpen]= useState(false);
const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);
    
return(
    <header>
        <div className="header-container">
            <div className="header-first">
                <h2 className="header-logo">CRYPTO<span className="header-logo-part">GEEK</span></h2>
            </div>
            <div className="header-midle">
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
                    <li className="header-list-item">Feed</li>
                    <li className="header-list-item">Tools</li>
                </ul>
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
            </div>
            {isModalOpen &&(
            <div className="modal">
                <div className="header-modal">
                    <h3 className="modal-title">Sing In</h3>
                    <button onClick={closeModal}>
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
                        <use href="/images/icons.svg#icon-google"/>
                    </svg>
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
            )}
        </div>
        
    </header>
)
}



