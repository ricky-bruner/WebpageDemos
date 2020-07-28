import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedinIn, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import './isometricHoverRiseSocialMediaIcons.css';

export default class IsometricHoverRiseSocialMediaIcons extends Component {
    state = {};

    getOverflowSection = () => {
        let pairings = [];

        for (let i = 0; i < 30; i++) {
            this.props.settings.colors.map(color => {
                switch (color) {
                    case "facebook":
                        pairings.push({ color: color, icon: faFacebookF });
                        break;

                    case "twitter":
                        pairings.push({ color: color, icon: faTwitter });
                        break;

                    case "whatsapp":
                        pairings.push({ color: color, icon: faWhatsapp });
                        break;

                    case "linkedin":
                        pairings.push({ color: color, icon: faLinkedinIn });
                        break;

                    case "instagram":
                        pairings.push({ color: color, icon: faInstagram });
                        break;

                    default:
                        break;
                }
            });
        }

        return pairings;
    }

    render() {
        return (
            <div id="home" className={"isometric-hover-rise-social-media-icons " + this.props.settings.theme}>
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.overflowing &&
                    <div className="icon-container" data-text={this.props.settings.size}>
                        <div className="isometric-hover-rise-social-media-icon-row">
                            <div className={"isometric-hover-rise-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                </a>
                            </div>
                            <div className={"isometric-hover-rise-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><FontAwesomeIcon icon={faTwitter} /></span>
                                </a>
                            </div>
                            <div className={"isometric-hover-rise-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                                </a>
                            </div>
                            <div className={"isometric-hover-rise-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                </a>
                            </div>
                            <div className={"isometric-hover-rise-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><FontAwesomeIcon icon={faInstagram} /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                }
                {
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.overflowing &&
                    this.props.settings.showAllColors &&
                    this.props.settings.colors.map(c => {
                        return (
                            <div className="icon-container" data-text={c}>
                                <div className="isometric-hover-rise-social-media-icon-row">
                                    <div className={"isometric-hover-rise-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                        </a>
                                    </div>
                                    <div className={"isometric-hover-rise-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                                        </a>
                                    </div>
                                    <div className={"isometric-hover-rise-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                                        </a>
                                    </div>
                                    <div className={"isometric-hover-rise-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                        </a>
                                    </div>
                                    <div className={"isometric-hover-rise-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.overflowing &&
                    this.props.settings.showAllSizes &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className="icon-container" data-text={s}>
                                <div className="isometric-hover-rise-social-media-icon-row">
                                    <div className={"isometric-hover-rise-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                        </a>
                                    </div>
                                    <div className={"isometric-hover-rise-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                                        </a>
                                    </div>
                                    <div className={"isometric-hover-rise-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                                        </a>
                                    </div>
                                    <div className={"isometric-hover-rise-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                        </a>
                                    </div>
                                    <div className={"isometric-hover-rise-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    this.props.settings.overflowing &&
                    <div className={"icon-container overflowing"} data-text={"Overflow"}>
                        <div className="overflow-container">
                            <div className={"isometric-hover-rise-social-media-icon-row overflowing"}>
                                {
                                    this.getOverflowSection().map(p => {
                                        return (
                                            <div className={"isometric-hover-rise-social-media-icon " + (this.props.settings.color === "default" ? p.color : this.props.settings.color) + " " + this.props.settings.size}>
                                                <a href="#home">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span><FontAwesomeIcon icon={p.icon} /></span>
                                                </a>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}