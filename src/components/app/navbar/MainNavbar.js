import React, { Component } from "react";
import RightArrow from "../../../img/right-arrow.png";
import OTIcon from "../../../img/online-tutorials-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faIcons, faAddressCard, faScroll, faHandPointer, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import "./mainnavbar.css";

export default class MainNavbar extends Component {
    state = {
    };

    showOptions = (option, expand = false) => {
        let newState = this.state;

        switch(option){
            case "buttons":
                newState.showButtonOptions = !this.state.showButtonOptions;
                // this.setState({ showButtonOptions: !this.state.showButtonOptions }, () => this.props.toggleNavbar());
                break;
            case "navbars":
                newState.showNavbarOptions = !this.state.showNavbarOptions;
                // this.setState({ showNavbarOptions: !this.state.showNavbarOptions }, () => this.props.toggleNavbar());
                break;
            case "cards":
                newState.showCardOptions = !this.state.showCardOptions;
                // this.setState({ showCardOptions: !this.state.showCardOptions }, () => this.props.toggleNavbar());
                break;
            case "testimonials":
                newState.showTestimonialOptions = !this.state.showTestimonialOptions;
                // this.setState({ showTestimonialOptions: !this.state.showTestimonialOptions }, () => this.props.toggleNavbar());
                break;
            case "icons":
                newState.showIconOptions = !this.state.showIconOptions;
                // this.setState({ showIconOptions: !this.state.showIconOptions }, () => this.props.toggleNavbar());
                break;
            case "scrollbars":
                newState.showScrollbarOptions = !this.state.showScrollbarOptions;
                // this.setState({ showScrollbarOptions: !this.state.showScrollbarOptions }, () => this.props.toggleNavbar());
                break;
            default:
                break;
        }

        if(expand){
            this.setState({newState}, () => this.props.toggleNavbar());
        } else {
            this.setState({newState});
        }

    }

