import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from 'expo-constants';

import colors from "../config/colors";

export default function OfflineNotice(props) {
    const netInfo = useNetInfo();
    if(netInfo.type !== "Unknown" & netInfo.isInternetReachable === false) {
        return (
            <View style={style.container}>
                <Text style={style.text}> No Connection </Text>
            </View>
        )
    }
    return null;
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 60,
        width: '100%',
        backgroundColor: "hsla(0,100%,50%,0.8)",
        justifyContent: 'center',
        alignItems: "center",
        zIndex: 1,
    },
    text: {
        marginTop: Constants.statusBarHeight-20,
        fontWeight: "600",
        fontSize: 18,
        color: colors.white,
    },
})