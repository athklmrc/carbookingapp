import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { router } from 'expo-router'
import React from "react";

import styles from "../style/styles";
import cardStyle from "../style/cardStyle";


/**  TODO import the style, dont create
 *  this component accepts: Brand of the car (toyota, yudai, etc..), fuel (diesel,..),
 *  car registration number, image of the car
 **/
export default function CardBookingVehicle({
  id,
  brand,
  type,
  fuel,
  numberplate,
  img,
  onPress,
}) {

  function TextSpecs(props) {
    return (
      <Text style={{ color: "grey"}}>{props.children}</Text>
    )
  }


  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[cardStyle.container, styles.shadows]}>
        <Image source={img} style={cardStyle.image} />
        <View style={cardStyle.text}>
          <View style={styles.flexRow}>
            <View>
              <TextSpecs>Brand: </TextSpecs>
              <TextSpecs>Type: </TextSpecs>
              <TextSpecs>Fuel: </TextSpecs>
              <TextSpecs>Plate: </TextSpecs>
            </View>
            <View style={{marginLeft: 10}}>
              <Text>{brand}</Text>
              <Text>{type}</Text>
              <Text>{fuel}</Text>
              <Text>{numberplate}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
