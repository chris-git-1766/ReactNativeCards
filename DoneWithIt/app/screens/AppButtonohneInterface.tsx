import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import colors from "../config/colors";


function AppButtonohneInterface() {
    return (
        <TouchableOpacity style={styles.button} >

            <Text style={styles.text}>
                  Inhalt
            </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
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
export default AppButtonohneInterface;