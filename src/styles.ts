import { StyleSheet } from "react-native";

export default StyleSheet.create({

    bodyview:{
        backgroundColor: '#ffdfae'
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'center'
    },

    logoview:{
        marginTop: 20,
        marginBottom: 20        
    },

    home_logo:{
        width: 300,
        height: 300,
        borderRadius: '24px'
    },

    version_label:{
        fontSize: 12,
        color: 'gray',
        verticalAlign: 'bottom'
    },

    body:{
        margin: 10
    },

    home_prbs:{
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: '36px',
        marginBottom: 20,
        height: 250
    },

    last_modif_title:{
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center'
    },

    last_modif_date:{
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: 10
    },

    home_alert_icons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },

    line_icon:{
        width: 45,
        height: 45
    },

    button_container:{

    },

    title:{
        fontSize: 50,
        textAlign: 'left',
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 600
    },
    
    checkbox_line:{
        flexDirection:'row',
        margin: 2.5,
        marginLeft: 10
    }

})