import { View, Text, Image, StyleSheet, Pressable, Modal, Button, TextInput } from "react-native";
import { useState } from "react";

import AppButton from "../../component/AppButton";
import AppInputDate from "../../component/AppInputDate";
import colors from "../../config/colors";
import AppInputText from "../../component/AppInputText";
import styles from "../../style/styles";

//import {style} from "../../style";


export default function Assist() {

  function TextSpec(props) {
    return (
      <Text style={{fontSize: 15}}>{props.children} </Text>
    )
  }

  return (
    <View style={styles.root}>


      <View style={bookPageStyle.selectRow}>
        <Text>From:</Text>
        <Text>To:</Text>
      </View>
      <View style={bookPageStyle.selectRow}>
        <AppInputDate icon="calendar-month"/>
        <Text>Until</Text>
        <AppInputDate icon="calendar-month"/>
      </View>

      <View style={bookPageStyle.selectRow}>
        <AppInputDate icon="access-time"/>
        <Text>Until</Text>
        <AppInputDate icon="access-time"/>
      </View>



      <Text>More Details:</Text>

      <Pressable>
        <AppInputText editable={true}  multiline={true} style={{borderWidth: 2}}/>

      </Pressable>

      <View style={bookPageStyle.buttons}>
        <AppButton text="Cancel" style={{backgroundColor: "red"}} />
        <AppButton text="Confirm" />
      </View>


      <TextInput placeholder="wemewkr" style={{borderColor:"black", borderBottomWidth: 2}} />

    </View>
  );
}

const bookPageStyle = StyleSheet.create({


  dateSelectContainer: {
    marginHorizontal: 30,

  },
  dateSelect: {
    marginHorizontal: 30,

  },
  selectRowContainer: {
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: "green",
  },
  button: {
    width: 10,
    flexDirection: "row",
  },
  buttons: {
    gap: 30,
    width: 160,
    flexDirection: "row",
    justifyContent: "space-between",

  },
  selectRow: {
    flexDirection: "row",
    marginVertical: 6,
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 2,
    borderColor: "red",
  },
  moreDetail: {
    borderWidth: 1,
    borderColor: colors.outline,
    height: 100,
  },
  image: {
    width: 140,
    height: 120,
  }

});