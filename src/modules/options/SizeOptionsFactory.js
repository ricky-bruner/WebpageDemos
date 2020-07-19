export default function SizeOptionsFactory(selection){
    switch(selection){
        case "standard":
            return ["xlg", "lg", "md", "sm", "xs"];
            
        default:
            return [];

    }
}