import check from "@/constants/icons";
import { useState } from "react";
import { Pressable,StyleSheet,Image } from "react-native"
import { set_lines_data } from "../lines_data";
import { LinesValidNames } from "@/constants/lines";

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

function CheckBox({ line_name }:{ line_name:LinesValidNames }){
    const styles = StyleCheckBox();
    const [isChecked,setIsChecked] = useState<boolean>(false);

    const handleCheckBox = (line_name:LinesValidNames) => {
        set_lines_data(line_name,!isChecked);
        setIsChecked(!isChecked);
    }

    return(
        <Pressable
            style={styles.box}
            onPress={() => handleCheckBox(line_name)}
        >
            {isChecked ? 
                <Image source={check} style={styles.tick}/>
                : <></>
            }
        </Pressable>
    )
}

export default CheckBox