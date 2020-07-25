import React, { Component } from "react";
import RightArrow from "../../../img/right-arrow.png";
import OTIcon from "../../../img/online-tutorials-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faIcons, faAddressCard, faScroll, faHandPointer, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import DemoFetcher from "../../../modules/helpers/DemoFetcher";
import DemoTypes from "../../../modules/helpers/DemoTypes";
import "./mainnavbar.css";

export default class MainNavbar extends Component {
    state = {
    };

    showOptions = (option, expand = false) => {
        let newState = this.state;

        switch(option){
            case DemoTypes.Buttons:
                newState.showButtonOptions = !this.state.showButtonOptions;
                break;

            case DemoTypes.Navbars:
                newState.showNavbarOptions = !this.state.showNavbarOptions;
                break;

            case DemoTypes.Cards:
                newState.showCardOptions = !this.state.showCardOptions;
                break;

            case DemoTypes.Testimonials:
                newState.showTestimonialOptions = !this.state.showTestimonialOptions;
                break;

            case DemoTypes.Icons:
                newState.showIconOptions = !this.state.showIconOptions;
                break;

            case DemoTypes.Scrollbars:
                newState.showScrollbarOptions = !this.state.showScrollbarOptions;
                break;

            default:
                break;
        }

        if(expand) {
            this.setState({newState}, () => this.props.toggleNavbar());
        } else {
            this.setState({newState});
        }

    }

