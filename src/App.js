import React, { Component } from 'react';
import IconDemos from './components/icons/IconDemos';
import ScrollbarDemos from './components/scrollbars/ScrollbarDemos';
import CardDemos from './components/cards/CardDemos';
import NavbarDemos from './components/navbars/NavbarDemos';
import TestimonialDemos from './components/testimonials/TestimonialDemos';

export default class App extends Component {
    state = {
        navbars: false,
        icons: false,
        cards: false,
        testimonials: false,
        scrollbars: false,
        buttons: false
    }

    renderDemos = (e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = !this.state[e.target.id]
        this.setState(stateToChange)
    }

    render(){
        return (
            <div className="App">
                <button id="navbars" onClick={(e) => this.renderDemos(e)}>Navbars</button>
                <button id="icons" onClick={(e) => this.renderDemos(e)}>Icons</button>
                <button id="cards" onClick={(e) => this.renderDemos(e)}>Cards</button>
                <button id="testimonials" onClick={(e) => this.renderDemos(e)}>Testimonials</button>
                <button id="scrollbars" onClick={(e) => this.renderDemos(e)}>Scrollbars</button>
                <button id="buttons" onClick={(e) => this.renderDemos(e)}>Buttons</button>
                {
                    this.state.navbars &&
                    <NavbarDemos />
                }
                {
                    this.state.icons &&
                    <IconDemos />
                }
                {
                    this.state.cards &&
                    <CardDemos />
                }
                {
                    this.state.testimonials &&
                    <TestimonialDemos />
                }
                {
                    this.state.scrollbars &&
                    <ScrollbarDemos />
                }
            </div>
        );
    }
}
