import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import globals from "../config/globals";
import colors from "../config/colors";
import styles from "../style/styles";



export default function CardHistory({
  img,
  number,
  time,
  date_start,
  date_end,
  status,
}) {
  return (
    <View style={cardHistoryStyle.container}>
      <View style={cardHistoryStyle.header}>
        <Text style={[cardHistoryStyle.headerText,{marginRight: 10}]}>1</Text>
        <Text style={cardHistoryStyle.headerText}>#{number}</Text>
        <Text style={[cardHistoryStyle.headerText,{marginLeft: "auto"}]}>TIME: {time}</Text>
      </View>
      <View style={cardHistoryStyle.content}>
        <View style={styles.flexRow}>
          <Image style={cardHistoryStyle.image} source={img}/>
          <View style={{marginLeft: 8}}>
            <Text>From:</Text>
            <Text>To:</Text>
          </View>
          <View style={{marginLeft: 4}}>
            <Text>{date_start}</Text>
            <Text>{date_end}</Text>
          </View>
          <View style={{marginLeft: "auto"}}>
            <Text>STATUS:</Text>
            <Text style={{backgroundColor: "green", color: "white"}}>{status}</Text>
          </View>

        </View>

      </View>
    </View>
  );
}

const cardHistoryStyle = StyleSheet.create({
  container: {
    borderRadius: globals.radius,
    marginVertical: 4,
  },
  header: {
    flexDirection: "row",
    //justifyContent: "space-between",
    padding: 8,
    backgroundColor: colors.grey,
    borderTopEndRadius: globals.radius,
    borderTopStartRadius: globals.radius,
    borderWidth: 1,
    borderColor: colors.outline,

  },
  headerText: {
    //color: colors.white,
  },
  image: {
    width: 120,
    height: 80,
  },
  content: {
    borderTopColor: colors.grey2,
    borderWidth: 1,
    borderColor: colors.outline,
    padding: 8,
    backgroundColor: colors.grey2,
    borderBottomEndRadius: globals.radius,
    borderBottomStartRadius: globals.radius,
  },
});
