import type { ImageSourcePropType } from "react-native";
import { LinesValidNames } from "./constants/lines";

declare global {

    interface CustomButtonProps {
        txt: string,
        onPress: () => void
    }

    interface LineSettings {
        name: LinesValidNames,
        slug: string,
        icon: ImageSourcePropType,
        checked: boolean
    }

}

export {};