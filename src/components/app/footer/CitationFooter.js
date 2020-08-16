import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faPaypal, faPatreon, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import OTLogo from '../../../img/online-tutorials-icon.png'
import './citationFooter.css';

export default class CitationFooter extends Component {
    state = {};

    render() {
        return (
            <div className="right">
                <div className="citation-footer">
                    <div className="citation-details-section-left">
                        <div className="citation-title-section">
                            
                            <div className="information-text"><span className="website-title">Transfigure.io </span> is a passion project that is prominantly powered by the skills and charity of Online Tutorial's Muhammad Irshad and the amazing fontawesome. Please see their site linked here, and please dontate at any of the following:</div>
                        </div>
                        <div className="fontawesome-details-section">
                            <div className="citation-fontawesome-icon">
                                <FontAwesomeIcon icon={faFontAwesome} />
                            </div>
                            <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer" className="citation-title">Font Awesome</a>
                        </div>
                    </div>
                    <div className="citation-details-section-right">
                        <div className="onlinetutorials-title-section">
                            <div className="website-logo"><img src={OTLogo} alt="Logo" /></div>
                            <div className="citation-title">Online Tutorials</div>
                        </div>
                        <div className="ot-created-by">
                            by Muhammad Irshad
                        </div>
                        <div class="footer-icons dark">
                            <div class="icon-container">
                                <a href="https://www.youtube.com/c/OnlineTutorials4Designers/featured" target="_blank" rel="noopener noreferrer" class="footer-icon youtube xs bd-thin">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                                <a href="https://www.udemy.com/course/css-hover-animation-effects-from-beginners-to-expert/?referralCode=90A9FFA7990A4491CF8D" target="_blank" rel="noopener noreferrer" class="footer-icon udemy xs bd-thin">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260.2 213.4" width="20" height="20"><title>udemy</title><path class="st0" d="M88.5.9c11.6 3.6 15.2 12.9 15.2 23.5-.1 8.4-1.1 16.8-3.1 25-4.3 18.7-9.6 37.2-14 55.8-3.6 15.3-6.9 30.8-7 46.6.1 4.3.8 8.6 2 12.7 2.3 8.2 9.2 8.8 14.4 3.8 3.3-3.2 6.3-6.6 9-10.3 13-17.3 24.5-35.7 34.3-55 9.5-18.5 31.2-60.3 32.5-62.8 6.8-12.5 25.6-10.4 31.3 1.8 3.2 6.6 5 13.9 5.3 21.2.5 15.8 2 59.9 2.7 66.2 1.3 12.2 9.1 16.1 19.5 9.3 6.3-4.1 12-9.3 17.7-14.2 5.3-4.7 8.1-4.2 10.7 2.4 2.3 5.8 1.3 11.6-.6 17.1-6.4 18.6-20.3 28.5-38.8 32.5-5.9 1.3-12 1.4-18 .4-13.3-2.2-21.8-9.9-26.9-21.8-4.9-11.5-6.4-44.2-7.5-48.4-1.8 3.8-23.1 47.7-34.3 64.4-7 10.7-15.5 20.4-25.3 28.7-9.7 8.1-20.7 13.1-33.6 13.4-15.6.4-26.9-6.7-34.7-19.9-5-8.5-7.1-18-7.8-27.8-1-13.7 1.2-27.1 4.2-40.5 1-4.3 1.7-8.7 2.8-14.2-4.3 2.2-7.1 4.2-10.3 5.3-3.8 1.3-7.9 2.6-11.9 2.5C2.1 118.2 0 102.5 0 99.9c4.8-3.7 9.9-7.1 14.3-11.1 21-19 36.8-41.8 48.2-67.6C66.3 12.7 71 5.4 79.4.9c2.8-1.2 5.3-1.3 9.1 0z"/></svg>
                                </a>
                                <a href="https://www.paypal.com/paypalme/OnlineTutorials" target="_blank" rel="noopener noreferrer" class="footer-icon paypal xs bd-thin">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faPaypal} />
                                </a>
                                <a href="https://www.patreon.com/onlinetutorials" target="_blank" rel="noopener noreferrer" class="footer-icon patreon xs bd-thin">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faPatreon} />
                                </a>
                                <a href="https://www.facebook.com/onlinetutorialsYT/" target="_blank" rel="noopener noreferrer" class="footer-icon facebook xs bd-thin">
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