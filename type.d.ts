import type { ImageSourcePropType } from "react-native";
import { LinesValidNames } from "./constants/lines";
import { RelativePathString } from "expo-router";

declare global {

    interface CustomButtonProps {
        txt: string,
        target: unknown,
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