import React, { Component } from "react";

export default class MainNavbar extends Component {
    state = {

    };

    showOptions = (option) => {
        switch(option){
            case "buttons":
                this.setState({ showButtonOptions: !this.state.showButtonOptions });
                break;
            case "navbars":
                this.setState({ showNavbarOptions: !this.state.showNavbarOptions });
                break;
            case "cards":
                this.setState({ showCardOptions: !this.state.showCardOptions });
                break;
            case "testimonials":
                this.setState({ showTestimonialOptions: !this.state.showTestimonialOptions });
                break;
            case "icons":
                this.setState({ showIconOptions: !this.state.showIconOptions });
                break;
            case "scrollbars":
                this.setState({ showScrollbarOptions: !this.state.showScrollbarOptions });
                break;
            default:
                break;
        }
    }

    render(){
        return (
            <div className="navbar-container">
                <h2>Online Tutorials</h2>
                <ul>
                    <li>
                        <div className="navbar-section-header" id="home" onClick={(e) => this.props.renderDemos(e)}>Home</div>
                        <div className="navbar-section-underline"></div>
                    </li>
                    <li className="navbar-section">
                        <div className="navbar-section-header" onClick={() => this.showOptions("navbars")}>Navbars</div>
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
                        <div className="navbar-section-header" onClick={() => this.showOptions("icons")}>Icons</div>
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
                        <div className="navbar-section-header" onClick={() => this.showOptions("cards")}>Cards</div>
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
                                <li><button onClick={() => this.props.selectDemo("cards", "Flip Hover")}>Flip Hover</button></li>
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
                        <div className="navbar-section-header" onClick={() => this.showOptions("testimonials")}>Testimonials</div>
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
                        <div className="navbar-section-header" onClick={() => this.showOptions("scrollbars")}>Scrollbars</div>
                        {
                            this.showScrollbarOptions &&
                            <div className="navbar-section-underline"></div>
                        }
                        {
                            this.state.showScrollbarOptions &&
                            <ul className="navbar-section-list">
                                <li><button onClick={() => this.props.selectDemo("scrollbars", "Scrollbar Progress")}>Scrollbar Progress</button></li>
                                <li><button onClick={() => this.props.selectDemo("scrollbars", "All")}>All Scrollbar Demos</button></li>
                            </ul>
                        }
                        {
                            !this.showScrollbarOptions &&
                            <div className="navbar-section-underline"></div>
                        }
                    </li>
                    <li>
                        <div className="navbar-section-header" onClick={() => this.showOptions("buttons")}>Buttons</div>
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