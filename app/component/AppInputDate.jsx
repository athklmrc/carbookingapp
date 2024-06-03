import {  View, Text, TextInput, Pressable, TouchableWithoutFeedback, Button, Modal, StyleSheet } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "../style/styles";
import inputStyle from "../style/inputStyle";
import colors from "../config/colors";
import cardStyle from "../style/cardStyle";

export default function AppInputDate({icon, style}) {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={[inputStyle.container, dateStyle.container, style]}>
          <MaterialIcons name={icon} size={24} color="grey" style={inputStyle.icon}/>
          <Text>00/00/0000</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={dateStyle.modalView}>
          <Button title="close" onPress={()=> setModalVisible(false)} />
          <View style={dateStyle.modalBox}>
            <Text>Select the date</Text>
          </View>
        </View>
      </Modal>
    </>

  )
}

const dateStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "auto",

  },
  modalView: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "rgba(180,180,180,0.8)",
    flex: 1,
  },
  modalBox: {
    width: 300,
    height: 300,
    backgroundColor: "red",
    alignSelf: "center",
  },



})