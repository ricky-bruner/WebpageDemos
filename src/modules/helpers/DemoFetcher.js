import CardNames from "./cards/CardNames";
import DemoTypes from "./DemoTypes";
import ButtonNames from "./buttons/ButtonNames";
import NavbarNames from "./navbars/NavbarNames";
import TestimonialNames from "./testimonials/TestimonialNames";
import IconNames from "./icons/IconNames";

export default function DemoFetcher(type) {
    let demoNames = {};

    switch(type) {
        case DemoTypes.Cards:
            demoNames = CardNames;
            break;

        case DemoTypes.Buttons:
            demoNames = ButtonNames;
            break;

        case DemoTypes.Navbars:
            demoNames = NavbarNames;
            break;

        case DemoTypes.Testimonials:
            demoNames = TestimonialNames;
            break;

        case DemoTypes.Icons:
            demoNames = IconNames;
            break;

        case DemoTypes.Scrollbars:
            demoNames = {};
            break;

        default:
            demoNames = {};
            break;
    }

    let demos = [];

    Object.keys(demoNames).forEach(key => {
        let demo = {
            demoName: demoNames[key],
            friendlyName: demoNames[key].toFriendlyName(type),
            demoClass: demoNames[key].toClassName(),
            demoTitle: demoNames[key].toTitleName()
        }

        demos.push(demo);
    })

    return demos;
}