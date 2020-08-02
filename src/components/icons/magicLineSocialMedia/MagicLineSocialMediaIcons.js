import React, { Component } from 'react';
import { faTwitter, faInstagram, faLinkedinIn, faWhatsapp, faGooglePlusG, faFacebookMessenger, faSkype, faYoutube, faPinterest, faRedditAlien, faSnapchatGhost, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './magicLineSocialMediaIcons.css';

export default class MagicLineSocialMediaIcons extends Component {
    state = {};

    render() {
        return (
            <div className={"magic-line-social-media-icons " + this.props.settings.theme}>
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.showAllBorders &&
                    <div className="icon-container" data-text={this.props.settings.size}>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faTwitter} /></span>
                            <span className="base"><FontAwesomeIcon icon={faTwitter} /></span>
                        </a>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faFacebook} /></span>
                            <span className="base"><FontAwesomeIcon icon={faFacebook} /></span>
                        </a>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faWhatsapp} /></span>
                            <span className="base"><FontAwesomeIcon icon={faWhatsapp} /></span>
                        </a>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                            <span className="base"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                        </a>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faInstagram} /></span>
                            <span className="base"><FontAwesomeIcon icon={faInstagram} /></span>
                        </a>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faGooglePlusG} /></span>
                            <span className="base"><FontAwesomeIcon icon={faGooglePlusG} /></span>
                        </a>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faFacebookMessenger} /></span>
                            <span className="base"><FontAwesomeIcon icon={faFacebookMessenger} /></span>
                        </a>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faSkype} /></span>
                            <span className="base"><FontAwesomeIcon icon={faSkype} /></span>
                        </a>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faYoutube} /></span>
                            <span className="base"><FontAwesomeIcon icon={faYoutube} /></span>
                        </a>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faPinterest} /></span>
                            <span className="base"><FontAwesomeIcon icon={faPinterest} /></span>
                        </a>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faRedditAlien} /></span>
                            <span className="base"><FontAwesomeIcon icon={faRedditAlien} /></span>
                        </a>
                        <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span className="magic-line"><FontAwesomeIcon icon={faSnapchatGhost} /></span>
                            <span className="base"><FontAwesomeIcon icon={faSnapchatGhost} /></span>
                        </a>
                    </div>
                }
                {
                    this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.showAllBorders &&
                    this.props.settings.colors.map(c => {
                        return (
                            <div className="icon-container" data-text={c}>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faTwitter} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faTwitter} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faFacebook} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faFacebook} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faWhatsapp} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faWhatsapp} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faInstagram} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faInstagram} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faGooglePlusG} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faGooglePlusG} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faFacebookMessenger} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faFacebookMessenger} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faSkype} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faSkype} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faYoutube} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faYoutube} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faPinterest} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faPinterest} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faRedditAlien} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faRedditAlien} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + c + " xs " + this.props.settings.border}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faSnapchatGhost} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faSnapchatGhost} /></span>
                                </a>
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    this.props.settings.showAllBorders &&
                    this.props.settings.borders.map(b => {
                        return (
                            <div className="icon-container" data-text={b}>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faTwitter} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faTwitter} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faFacebook} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faFacebook} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faWhatsapp} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faWhatsapp} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faInstagram} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faInstagram} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faGooglePlusG} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faGooglePlusG} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faFacebookMessenger} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faFacebookMessenger} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faSkype} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faSkype} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faYoutube} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faYoutube} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faPinterest} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faPinterest} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faRedditAlien} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faRedditAlien} /></span>
                                </a>
                                <a href="#home" className={"magic-line-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span className="magic-line"><FontAwesomeIcon icon={faSnapchatGhost} /></span>
                                    <span className="base"><FontAwesomeIcon icon={faSnapchatGhost} /></span>
                                </a>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}