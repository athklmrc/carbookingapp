import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import React from "react";

import styles from "../style/styles";
import cardStyle from "../style/cardStyle";

/**  TODO import the style, dont create
 *  this component accepts: Brand of the car (toyota, yudai, etc..), fuel (diesel,..),
 *  car registration number, image of the car
 **/
export default function CardBookingRoom({
  img,
  floor,
  seats,
  longtable,
  flatscreen,
  landlinephone,
  speakers,
  projector,
  onPress,
}) {

  function Text2(props) {
    return (
      <Text style={{fontSize: 15}}>{props.children}</Text>
    )
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPressOut={onPress}>
    <View style={[cardStyle.container, styles.shadows]}>
      <Image source={img} style={cardStyle.image} />
      <View style={cardStyle.text}>
        <Text2>at floor {floor}</Text2>
        <Text2>{seats} Seats</Text2>
        <Text2>{longtable} Longtable</Text2>
        <Text2>{flatscreen} Flatscreen</Text2>
        <Text2>{landlinephone} Landline phone</Text2>
        <Text2>{speakers} Speakers</Text2>
        <Text2>{projector} Projector</Text2>

      </View>
    </View>
    </TouchableOpacity>
  );
}
