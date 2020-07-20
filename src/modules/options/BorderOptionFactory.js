export default function BorderOptionFactory(selection){
    switch(selection){
        case "standard":
            return [ "bd-thin", "bd-nm", "bd-thicc" ];

        case "neumorphismcards":
            return [ "bd-rounded", "bd-sharp" ];

        case "neonReflective":
            return [ "bd-nm", "bd-f", "bd-no" ];
            
        default:
            return [];

    }
}