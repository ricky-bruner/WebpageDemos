import React, { Component } from 'react';
import MainNavbar from './components/app/navbar/MainNavbar';
import MainContent from './components/app/content/MainContent';

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
        };
        
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
        };

        stateToChange[type] = true;
        stateToChange["selectedDemo"] = demoName;
        this.setState(stateToChange);
    }

    toggleNavbar = () => {
        this.setState({expanded: !this.state.expanded});
    }

    render(){
        return (
            <div className="app-view">
                <MainNavbar showOptions={this.showOptions} 
                            renderDemos={this.renderDemos} 
                            selectDemo={this.selectDemo} 
                            expanded={this.state.expanded} 
                            toggleNavbar={this.toggleNavbar} />
                <MainContent expanded={this.state.expanded} 
                            home={this.state.home} 
                            navbars={this.state.navbars} 
                            icons={this.state.icons} 
                            cards={this.state.cards} 
                            testimonials={this.state.testimonials} 
                            scrollbars={this.state.scrollbars} 
                            buttons={this.state.buttons} 
                            selectedDemo={this.state.selectedDemo} />
            </div>
        );
    }
}