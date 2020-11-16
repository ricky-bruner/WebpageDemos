import ThemeOptionsFactory from '../options/ThemeOptionsFactory';
import SizeOptionsFactory from '../options/SizeOptionsFactory';
import SpeedOptionFactory from '../options/SpeedOptionsFactory';
import ColorOptionsFactory from '../options/ColorOptionsFactory';
import BorderOptionFactory from '../options/BorderOptionFactory';
import CardNames from '../helpers/cards/CardNames';

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
        case CardNames.LeakyCauldronStyleCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;
        
        case CardNames.GameStyleCards:
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

        case CardNames.ImageClipHoverCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        case CardNames.DepthOfFieldCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case CardNames.DirectionAwareCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case CardNames.CircleReductionServiceCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case CardNames.SwivelRotationCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case CardNames.FlipUpHoverCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case CardNames.IsometricHoverCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            options.colors = ColorOptionsFactory("standard");
            options.color = "blue";
            options.useShowAllColors = true;
            return options;

        case CardNames.CircleGrowthServiceCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case CardNames.ImageSlideLeftCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.colors = ColorOptionsFactory("standard");
            options.color = "hotpink";
            options.useShowAllColors = true;
            return options;

        case CardNames.NeumorphismCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            options.borders = BorderOptionFactory("neumorphismcards");
            options.border = "bd-rounded";
            options.colors = ColorOptionsFactory("neumorphismcards");
            options.color = "teal";
            options.useShowAllColors = true;
            return options;

        case CardNames.SkewedBorderCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        case CardNames.GlowingCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        case CardNames.GreetingCardStyleCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            return options;

        case CardNames.CircleGrowthIconCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        case CardNames.IconGrowthCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        case CardNames.HoverSwitchCards:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            return options;

        default:
            return options;
    }
} 