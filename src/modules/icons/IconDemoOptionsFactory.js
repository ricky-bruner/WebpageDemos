import ThemeOptionsFactory from '../options/ThemeOptionsFactory';
import SizeOptionsFactory from '../options/SizeOptionsFactory';
// import SpeedOptionFactory from '../options/SpeedOptionsFactory';
import ColorOptionsFactory from '../options/ColorOptionsFactory';
import BorderOptionFactory from '../options/BorderOptionFactory';
import IconNames from '../helpers/icons/IconNames';

export default function IconDemoOptionsFactory(demoName) {
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
        theme: "",
        useOverflowing: false,
        overflowing: false
    };

    switch(demoName) {
        case IconNames.FlipCubeSocialMediaIcons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            options.colors = ColorOptionsFactory("SocialMediaOne");
            options.color = "default";
            options.useShowAllColors = true;
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            return options;
        
        case IconNames.AnimatedSnakeSocialMediaIcons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.borders = BorderOptionFactory("standard");
            options.border = "bd-thin";
            options.useShowAllBorders = true;
            options.colors = ColorOptionsFactory(IconNames.AnimatedSnakeSocialMediaIcons);
            options.color = "default";
            options.useShowAllColors = true;
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            return options;
        
        case IconNames.MagicLineSocialMediaIcons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.borders = BorderOptionFactory("standard");
            options.border = "bd-nm";
            options.useShowAllBorders = true;
            options.colors = ColorOptionsFactory("SocialMediaFull");
            options.color = "default";
            options.useShowAllColors = true;
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            return options;
        
        case IconNames.IsometricCubeSocialMediaIcons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            options.colors = ColorOptionsFactory("SocialMediaFull");
            options.color = "default";
            options.useShowAllColors = true;
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            return options;
        
        case IconNames.IsometricHoverRiseSocialMediaIcons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.colors = ColorOptionsFactory(IconNames.IsometricSocialMediaIcons);
            options.color = "default";
            options.useShowAllColors = true;
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            options.useOverflowing = true;
            options.overflowing = false;
            return options;
        
        case IconNames.IsometricSocialMediaIcons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";
            options.colors = ColorOptionsFactory("SocialMediaFull");
            options.color = "default";
            options.useShowAllColors = true;
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            return options;

        case IconNames.HoverRiseLayeredSocialMediaIcons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "light";
            options.colors = ColorOptionsFactory(IconNames.HoverRiseLayeredIcons);
            options.color = "default";
            options.useShowAllColors = true;
            options.sizes = SizeOptionsFactory("standard");
            options.size = "lg";
            options.useShowAllSizes = true;
            return options;
        
        case IconNames.AnimatedMovementIcons:
            options.themes = ThemeOptionsFactory("standard");
            options.theme = "dark";   
            options.colors = ColorOptionsFactory(IconNames.AnimatedMovementIcons);
            options.color = "lightning";
            options.useShowAllColors = true;
            options.borders = BorderOptionFactory("standard");
            options.border = "bd-nm";
            options.useShowAllBorders = true;     
            return options;

        default:
            return options;
    }
}