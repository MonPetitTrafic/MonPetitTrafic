import check from "@/constants/icons";
import { useState } from "react";
import { View,StyleSheet,Image } from "react-native"

function StyleCheckBox(){
    return StyleSheet.create({
        box:{
            borderWidth: 2,
            borderColor: 'black',
            width: 30,
            height: 30,
            marginVertical: 8,
            marginRight: 10
        },

        tick:{
            width: 27,
            height: 27
        }
    })
}

function CheckBox(){
    const styles = StyleCheckBox();
    const [isChecked,setIsChecked] = useState<boolean>(false);

    return(
        <View style={styles.box}>
            {isChecked ? 
                <Image source={check} style={styles.tick}/>
                : <></>
            }
        </View>
    )
}

export default CheckBox