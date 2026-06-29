import { useState } from "react";
import { Text,Pressable,StyleSheet } from "react-native"

function StyleButton(){
    return StyleSheet.create({
        btn:{
            borderColor: 'black',
            borderWidth: 1,
            borderStyle: "solid"
        },

        btn_active:{
            backgroundColor: '#ccaf84'
        },

        btn_deactivate:{
            backgroundColor: 'transparent'
        }
    })
}

function CustomButton({ txt,onPress }:CustomButtonProps){
    const styles = StyleButton();
    const [isPressed,setIsPressed] = useState<boolean>(false);

    const augmentedOnPress = () => {
        setIsPressed(!isPressed);
        onPress(); // onPress should not return something
    }

    return(
        <Pressable
            style={isPressed ? [styles.btn, styles.btn_active] : [styles.btn, styles.btn_deactivate]}
            onPress={augmentedOnPress}
        >
            <Text>{txt}</Text>
        </Pressable>
    )
}

export default CustomButton