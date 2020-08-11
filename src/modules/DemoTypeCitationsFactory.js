import DemoTypes from './helpers/DemoTypes';
import NavbarDemoCitationsFactory from './navbars/NavbarDemoCitationsFactory';
import CardDemoCitationsFactory from './cards/CardDemoCitationsFactory';
import ButtonDemoCitationsFactory from './buttons/ButtonDemoCitationsFactory';
import IconDemoCitationsFactory from './icons/IconDemoCitationsFactory';
import TestimonialDemoCitationsFactory from './testimonials/TestimonialDemoCitationsFactory';
import ScrollbarDemoCitationsFactory from './scrollbars/ScrollbarDemoCitationsFactory';

export default function DemoTypeCitationsFactory(type, demoName){
    switch(type){
        case DemoTypes.Cards:
            return CardDemoCitationsFactory(demoName);

        case DemoTypes.Buttons:
            return ButtonDemoCitationsFactory(demoName);

        case DemoTypes.Navbars:
            return NavbarDemoCitationsFactory(demoName);

        case DemoTypes.Icons:
            return IconDemoCitationsFactory(demoName);

        case DemoTypes.Testimonials:
            return TestimonialDemoCitationsFactory(demoName);

        case DemoTypes.Scrollbars:
            return ScrollbarDemoCitationsFactory(demoName);

        default:
            return null;
    }
} 