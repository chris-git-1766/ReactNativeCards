import React from 'react';
import {Image, Text, View, StyleSheet} from "react-native";

function HundTextMosh() {
    return (
        <View style={styles.container}>
            <Image source={{width: 200, height: 300, uri: "https://picsum.photos/id/237/200/300"}}/>
            <Text numberOfLines={1}
            >
                Open up App.tsx to start working on your app!
            </Text>
            <Image style={styles.image} source={require("../assets/mosh.jpg")}/>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
       flex: 1,
            //backgroundColor: 'lightblue',
          flexDirection:"column",   // main axis
          //  alignItems: 'center',
          justifyContent: 'space-evenly', // main axis

    },
    farbe: {
        color:"red"
    },
    image: {
        width:"30%",
            height:"30%"
    }
})

export default HundTextMosh;