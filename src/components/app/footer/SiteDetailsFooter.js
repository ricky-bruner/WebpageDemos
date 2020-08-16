import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch, faBolt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../img/transfigureiologos/transfigure_io_transparent_code_blue.png'
import './mainFooter.css';
import './siteDetailsFooter.css'

export default class SiteDetailsFooter extends Component {
    state = {};

    render() {
        return (
            <div className="left">
                <div className="transfigure-io-footer">
                    <div className="transfigure-io-details">
                        <div className="website-details-section">
                            <div className="website-logo"><img src={Logo} alt="Logo" /></div>
                            <div className="website-title">Transfigure.io</div>
                        </div>
                        <div className="website-copyright">&copy; 2020 Transfigure.io by Ricky Bruner</div>
                    </div>
                    <div className="social-section">
                        <div className="website-created-by">Check out my website, repos, this repo - and the socials</div>
                        <div class="footer-icons dark">
                            <div class="icon-container">
                                <a href="https://www.rickybruner.com/" target="_blank" rel="noopener noreferrer" class="footer-icon personalsite sm bd-thin">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faBolt} />
                                </a>
                                <a href="https://github.com/ricky-bruner" target="_blank" rel="noopener noreferrer" class="footer-icon github sm bd-thin">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://github.com/ricky-bruner/transfigure.io" target="_blank" rel="noopener noreferrer" class="footer-icon sourcecode sm bd-thin">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faCodeBranch} />
                                </a>
                                <a href="https://www.linkedin.com/in/rickybruner/" target="_blank" rel="noopener noreferrer" class="footer-icon linkedin sm bd-thin">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="https://www.facebook.com/ricky.bruner.56" target="_blank" rel="noopener noreferrer" class="footer-icon facebook sm bd-thin">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}