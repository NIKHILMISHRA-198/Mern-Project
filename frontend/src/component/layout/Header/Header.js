import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import './Header.css'

const Header = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false)
    return (
        <>
            <nav className="main-nav">
                <div className="logo">

                    <h2>EcomUs</h2>

                </div>

                <div
                    className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">LIBRARY</a>
                        </li>
                        <li>
                            <a href="#">PROFILE</a>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header