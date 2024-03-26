import { StatusBar } from 'expo-status-bar';
import {
    Alert,
    Button,
    Dimensions,
    Image,
    ImageBackground,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import TextScreen from "./app/screens/TextScreen";
import ImageScreen from "./app/screens/ImageScreen";
import React from "react";
import FlexExample from "./app/screens/FlexExample";
import Textanzeige from "./app/screens/Textanzeige";
import HundTextMosh from "./app/screens/HundTextMosh";
import AppButton from "./app/screens/AppButton";
import Card from "./app/screens/Card";
import AppButtonohneInterface from "./app/screens/AppButtonohneInterface";
import TextanzeigeoIF from "./app/screens/TextanzeigeoIF";
import CardLeer from "./app/screens/CardLeer";



export default function App() {
    const products =
        [{title:"Jacket", subtitle:"gut gefüttert",
            image:"./app/assets/jacket.jpg"},
            {title:"Couch", subtitle:"gut eingelegen",
            image:"./app/assets/couch.jpg"},
            {title:"Nachhilfe", subtitle:"React native",
                image:"./app/assets/mosh.jpg"},
            {title:"Sessel", subtitle:"ganz in weiss",
                image:"./app/assets/chair.jpg"}];

console.log(products);
    const onPressFunction = () => {
  console.log("pressed");
}
    return (

        <SafeAreaView>
            <ImageBackground style={styles.background}
            source={require("./app/assets/background.jpg")}>
                {products.map((item, index)=>
                    <Card key={index}
                          title={item.title}
                          subtitle={item.subtitle}
                          image={item.image}/>
                )}
                {/*
                 <Card title={"jacket"} subtitle={"gut gefüttert"}
                       image={require("./app/assets/jacket.jpg")}/>
                <CardLeer/>
                   <Textanzeige style={styles.textanzeige} text={"neuer Text"}/>
                <View>
                    <AppButtonohneInterface/>
                    <AppButton title={"meinButtonText"} onPress={onPressFunction}/>

                    <View style={styles.loginButton}> </View>
                    <View style={styles.registerButton}> </View>
                </View>
                <TextanzeigeoIF style={styles.textanzeige} text={"Neuer Text"}/>
 */}

            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1, // image takes the entire screen
        height:844,
        width:390,
        justifyContent:"space-between",
        overflow:"scroll"

    },    registerButton: {
        width:"100%",
        height:70,
        backgroundColor:"green"
    },
    loginButton: {
        width:"100%",
        height:70,
        alignItems: "center",
        backgroundColor:"red"
    },
    textanzeige: {
        color:"red",
        margin:10
    }


});
