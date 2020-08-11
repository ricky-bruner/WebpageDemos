import ThemeOptionsFactory from '../options/ThemeOptionsFactory';
// import SizeOptionsFactory from '../options/SizeOptionsFactory';
// import SpeedOptionFactory from '../options/SpeedOptionsFactory';
import ColorOptionsFactory from '../options/ColorOptionsFactory';
import BorderOptionFactory from '../options/BorderOptionFactory';
import NavbarNames from '../helpers/navbars/NavbarNames';

export default function NavbarDemoOptionsFactory(demoName) {
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
        case NavbarNames.TargetedHoverNavbars:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            options.borders = BorderOptionFactory("standard");
            options.border = "bd-nm";
            options.useShowAllBorders = true;
            options.colors = ColorOptionsFactory("standard");
            options.color = "hotpink";
            options.useShowAllColors = true;
            return options;

        case NavbarNames.RovingBorderNavbars:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.borders = BorderOptionFactory("standard");
            options.border = "bd-nm";
            options.useShowAllBorders = true;
            options.colors = ColorOptionsFactory("standard");
            options.color = "black";
            options.useShowAllColors = true;
            return options;

        case NavbarNames.SwingingBorderNavbars:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.borders = BorderOptionFactory("standard");
            options.border = "bd-nm";
            options.useShowAllBorders = true;
            options.colors = ColorOptionsFactory("standard");
            options.color = "yellow";
            options.useShowAllColors = true;
            return options;

        case NavbarNames.CornerBracketsHoverNavbars:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.borders = BorderOptionFactory("standard");
            options.border = "bd-nm";
            options.useShowAllBorders = true;
            options.colors = ColorOptionsFactory("standard");
            options.color = "yellow";
            options.useShowAllColors = true;
            return options;

        case NavbarNames.RemoteControlNavbars:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            options.colors = ColorOptionsFactory("standard");
            options.color = "redorange";
            options.useShowAllColors = true;
            return options;

        default:
            return options;
    }
}