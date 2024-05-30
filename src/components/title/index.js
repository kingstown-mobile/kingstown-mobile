import React from "react";
import { View,  Image } from "react-native";

import styles from "./style";

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Image 
                source={require('../img-kingstown/logo_bg_branco.png')}
                style={styles.img}
            />
        </View>
    )
}