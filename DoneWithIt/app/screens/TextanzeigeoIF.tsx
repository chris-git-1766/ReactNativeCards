import React from 'react';
import {Text, StyleSheet, Platform} from "react-native";

interface IText {
    text:string;
    style:any
}
function Textanzeige( {text, style} :IText) {
    return (
       <Text style={[style]}>{text}</Text>

    );
}
const styles = StyleSheet.create({
    text:{
        //fontsize: 40,
        fontSize: Platform.OS === "android" ? 40 : 20,
        color: Platform.OS === "android" ? "yellow" : "blue"
    }
})
export default Textanzeige;