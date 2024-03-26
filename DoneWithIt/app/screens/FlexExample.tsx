import React from 'react';
import {View} from "react-native";

function FlexExample() {
    return (
        <View style={{
// container
            flex:1,
            flexDirection: "row",
            justifyContent:"space-evenly", //prim /horizontal
            alignItems:"center" // sek / vertikal
        }}>
            <View style={{

                width:100,
                height: 100,
                backgroundColor: "tomato",

            }}/>
            <View style={{

                backgroundColor: "green",
                width:100,
                height: 100,
              //  top: 20

            }}/>
            <View style={{

                width:100,
                height: 100,
                backgroundColor: "red",
                position:"absolute",
                top:200,
                left:200

            }}/>

        </View>

    );
}

export default FlexExample;