import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import colors from "../config/colors";
import globals from "../config/globals";
import IconStatusFail from "./IconStatusFail";
import IconStatusSuccess from "./IconStatusSuccess";
import IconStatusPending from "./IconStatusPending";

// ! THIS IS OLD -----  MAYBE  NOT USE!!

export default function CardStatus({ status1 }) {

  const statusIcon = {
    sucess: require('../res/svg/status_good.svg'),
    fail: require('../res/svg/status_bad.svg'),
    pending: require('../res/svg/status_pending.svg'),
  }
  const statusColor = {
    sucess: colors.approved,
    fail: colors.disapproved,
    pending: colors.waiting,
  }
  const statusString = {
    sucess: "Congratulations, your room reservation has been approved",
    fail: "The room you booked has been cancelled",
    pending: "Your reserved room is waiting for approval",
  }

  return (
    <View style={[cardStyle.container, cardStyle.shadows]}>
      <View style={cardStyle.header}>
        <Text style={cardStyle.headerText}>this is card header</Text>
      </View>
      <View style={cardStyle.content}>
        <Text>this is card content</Text>
        <IconStatusFail />
        <IconStatusSuccess />
        <IconStatusPending  width={60} height={60}  />

      </View>
    </View>
  );
}

const cardStyle = StyleSheet.create({
  container: {
    marginVertical: 6,
    //borderRadius: globals.radius,
  },
  header: {
    padding: 8,
    backgroundColor: 'red',
    borderTopEndRadius: globals.radius,
    borderTopStartRadius: globals.radius,
  },
  headerText: {
    color: colors.white,
  },
  shadows: {
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    elevation: 10, // android
  },
  content: {
    padding: 8,
    backgroundColor: colors.grey,
    borderBottomEndRadius: globals.radius,
    borderBottomStartRadius: globals.radius,
  },
});
