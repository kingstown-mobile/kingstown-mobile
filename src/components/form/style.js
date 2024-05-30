import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#FFD105",
        alignItems: "center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#FFF",
        height:40,
        margin:12,
        paddingLeft:10
    },
    buttonClean:{
        borderRadius:50,
        borderWidth: 2, 
        borderColor: '#000',
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#5922A0",
        paddingTop:10,
        paddingBottom:10,
        marginLeft:12,
        margin:30
    },
    textButtonClean:{
        fontSize:22,
        color:"#FFFFFF"
    },
    textEsqueceuSenha:{
        textAlign: "right",
        paddingRight: 30,
        fontSize: 17,
        textDecorationLine: "underline"
    },
});

export default styles;