export default function BorderOptionFactory(selection){
    switch(selection){
        case "standard":
            return [ "bd-thin", "bd-nm", "bd-thicc" ];
            
        default:
            return [];

    }
}