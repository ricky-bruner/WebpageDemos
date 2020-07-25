import CardDemoFactory from './cards/CardDemoFactory';
import ButtonDemoFactory from './buttons/ButtonDemoFactory';
import NavbarDemoFactory from './navbars/NavbarDemoFactory';
import IconDemoFactory from './icons/IconDemoFactory';
import TestimonialDemoFactory from './testimonials/TestimonialDemoFactory';
import ScrollbarDemoFactory from './scrollbars/ScrollbarDemoFactory';
import DemoTypes from './helpers/DemoTypes';

export default function DemoTypeFactory(type, demoName, settings){
    switch(type){
        case DemoTypes.Cards:
            return CardDemoFactory(demoName, settings);

        case DemoTypes.Buttons:
            return ButtonDemoFactory(demoName, settings);

        case DemoTypes.Navbars:
            return NavbarDemoFactory(demoName, settings);

        case DemoTypes.Icons:
            return IconDemoFactory(demoName, settings);

        case DemoTypes.Testimonials:
            return TestimonialDemoFactory(demoName, settings);

        case DemoTypes.Scrollbars:
            return ScrollbarDemoFactory(demoName, settings);

        default:
            return null;
    }
} 