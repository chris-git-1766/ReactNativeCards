import React from 'react';
import {Text, View,StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

function TextScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.farbe} numberOfLines={1}>lang
    fdsafdasf dsakflödskö fksa kfösdkö fdskaOpen mein Text up App.tsx to start working on your app!</Text>
    <Text onPress={()=> {

    }}>Open mein Text up App.tsx to start working on your app!</Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
        farbe: {
        color:"red"
    }
})
export default TextScreen;