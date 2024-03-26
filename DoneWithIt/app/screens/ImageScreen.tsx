import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View, Pressable} from "react-native";

function ImageScreen() {
    return (
        <View >
           <Image  blurRadius={1} source={require("../assets/mosh.jpg")}/>
        <Pressable onPress={()=>console.log("pressed")}>
                <Image source={{ width: 200, height:300, uri: "https://picsum.photos/id/237/200/300"}}/>
        </Pressable>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'lightblue',
    },

})

export default ImageScreen;