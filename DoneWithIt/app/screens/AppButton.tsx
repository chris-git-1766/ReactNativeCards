import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import colors from "../config/colors";

interface ITitle {
    title: string,
    onPress : () => void  // function
}

function AppButton({title, onPress} :ITitle) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>

            <Text style={styles.text}>{title}</Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius:25,
        justifyContent: "center",
        alignItems:"center",
        padding: 15,
        width:"100%"

    },
    text: {
        color: colors.white,
        fontSize:18,
        textTransform:"uppercase",
        fontWeight:"bold"
    }
})

export default AppButton;