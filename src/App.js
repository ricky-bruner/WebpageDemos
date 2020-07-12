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
        buttons: false
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
        const stateToChange = this.state;
        stateToChange[type] = true;
        stateToChange["home"] = false;
        stateToChange["selectedDemo"] = demoName;
        this.setState(stateToChange)
    }

    render(){
        return (
            <div className="app-view">
                <MainNavbar showOptions={this.showOptions} renderDemos={this.renderDemos} selectDemo={this.selectDemo} />
                <div className="content-container">
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
