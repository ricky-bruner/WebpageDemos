import React from 'react';
import DemoTypes from './helpers/DemoTypes';
import CardDemoHeader from '../components/cards/CardDemoHeader';
import ButtonDemoHeader from '../components/buttons/ButtonDemoHeader';
import NavbarDemoHeader from '../components/navbars/NavbarDemoHeader';
import IconDemoHeader from '../components/icons/IconDemoHeader';
import TestimonialDemoHeader from '../components/testimonials/TestimonialDemoHeader';
import ScrollbarDemoHeader from '../components/scrollbars/ScrollbarDemoHeader';

export default function DemoHeaderFactory(type){
    switch(type){
        case DemoTypes.Cards:
            return <CardDemoHeader />

        case DemoTypes.Buttons:
            return <ButtonDemoHeader />

        case DemoTypes.Navbars:
            return <NavbarDemoHeader />

        case DemoTypes.Icons:
            return <IconDemoHeader />

        case DemoTypes.Testimonials:
            return <TestimonialDemoHeader />

        case DemoTypes.Scrollbars:
            return <ScrollbarDemoHeader />

        default:
            return null;
    }
} 