    render(){
        return (
            <div className={this.props.expanded ? "navbar-container expanded" : "navbar-container"}>
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
                            <div className="navbar-section-header" id="home" onClick={() => this.props.selectDemo(DemoTypes.Home, "")}><span><FontAwesomeIcon icon={faHome} /></span> Home</div>
                            <div className="navbar-section-underline"></div>
                        </li>
                        <li className="navbar-section">
                            <div className="navbar-section-header" onClick={() => this.showOptions(DemoTypes.Navbars)}><span><FontAwesomeIcon icon={faMapMarkedAlt} /></span> Navbars</div>
                            {
                                !this.state.showNavbarOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showNavbarOptions &&
                                <ul className="navbar-section-list">
                                    {
                                        DemoFetcher(DemoTypes.Navbars).map(d => <li><button onClick={() => this.props.selectDemo(DemoTypes.Navbars, d.demoName)}>{d.friendlyName}</button></li>)
                                    }
                                    <li><button onClick={() => this.props.selectDemo(DemoTypes.Navbars, "All")}>All Navbar Demos</button></li>
                                </ul>
                            }
                            {
                                this.state.showNavbarOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                        </li>
                        <li>
                            <div className="navbar-section-header" onClick={() => this.showOptions(DemoTypes.Icons)}><span><FontAwesomeIcon icon={faIcons} /></span> Icons</div>
                            {
                                !this.state.showIconOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showIconOptions &&
                                <ul className="navbar-section-list">
                                    {/* {
                                        DemoFetcher(DemoTypes.Icons).map(d => <li><button onClick={() => this.props.selectDemo(DemoTypes.Icons, d.demoName)}>{d.friendlyName}</button></li>)
                                    } */}
                                    <li><button onClick={() => this.props.selectDemo(DemoTypes.Icons, "Icon Animation")}>Icon Animation</button></li>
                                    <li><button onClick={() => this.props.selectDemo(DemoTypes.Icons, "All")}>All Icon Demos</button></li>
                                </ul>
                            }
                            {
                                this.state.showIconOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                        </li>
                        <li>
                            <div className="navbar-section-header" onClick={() => this.showOptions(DemoTypes.Cards)}><span><FontAwesomeIcon icon={faAddressCard} /></span> Cards</div>
                            {
                                !this.state.showCardOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showCardOptions &&
                                <ul className="navbar-section-list">
                                    {
                                        DemoFetcher(DemoTypes.Cards).map(d => <li><button onClick={() => this.props.selectDemo(DemoTypes.Cards, d.demoName)}>{d.friendlyName}</button></li>)
                                    }
                                    <li><button onClick={() => this.props.selectDemo(DemoTypes.Cards, "All")}>All Card Demos</button></li>
                                </ul>
                            }
                            {
                                this.state.showCardOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                        </li>
                        <li>
                            <div className="navbar-section-header" onClick={() => this.showOptions(DemoTypes.Testimonials)}><span><FontAwesomeIcon icon={faUsers} /></span> Testimonials</div>
                            {
                                !this.state.showTestimonialOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showTestimonialOptions &&
                                <ul className="navbar-section-list">
                                    {
                                        DemoFetcher(DemoTypes.Testimonials).map(d => <li><button onClick={() => this.props.selectDemo(DemoTypes.Testimonials, d.demoName)}>{d.friendlyName}</button></li>)
                                    }
                                    <li><button onClick={() => this.props.selectDemo(DemoTypes.Testimonials, "All")}>All Testimonial Demos</button></li>
                                </ul>
                            }
                            {
                                this.state.showTestimonialOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                        </li>
                        <li>
                            <div className="navbar-section-header" onClick={() => this.showOptions(DemoTypes.Scrollbars)}><span><FontAwesomeIcon icon={faScroll} /></span> Scrollbars</div>
                            {
                                this.showScrollbarOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showScrollbarOptions &&
                                <ul className="navbar-section-list">
                                    {
                                        DemoFetcher(DemoTypes.Scrollbars).map(d => <li><button onClick={() => this.props.selectDemo(DemoTypes.Scrollbars, d.demoName)}>{d.friendlyName}</button></li>)
                                    }
                                    {/* <li><button onClick={() => this.props.selectDemo("scrollbars", "Scrollbar Progress")}>Scrollbar Progress</button></li> */}
                                    <li><button onClick={() => this.props.selectDemo(DemoTypes.Scrollbars, "All")}>All Scrollbar Demos</button></li>
                                </ul>
                            }
                            {
                                !this.showScrollbarOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                        </li>
                        <li>
                            <div className="navbar-section-header" onClick={() => this.showOptions(DemoTypes.Buttons)}><span><FontAwesomeIcon icon={faHandPointer} /></span> Buttons</div>
                            {
                                this.showButtonOptions &&
                                <div className="navbar-section-underline"></div>
                            }
                            {
                                this.state.showButtonOptions &&
                                <ul className="navbar-section-list">
                                    {
                                        DemoFetcher(DemoTypes.Buttons).map(d => <li><button onClick={() => this.props.selectDemo(DemoTypes.Buttons, d.demoName)}>{d.friendlyName}</button></li>)
                                    }
                                    <li><button onClick={() => this.props.selectDemo(DemoTypes.Buttons, "All")}>All Button Demos</button></li>
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
                        <li className="collapsed-icon" onClick={() => this.showOptions(DemoTypes.Navbars, true)}><FontAwesomeIcon icon={faMapMarkedAlt} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                        <li className="collapsed-icon" onClick={() => this.showOptions(DemoTypes.Icons, true)}><FontAwesomeIcon icon={faIcons} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                        <li className="collapsed-icon" onClick={() => this.showOptions(DemoTypes.Cards, true)}><FontAwesomeIcon icon={faAddressCard} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                        <li className="collapsed-icon" onClick={() => this.showOptions(DemoTypes.Testimonials, true)}><FontAwesomeIcon icon={faUsers} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                        <li className="collapsed-icon" onClick={() => this.showOptions(DemoTypes.Scrollbars, true)}><FontAwesomeIcon icon={faScroll} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                        <li className="collapsed-icon" onClick={() => this.showOptions(DemoTypes.Buttons, true)}><FontAwesomeIcon icon={faHandPointer} /></li>
                        <li><div className="navbar-section-underline"></div></li>
                    </ul>
                }
                <div className="toggle-navbar-button-container">
                    <div className="toggle-navbar-button" onClick={() => this.props.toggleNavbar()}>
                        <img src={RightArrow} alt="Right Arrow" onClick={() => this.props.toggleNavbar()}/>
                    </div>
                </div>
            </div>
        );
    }
}