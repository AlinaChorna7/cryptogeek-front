

export const Header = ()=>{




    
return(
    <header>
        <div className="header-container">
            <div className="header-first">
                <h2 className="header-logo">CRYPTO<span className="header-logo-part">GEEK</span></h2>
            </div>
            <div className="header-midle">
                <ul className="header-list">
                    <li  className="header-list-item"><a href="">Academy</a></li>
                    <li className="header-list-item"> <p className="header-list-menu">Knowledge base</p>
                        <ul className="header-menu">
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
                    </li>
                    <li className="header-list-item">Feed</li>
                    <li className="header-list-item">Tools</li>
                </ul>
            </div>
            <div className="header-end">
                <div className="language">
                    <ul className="select-language">
                        <li className="language-choise">EN</li>
                        <li className="language-choise">UK</li>
                        <li className="language-choise">PL</li>
                    </ul>
                </div>
                <div className="sing-in">
                    <button className="sing-btn">Sing in</button>
                </div>
            </div>
            <div className="modal">
                
            </div>
        </div>
    </header>
)
}



