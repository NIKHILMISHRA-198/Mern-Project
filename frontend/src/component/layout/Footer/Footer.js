import React from 'react'
import classes from './footer.module.css'
import linkedin from '../../../asset/LinkedIn.png'
import facebook from '../../../asset/facebook.png'
import instagram from '../../../asset/instagram.png'
import youtube from '../../../asset/youtube.png'

const Footer = () => {
    return (
        <div className={classes.footerparent}>
            <footer>
                <div className={classes.container}>
                    <div className={classes.sec, classes.aboutus}>
                        <h2>About us</h2>
                        <p>We are an Ecommerce Web App service!</p>

                        <ul className={classes.socials}>
                            <li><a href='#'><img src={instagram}></img> </a></li>
                            <li><a href='#'><img src={facebook}></img></a></li>
                            <li><a href='#'><img src={youtube}></img></a></li>
                            <li><a href='#'><img src={linkedin}></img></a></li>
                        </ul>
                    </div>

                    <div className={classes.sec, classes.quicklinks}>
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About</a></li>

                        </ul>
                    </div>

                    <div className={classes.sec, classes.contactus}>
                        <h2>Contact Us</h2>
                        <ul className={classes.info}>
                            <li>
                                <span>Email: support@ECOMUS.in</span>
                            </li>

                            <li>
                                <span>Tel: +91-8989897548</span>
                            </li>

                            <li>
                                <span>Address: Mysore, Karnataka</span>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className={classes.copyrights}>
                    Copyrights © 2022 ECOMUS. All Rights Reserved
                </div>
            </footer>

        </div >
    )
}

export default Footer
