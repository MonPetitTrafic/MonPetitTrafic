import { useState } from "react";
import { Text,Pressable,StyleSheet } from "react-native"

function StyleButton(){
    return StyleSheet.create({
        btn:{
            borderColor: 'black',
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: '9999px'
        },

        btn_active:{
            backgroundColor: '#ccaf84'
        },

        btn_deactivate:{
            backgroundColor: 'transparent'
        },

        inner_text:{
            fontSize: 20,
            textAlign: 'center',
            padding: 5
        }
    })
}

function CustomButton({ txt,onPress }:CustomButtonProps){
    const styles = StyleButton();
    const [isPressed,setIsPressed] = useState<boolean>(false);

    return(
        <Pressable
            style={isPressed ? [styles.btn, styles.btn_active] : [styles.btn, styles.btn_deactivate]}
            onPress={onPress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
        >
            <Text style={styles.inner_text}>{txt}</Text>
        </Pressable>
    )
}

export default CustomButton