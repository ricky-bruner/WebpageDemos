import ThemeOptionsFactory from '../options/ThemeOptionsFactory';
// import SizeOptionsFactory from '../options/SizeOptionsFactory';
// import SpeedOptionFactory from '../options/SpeedOptionsFactory';
// import ColorOptionsFactory from '../options/ColorOptionsFactory';
// import BorderOptionFactory from '../options/BorderOptionFactory';
import TestimonialNames from '../helpers/testimonials/TestimonialNames';

export default function TestimonialDemoOptionsFactory(demoName) {
    let options = {
        borders: [],
        border: "",
        useShowAllBorders: false,
        colors: [],
        color: "",
        useShowAllColors: false,
        sizes: [],
        size: "",
        useShowAllSizes: false,
        speeds: [],
        speed: "",
        useShowAllSpeeds: false,
        themes: [],
        theme: ""
    };

    switch(demoName) {
        case TestimonialNames.QuoteMovementTestimonials:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";    
            return options;

        case TestimonialNames.ColorfulHoverQuoteBoxTestimonials:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        case TestimonialNames.BottomColorRiseTestimonials:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        default:
            return options;
    }
}