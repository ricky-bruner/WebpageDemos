import React, { Component } from "react";
import MainLogo from "../../../img/transfigureiologos/transfigure_io_transparent_code_blue.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faIcons, faAddressCard, faScroll, faHandPointer, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import DemoTypes from "../../../modules/helpers/DemoTypes";
import NavbarSection from "./NavbarSection";
import "./mainnavbar.css";
import NavbarToggleButton from "./NavbarToggleButton";
import CollapsedMainNavbar from "./CollapsedMainNavbar";
import { Link } from "react-router-dom";

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
                    <img className="ot-icon" src={MainLogo} alt="Online Tutorials Icon" />
                }
                {
                    this.props.expanded &&
                    <div className="expanded-ot-icon">
                        <img className="ot-icon" src={MainLogo} alt="Online Tutorials Icon" />
                    </div>
                }
                <NavbarToggleButton toggleNavbar={this.props.toggleNavbar} />
                {
                    this.props.expanded &&
                    <ul className="expanded-main-navbar">
                        <li className="navbar-section">
                            <Link to={"/"} className="navbar-section-header" id="home"><span><FontAwesomeIcon icon={faHome} /></span> Home</Link>
                            <div className="navbar-section-underline"></div>
                        </li>
                        <NavbarSection demoType={DemoTypes.Navbars} showOptionsType={this.state.showNavbarOptions} showOptions={this.showOptions} sectionIcon={faMapMarkedAlt} />
                        <NavbarSection demoType={DemoTypes.Icons} showOptionsType={this.state.showIconOptions} showOptions={this.showOptions} sectionIcon={faIcons} />
                        <NavbarSection demoType={DemoTypes.Cards} showOptionsType={this.state.showCardOptions} showOptions={this.showOptions} sectionIcon={faAddressCard} />
                        <NavbarSection demoType={DemoTypes.Testimonials} showOptionsType={this.state.showTestimonialOptions} showOptions={this.showOptions} sectionIcon={faUsers} />
                        <NavbarSection demoType={DemoTypes.Scrollbars} showOptionsType={this.state.showScrollbarOptions} showOptions={this.showOptions} sectionIcon={faScroll} />
                        <NavbarSection demoType={DemoTypes.Buttons} showOptionsType={this.state.showButtonOptions} showOptions={this.showOptions} sectionIcon={faHandPointer} />
                    </ul>
                }
                {
                    !this.props.expanded &&
                    <CollapsedMainNavbar showOptions={this.showOptions} />
                }
                <NavbarToggleButton toggleNavbar={this.props.toggleNavbar} />
            </div>
        );
    }
}