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

        default:
            return [];

    }
}