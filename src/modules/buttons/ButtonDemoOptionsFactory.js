import ThemeOptionsFactory from '../options/ThemeOptionsFactory';
import SizeOptionsFactory from '../options/SizeOptionsFactory';
import SpeedOptionFactory from '../options/SpeedOptionsFactory';
import ColorOptionsFactory from '../options/ColorOptionsFactory';
import BorderOptionFactory from '../options/BorderOptionFactory';
import ButtonNames from '../helpers/buttons/ButtonNames';

export default function ButtonDemoOptionsFactory(demoName){
    let options = {
        borders: [],
        border: "",
        useShowAllBorders: false,
        colors: [],
        color: "",
        useShowAllColors: false,
        useReflective: false,
        reflective: "",
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
        case ButtonNames.LiquidWaveButtons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            options.speeds = SpeedOptionFactory("liquidWave");
            options.speed = "wave-nm";
            options.useShowAllSpeeds = true;
            options.colors = ColorOptionsFactory("liquidWave");
            options.color = "blue";
            options.useShowAllColors = true;
            return options;

        case ButtonNames.NeonReflectiveButtons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            options.borders = BorderOptionFactory("neonReflective");
            options.border = "bd-nm";
            options.useShowAllBorders = true;
            options.colors = ColorOptionsFactory("neonReflective");
            options.color = "blue";
            options.useShowAllColors = true;
            options.useReflective = true;
            options.reflective = "reflective"
            return options;

        case ButtonNames.ThreeDimensionalButtons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            return options;

        case ButtonNames.OscillatingSolidButtons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            options.colors = ColorOptionsFactory("standard");
            options.color = "blue";
            options.useShowAllColors = true;
            return options;

        case ButtonNames.AnimatedOutlineButtons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            options.colors = ColorOptionsFactory("standard");
            options.color = "blue";
            options.useShowAllColors = true;
            return options;

        case ButtonNames.ShootingBorderButtons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            options.colors = ColorOptionsFactory("standard");
            options.color = "blue";
            options.useShowAllColors = true;
            return options;

        case ButtonNames.MiddleOutButtons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            options.colors = ColorOptionsFactory("standard");
            options.color = "black";
            options.useShowAllColors = true;
            return options;

        default:
            return options;
    }
} 