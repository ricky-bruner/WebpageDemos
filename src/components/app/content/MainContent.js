import React, { Component } from 'react';
import IconDemos from '../../../components/icons/IconDemos';
import ScrollbarDemos from '../../../components/scrollbars/ScrollbarDemos';
import CardDemosBody from '../../../components/cards/CardDemosBody';
import NavbarDemos from '../../../components/navbars/NavbarDemos';
import TestimonialDemos from '../../../components/testimonials/TestimonialDemos';
import HomePage from '../../../components/homepage/HomePage';
import './maincontent.css';
import ButtonDemosBody from '../../buttons/ButtonDemosBody';

export default class MainContent extends Component {
    render() {
        return (
            <div className={this.props.expanded ? "content-container expanded" : "content-container"}>
                {
                    this.props.home &&
                    <HomePage />
                }
                {
                    this.props.navbars &&
                    <NavbarDemos selectedDemo={this.props.selectedDemo} />
                }
                {
                    this.props.icons &&
                    <IconDemos selectedDemo={this.props.selectedDemo} />
                }
                {
                    this.props.cards &&
                    <CardDemosBody selectedDemo={this.props.selectedDemo} />
                }
                {
                    this.props.testimonials &&
                    <TestimonialDemos selectedDemo={this.props.selectedDemo} />
                }
                {
                    this.props.scrollbars &&
                    <ScrollbarDemos selectedDemo={this.props.selectedDemo} />
                }
                {
                    this.props.buttons &&
                    <ButtonDemosBody selectedDemo={this.props.selectedDemo} />
                }
            </div>
        );
    }
}