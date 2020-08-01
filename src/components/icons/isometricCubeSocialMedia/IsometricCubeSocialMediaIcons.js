import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedinIn, faFacebookF, faWhatsapp, faGooglePlusG, faFacebookMessenger, faSkype, faYoutube, faPinterest, faRedditAlien, faSnapchatGhost } from "@fortawesome/free-brands-svg-icons";
import './isometricCubeSocialMediaIcons.css';

export default class IsometricCubeSocialMediaIcons extends Component {
    state = {};

    render() {
        return (
            <div className={"isometric-cube-social-media-icons " + this.props.settings.theme}>
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    <div className="icon-container" data-text={this.props.settings.size}>
                        <div className="isometric-cube-social-media-icon-row">
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faFacebookF} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faFacebookF} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faFacebookF} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faFacebookF} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faFacebookF} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faFacebookF} /></div>
                            </a>
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faTwitter} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faTwitter} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faTwitter} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faTwitter} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faTwitter} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faTwitter} /></div>
                            </a>
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                            </a>
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                            </a>
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faInstagram} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faInstagram} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faInstagram} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faInstagram} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faInstagram} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faInstagram} /></div>
                            </a>
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faWhatsapp} /></div>
                            </a>
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                            </a>
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faSkype} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faSkype} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faSkype} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faSkype} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faSkype} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faSkype} /></div>
                            </a>
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faPinterest} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faPinterest} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faPinterest} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faPinterest} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faPinterest} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faPinterest} /></div>
                            </a>
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faYoutube} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faYoutube} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faYoutube} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faYoutube} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faYoutube} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faYoutube} /></div>
                            </a>
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faRedditAlien} /></div>
                            </a>
                            <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <div class="side top"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                <div class="side front"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                <div class="side back"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                <div class="side right"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                <div class="side left"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                <div class="side bottom"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                            </a>
                        </div>
                    </div>
                }
                {
                    !this.props.settings.showAllSizes &&
                    this.props.settings.showAllColors &&
                    this.props.settings.colors.map(c => {
                        return (
                            <div className="icon-container" data-text={c}>
                                <div className="isometric-cube-social-media-icon-row">
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faFacebookF} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faFacebookF} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faFacebookF} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faFacebookF} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faFacebookF} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faFacebookF} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faTwitter} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faInstagram} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faSkype} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faSkype} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faSkype} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faSkype} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faSkype} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faSkype} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faPinterest} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faPinterest} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faPinterest} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faPinterest} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faPinterest} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faPinterest} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faYoutube} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faYoutube} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faYoutube} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faYoutube} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faYoutube} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faYoutube} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + c + " xs"}>
                                        <div class="side top"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                    </a>
                                </div>
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllColors &&
                    this.props.settings.showAllSizes &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className="icon-container" data-text={s}>
                                <div className="isometric-cube-social-media-icon-row">
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faFacebookF} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faFacebookF} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faFacebookF} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faFacebookF} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faFacebookF} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faFacebookF} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faTwitter} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faInstagram} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faWhatsapp} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faFacebookMessenger} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faSkype} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faSkype} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faSkype} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faSkype} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faSkype} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faSkype} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faPinterest} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faPinterest} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faPinterest} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faPinterest} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faPinterest} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faPinterest} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faYoutube} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faYoutube} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faYoutube} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faYoutube} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faYoutube} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faYoutube} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faRedditAlien} /></div>
                                    </a>
                                    <a href="#home" className={"isometric-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                        <div class="side top"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                        <div class="side front"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                        <div class="side back"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                        <div class="side right"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                        <div class="side left"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                        <div class="side bottom"><FontAwesomeIcon icon={faSnapchatGhost} /></div>
                                    </a>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}