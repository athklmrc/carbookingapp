import { View, Text, StyleSheet } from "react-native";
import React from "react";


import colors from "../config/colors";
import globals from "../config/globals";
import styles from "../style/styles";


export default function CardSubscriber({
  number,
  department,
  status,
  person, // has 3 properties
  date,
  time,
}) {


  const TextStatusApproved = () =>    <Text style={{color: colors.white, backgroundColor:colors.approved}}>Approved</Text>
  const TextStatusDisapproved = () => <Text style={{color: colors.white, backgroundColor:colors.disapproved}}>Disapproved</Text>
  const TextStatusWait = () =>        <Text style={{color: colors.white, backgroundColor:colors.waiting}}>Waiting</Text>

  function printStatus(arg) {
    if (arg===2) {return "Disapproved"} else if (arg===1) {return "Approved"} else {return "Waiting"}
  }

  function getStatusComponent(arg) {
    if (arg===2) {
      return <TextStatusDisapproved/>
    } else if (arg===1) {
      return <TextStatusApproved/>
    } else {
      return <TextStatusWait/>
    }
  }

  return (
    <View style={cardSubscriberStyle.container}>
      <View style={[cardSubscriberStyle.top, cardSubscriberStyle.row]}>
        <Text style={{ fontWeight: 'bold' }}>{number}</Text>
        <Text>{department} department</Text>
        {getStatusComponent(status)}
      </View>

      <View style={[cardSubscriberStyle.bottom, cardSubscriberStyle.row]}>
        <View style={{alignItems: "flex-start"}}>
          <Text>from :</Text>
          <Text>to :</Text>
        </View>
        <View style={{marginLeft: -20}}>
          <Text>{date[0]} - {time[0]} </Text>
          <Text>{date[1]} - {time[1]} </Text>
        </View>
        <View style={{maxWidth: "42%"}}>
          <Text>{person.name}</Text>
          <Text>{person.email}</Text>
          <Text>{person.phone}</Text>
        </View>
      </View>

    </View>
  );
}

const cardSubscriberStyle = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.grey,
    marginVertical: 5,
    borderColor: colors.outline,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  top: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  bottom: {
    justifyContent: 'space-between',
  },
});

