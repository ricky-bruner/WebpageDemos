import ThemeOptionsFactory from '../options/ThemeOptionsFactory';
import SizeOptionsFactory from '../options/SizeOptionsFactory';
import SpeedOptionFactory from '../options/SpeedOptionsFactory';
import ColorOptionsFactory from '../options/ColorOptionsFactory';
import BorderOptionFactory from '../options/BorderOptionFactory';

export default function CardDemoOptionsFactory(demoName){
    let options = {
        colors: [],
        color: "",
        sizes: [],
        size: "",
        speeds: [],
        speed: "",
        themes: [],
        theme: "",
        borders: [],
        border: ""
    };
    
    switch(demoName){
        case "GameStyleCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.speeds = SpeedOptionFactory("standard");
            options.speed = "nm";
            options.colors = ColorOptionsFactory("standard");
            options.color = "blue";
            options.borders = BorderOptionFactory("standard");
            options.border = "bd-thicc";
            return options;

        case "ImageClipHoverCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        case "DepthOfFieldCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case "DirectionAwareCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case "CircleReductionServiceCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case "SwivelRotationCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case "FlipUpHoverCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case "IsometricHoverCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        default:
            return options;
    }
} 