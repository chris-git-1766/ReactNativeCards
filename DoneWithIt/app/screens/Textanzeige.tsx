import React from 'react';
import {Text, StyleSheet, Platform} from "react-native";

interface IText {
    text:string;
    style:any
}
function Textanzeige(children:IText  ) {
    return (
       <Text style={[styles.text,children.style]}>{children.text}</Text>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize: Platform.OS === "android" ? 40 : 20,
        color: Platform.OS === "android" ? "yellow" : "blue"
    }
})
export default Textanzeige;