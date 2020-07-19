export default function SpeedOptionFactory(selection){
    switch(selection){
        case "standard":
            return [ "fs", "nm", "sl" ];
            
        case "liquidwave":
            return [ "wave-fs", "wave-nm", "wave-sl" ];

        default:
            return [];

    }
}