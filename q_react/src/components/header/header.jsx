import React from 'react';
import './_header.scss';
import logo from '../../img/logo.svg';

const Header = (props) => {
    return (
        <header className="header overlay" id="header">
            <div className="container">
                <nav className="site-nav">
                    <span className="nav-site-logo" href="#"><img src={logo} alt="site logo" /></span>
                    <span className="nav-btn"> </span>
                    <div className="nav-list-wrap">
                        <ul className="nav-list">
                            <li><a className="nav-link smooth-scroll" href="#services">Services</a></li>
                            <li><a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li>
                            <li><a className="nav-link smooth-scroll" href="#process">Process</a></li>
                            <li><a className="nav-link smooth-scroll" href="#site-order">Order</a></li>
                            <li><a className="nav-link smooth-scroll" href="#technologies">Technologies</a></li>
                        </ul>
                        <span className="close-btn"> </span>
                    </div>

                </nav>
                <div className="header-content">
                    <div className="logo"><img src={logo} alt="site logo" /></div>
                    <h1 className="main-title">Development and support of the web apps</h1>
                    <p className="main-text__description">Reasonable ideas which work. Stunning design which impresses.
                        Reliable
                        functionality which showcases
                        quality.
                        Quardex team is here for you to bring your ideas to life!</p>
                </div>

                <div className="header-contact">
                    <div className="header-contact__item">
                        <svg className="header-contact__icon">
                            <use xlinkHref="../../img/sprite.svg#skype" alt="skype"></use>
                        </svg>
                        <a href="skype:d.quardex?call">d.quardex</a>
                    </div>
                    <div className="header-contact__item">
                        <svg className="header-contact__icon">
                            <use xlinkHref="../../img/sprite.svg#email" alt="keyboard"></use>
                        </svg>
                        <a href="mailto:sales@quardex.com">sales@quardex.com</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header