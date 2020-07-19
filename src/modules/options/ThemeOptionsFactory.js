export default function ThemeOptionsFactory(selection){
    switch(selection){
        case "standard":
            return ["dark", "light"];

        default:
            return [];
    }
}