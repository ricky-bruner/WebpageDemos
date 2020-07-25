import DemoTypes from './helpers/DemoTypes';
import CardDemoOptionsFactory from './cards/CardDemoOptionsFactory';
import ButtonDemoOptionsFactory from './buttons/ButtonDemoOptionsFactory';
import NavbarDemoOptionsFactory from './navbars/NavbarDemoOptionsFactory';
import IconDemoOptionsFactory from './icons/IconDemoOptionsFactory';
import TestimonialDemoOptionsFactory from './testimonials/TestimonialDemoOptionsFactory';
import ScrollbarDemoOptionsFactory from './scrollbars/ScrollbarDemoOptionsFactory';

export default function DemoTypeOptionsFactory(type, demoName){
    switch(type){
        case DemoTypes.Cards:
            return CardDemoOptionsFactory(demoName);

        case DemoTypes.Buttons:
            return ButtonDemoOptionsFactory(demoName);

        case DemoTypes.Navbars:
            return NavbarDemoOptionsFactory(demoName);

        case DemoTypes.Icons:
            return IconDemoOptionsFactory(demoName);

        case DemoTypes.Testimonials:
            return TestimonialDemoOptionsFactory(demoName);

        case DemoTypes.Scrollbars:
            return ScrollbarDemoOptionsFactory(demoName);

        default:
            return null;
    }
} 