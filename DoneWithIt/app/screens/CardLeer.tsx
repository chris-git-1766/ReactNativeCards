import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import colors from "../config/colors";
import Textanzeige from "./Textanzeige";

 interface ICard {
    title: string,
    subtitle :string,
    image:any
}
function CardLeer({title, subtitle, image}:ICard) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={require("../assets/jacket.jpg")}/>
            <View style={styles.detailsContainer}>
            <Textanzeige style={styles.title} text={title}/>
            <Textanzeige style={styles.subtitle} text={subtitle}/>
            </View>
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        overflow: "hidden"
    },
    detailsContainer: {
        padding:20,
    },
    image: {
        width:"100%",
        height:200
    },
    title: {
        marginBottom: 7
    },
    subtitle: {
        fontSize: 10
    }

})

export default CardLeer;