    render(){
        return (
            <div className={this.props.expanded ? "navbar-container expanded" : "navbar-container"}>
                {/* {
                    this.state.expanded &&
                    <h2>Online Tutorials</h2>
                } */}
                {
                    !this.props.expanded &&
                    <img className="ot-icon" src={OTIcon} alt="Online Tutorials Icon" />
                }
                {
                    this.props.expanded &&
                    <div className="expanded-ot-icon">
                        <img className="ot-icon" src={OTIcon} alt="Online Tutorials Icon" />
                    </div>
                }
                <div className="toggle-navbar-button-container">
                    <div className="toggle-navbar-button" onClick={() => this.props.toggleNavbar()}>
                        <img src={RightArrow} alt="Right Arrow" onClick={() => this.props.toggleNavbar()}/>
                    </div>
                </div>
                {
                    this.props.expanded &&
                    <ul className="expanded-main-navbar">
                        <li>
                            <div className="navbar-section-header" id="home" onClick={(e) => this.props.renderDemos(e)}><span><FontAwesomeIcon icon={faHome} /></span> Home</div>
                            <div className="navbar-section-underline"></div>
                        </li>
                        <li className="navbar-section">
                            <div className="navbar-section-header" onClick={() => this.showOptions("navbars")}><span><FontAwesomeIcon icon={faMapMarkedAlt} /></span> Navbars</div>
                            {
                                !this.state.showNavbarOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showNavbarOptions &&
                                <ul className="navbar-section-list">
                                    <li><button onClick={() => this.props.selectDemo("navbars", "Targeted Hover")}>Targeted Hover</button></li>
                                    <li><button onClick={() => this.props.selectDemo("navbars", "Roving Border")}>Roving Border</button></li>
                                    <li><button onClick={() => this.props.selectDemo("navbars", "Swinging Border")}>Swinging Border</button></li>
                                    <li><button onClick={() => this.props.selectDemo("navbars", "Remote")}>Remote</button></li>
                                    <li><button onClick={() => this.props.selectDemo("navbars", "All")}>All Navbar Demos</button></li>
                                </ul>
                            }
                            {
                                this.state.showNavbarOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                        </li>
                        <li>
                            <div className="navbar-section-header" onClick={() => this.showOptions("icons")}><span><FontAwesomeIcon icon={faIcons} /></span> Icons</div>
                            {
                                !this.state.showIconOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showIconOptions &&
                                <ul className="navbar-section-list">
                                    <li><button onClick={() => this.props.selectDemo("icons", "Icon Animation")}>Icon Animation</button></li>
                                    <li><button onClick={() => this.props.selectDemo("icons", "All")}>All Icon Demos</button></li>
                                </ul>
                            }
                            {
                                this.state.showIconOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                        </li>
                        <li>
                            <div className="navbar-section-header" onClick={() => this.showOptions("cards")}><span><FontAwesomeIcon icon={faAddressCard} /></span> Cards</div>
                            {
                                !this.state.showCardOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showCardOptions &&
                                <ul className="navbar-section-list">
                                    <li><button onClick={() => this.props.selectDemo("cards", "Image Clip Hover")}>Image Clip Hover</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Depth Of Field")}>Depth Of Field</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Direction Aware")}>Direction Aware</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Game Style")}>Game Style</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Circle Reduction")}>Circle Reduction</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Swivel Rotation")}>Swivel Rotation</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Flip Up Hover")}>Flip Up Hover</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Isometric")}>Isometric</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Circle Growth")}>Circle Growth</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Image Slide Left")}>Image Slide Left</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Neumorphism")}>Neumorphism</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Skewed Border")}>Skewed Border</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Glowing")}>Glowing</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Greeting Card Style")}>Greeting Card Style</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Icon Growth")}>Icon Growth</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Circle Growth Icon")}>Circle Growth Icon</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "Hover Switch")}>Hover Switch</button></li>
                                    <li><button onClick={() => this.props.selectDemo("cards", "All")}>All Card Demos</button></li>
                                </ul>
                            }
                            {
                                this.state.showCardOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                        </li>
                        <li>
                            <div className="navbar-section-header" onClick={() => this.showOptions("testimonials")}><span><FontAwesomeIcon icon={faUsers} /></span> Testimonials</div>
                            {
                                !this.state.showTestimonialOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showTestimonialOptions &&
                                <ul className="navbar-section-list">
                                    <li><button onClick={() => this.props.selectDemo("testimonials", "Quote Movement")}>Quote Movement</button></li>
                                    <li><button onClick={() => this.props.selectDemo("testimonials", "Colorful Hover Quote Box")}>Colorful Hover Quote Box</button></li>
                                    <li><button onClick={() => this.props.selectDemo("testimonials", "Bottom Color Rise")}>Bottom Color Rise</button></li>
                                    <li><button onClick={() => this.props.selectDemo("testimonials", "All")}>All Testimonial Demos</button></li>
                                </ul>
                            }
                            {
                                this.state.showTestimonialOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                        </li>
                        <li>
                            <div className="navbar-section-header" onClick={() => this.showOptions("scrollbars")}><span><FontAwesomeIcon icon={faScroll} /></span> Scrollbars</div>
                            {
                                this.showScrollbarOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showScrollbarOptions &&
                                <ul className="navbar-section-list">
                                    {/* <li><button onClick={() => this.props.selectDemo("scrollbars", "Scrollbar Progress")}>Scrollbar Progress</button></li> */}
                                    <li><button onClick={() => this.props.selectDemo("scrollbars", "All")}>All Scrollbar Demos</button></li>
                                </ul>
                            }
                            {
                                !this.showScrollbarOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                        </li>
                        <li>
                            <div className="navbar-section-header" onClick={() => this.showOptions("buttons")}><span><FontAwesomeIcon icon={faHandPointer} /></span> Buttons</div>
                            {
                                this.showButtonOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showButtonOptions &&
                                <ul className="navbar-section-list">
                                    <li><button onClick={() => this.props.selectDemo("buttons", "Liquid Wave")}>Liquid Wave</button></li>
                                    <li><button onClick={() => this.props.selectDemo("buttons", "Neon Reflective")}>Neon Reflective</button></li>
                                    <li><button onClick={() => this.props.selectDemo("buttons", "3D")}>3D</button></li>
                                    <li><button onClick={() => this.props.selectDemo("buttons", "Oscillating Solid")}>Oscillating Solid</button></li>
                                    <li><button onClick={() => this.props.selectDemo("buttons", "Animated Outline")}>Animated Outline</button></li>
                                    <li><button onClick={() => this.props.selectDemo("buttons", "Shooting Border")}>Shooting Border</button></li>
                                    <li><button onClick={() => this.props.selectDemo("buttons", "Middle Out")}>Middle Out</button></li>
                                    <li><button onClick={() => this.props.selectDemo("buttons", "All")}>All Button Demos</button></li>
                                </ul>
                            }
                            {
                                !this.showButtonOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                        </li>
                    </ul>
                }
                {
                    !this.props.expanded &&
                    <ul className="collapsed-main-navbar">
                        {/* <li><div className="navbar-section-underline"></div></li> */}
                        <li className="collapsed-icon" id="home" onClick={(e) => this.props.renderDemos(e)}><FontAwesomeIcon icon={faHome} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                        <li className="collapsed-icon" onClick={() => this.showOptions("navbars", true)}><FontAwesomeIcon icon={faMapMarkedAlt} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                        <li className="collapsed-icon" onClick={() => this.showOptions("icons", true)}><FontAwesomeIcon icon={faIcons} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                        <li className="collapsed-icon" onClick={() => this.showOptions("cards", true)}><FontAwesomeIcon icon={faAddressCard} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                        <li className="collapsed-icon" onClick={() => this.showOptions("testimonials", true)}><FontAwesomeIcon icon={faUsers} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                        <li className="collapsed-icon" onClick={() => this.showOptions("scrollbars", true)}><FontAwesomeIcon icon={faScroll} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                        <li className="collapsed-icon" onClick={() => this.showOptions("buttons", true)}><FontAwesomeIcon icon={faHandPointer} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                    </ul>
                }
                <div className="toggle-navbar-button-container">
                    <div className="toggle-navbar-button" onClick={() => this.props.toggleNavbar()}>
                        <img src={RightArrow} alt="Right Arrow" onClick={() => this.props.toggleNavbar()}/>
                    </div>
                </div>
                {/* <button id="home" onClick={(e) => this.props.renderDemos(e)}>Home</button>
                <button id="navbars" onClick={(e) => this.props.renderDemos(e)}>Navbars</button>
                <button id="icons" onClick={(e) => this.props.renderDemos(e)}>Icons</button>
                <button id="cards" onClick={(e) => this.props.renderDemos(e)}>Cards</button>
                <button id="testimonials" onClick={(e) => this.props.renderDemos(e)}>Testimonials</button>
                <button id="scrollbars" onClick={(e) => this.props.renderDemos(e)}>Scrollbars</button>
                <button id="buttons" onClick={(e) => this.props.renderDemos(e)}>Buttons</button> */}
            </div>
        );
    }
}