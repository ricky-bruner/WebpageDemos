import React, { Component } from 'react';
import IconDemos from './components/icons/IconDemos';
import ScrollbarDemos from './components/scrollbars/ScrollbarDemos';
import CardDemos from './components/cards/CardDemos';
import NavbarDemos from './components/navbars/NavbarDemos';
import TestimonialDemos from './components/testimonials/TestimonialDemos';
import ButtonDemos from './components/buttons/ButtonDemos';
import HomePage from './components/homepage/HomePage';
import MainNavbar from './components/app/MainNavbar';

export default class App extends Component {
    state = {
        home: true,
        navbars: false,
        icons: false,
        cards: false,
        testimonials: false,
        scrollbars: false,
        buttons: false,
        expanded: true
    }

    renderDemos = (e) => {
        let newState = {
            home: false,
            navbars: false,
            icons: false,
            cards: false,
            testimonials: false,
            scrollbars: false,
            buttons: false
        }
        
        switch(e.target.id){
            case "home":
                newState.home = true;
                break;
            case "navbars":
                newState.navbars = true;
                break;
            case "icons":
                newState.icons = true;
                break;
            case "cards":
                newState.cards = true;
                break;
            case "testimonials":
                newState.testimonials = true;
                break;
            case "scrollbars":
                newState.scrollbars = true;
                break;
            case "buttons":
                newState.buttons = true;
                break;
            default:
                newState.home = true;
                break;
        }

        this.setState(newState);
    }

    selectDemo = (type, demoName) => {
        let stateToChange = {
            home: false,
            navbars: false,
            icons: false,
            cards: false,
            testimonials: false,
            scrollbars: false,
            buttons: false
        }

        stateToChange[type] = true;
        stateToChange["selectedDemo"] = demoName;
        this.setState(stateToChange)
    }

    toggleNavbar = () => {
        this.setState({expanded: !this.state.expanded});
    }

    render(){
        return (
            <div className="app-view">
                <MainNavbar showOptions={this.showOptions} renderDemos={this.renderDemos} selectDemo={this.selectDemo} expanded={this.state.expanded} toggleNavbar={this.toggleNavbar}/>
                <div className={this.state.expanded ? "content-container expanded" : "content-container"}>
                    {
                        this.state.home &&
                        <HomePage />
                    }
                    {
                        this.state.navbars &&
                        <NavbarDemos selectedDemo={this.state.selectedDemo} />
                    }
                    {
                        this.state.icons &&
                        <IconDemos selectedDemo={this.state.selectedDemo} />
                    }
                    {
                        this.state.cards &&
                        <CardDemos selectedDemo={this.state.selectedDemo} />
                    }
                    {
                        this.state.testimonials &&
                        <TestimonialDemos selectedDemo={this.state.selectedDemo} />
                    }
                    {
                        this.state.scrollbars &&
                        <ScrollbarDemos selectedDemo={this.state.selectedDemo} />
                    }
                    {
                        this.state.buttons &&
                        <ButtonDemos selectedDemo={this.state.selectedDemo} />
                    }
                </div>
            </div>
        );
    }
}
