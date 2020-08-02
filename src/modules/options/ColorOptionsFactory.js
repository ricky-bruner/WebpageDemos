import IconNames from "../helpers/icons/IconNames";

export default function ColorOptionsFactory(selection){
    switch(selection){
        case "standard":
            return [ "blue", "mint", "lightgreen", "green", "purple", "pink", "hotpink", "red", "redorange", "orange", "yellow", "white", "black" ];

        case "liquidWave":
            return [ "blue", "carribean", "mint", "lightgreen", "green", "purple", "pink", "hotpink", "red", "redorange", "orange", "yellow", "white", "black" ];

        case "neumorphismcards":
            return [ "teal", "purple", "red", "orange", "yellow", "green", "blue", "pink" ];

        case "neonReflective":
            return [ "green", "mint", "cyan", "blue", "purple", "magenta", "pink", "hotpink", "red", "orange", "yellow", "white" ];

        case IconNames.AnimatedMovementIcons:
            return [ "lightning", "fire", "neon", "fuscia", "electric", "black", "white" ];

        case IconNames.AnimatedSnakeSocialMediaIcons:
        case IconNames.HoverRiseLayeredIcons:
        case "SocialMediaOne":
            return [ "default", "facebook", "twitter", "googleplus", "linkedin", "instagram" ];

        case IconNames.IsometricSocialMediaIcons:
        case "SocialMediaTwo":
            return [ "default", "facebook", "twitter", "whatsapp", "linkedin", "instagram" ];

        case "SocialMediaFull":
            return [ "default", "facebook", "twitter", "googleplus", "linkedin", "instagram", "whatsapp", "messenger", "skype", "pinterest", "youtube", "reddit", "snapchat" ];

        default:
            return [];

    }
}