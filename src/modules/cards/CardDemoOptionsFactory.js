import ThemeOptionsFactory from '../options/ThemeOptionsFactory';
import SizeOptionsFactory from '../options/SizeOptionsFactory';
import SpeedOptionFactory from '../options/SpeedOptionsFactory';
import ColorOptionsFactory from '../options/ColorOptionsFactory';
import BorderOptionFactory from '../options/BorderOptionFactory';

export default function CardDemoOptionsFactory(demoName){
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
            options.colors = ColorOptionsFactory("standard");
            options.color = "blue";
            options.useShowAllColors = true;
            return options;

        case "CircleGrowthServiceCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case "ImageSlideLeftCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.colors = ColorOptionsFactory("standard");
            options.color = "hotpink";
            options.useShowAllColors = true;
            return options;

        case "NeumorphismCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            options.borders = BorderOptionFactory("neumorphismcards");
            options.border = "bd-rounded";
            options.colors = ColorOptionsFactory("neumorphismcards");
            options.color = "teal";
            options.useShowAllColors = true;
            return options;

        case "SkewedBorderCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        case "GlowingCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        case "GreetingCardStyleCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case "CircleGrowthIconCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        case "IconGrowthCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        case "HoverSwitchCards":
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        default:
            return options;
    }
} 