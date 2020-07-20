import CardDemoFactory from './cards/CardDemoFactory';
import ButtonDemoFactory from './buttons/ButtonDemoFactory';
import NavbarDemoFactory from './navbars/NavbarDemoFactory';
import IconDemoFactory from './icons/IconDemoFactory';
import TestimonialDemoFactory from './testimonials/TestimonialDemoFactory';
import ScrollbarDemoFactory from './scrollbars/ScrollbarDemoFactory';

export default function DemoTypeFactory(type, demoName, settings){
    switch(type){
        case "card":
            return CardDemoFactory(demoName, settings);

        case "button":
            return ButtonDemoFactory(demoName, settings);

        case "navbar":
            return NavbarDemoFactory(demoName, settings);

        case "icon":
            return IconDemoFactory(demoName, settings);

        case "testimonial":
            return TestimonialDemoFactory(demoName, settings);

        case "scrollbar":
            return ScrollbarDemoFactory(demoName, settings);

        default:
            return null;
    }
} 