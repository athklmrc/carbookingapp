import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Image } from 'expo-image';

import styles from "../../style/styles";
import colors from '../../config/colors';
import AppButton from '../../component/AppButton';
import CardSubscriber from '../../component/CardSubscriber';


// ! should get details from cache instead of URL params

const subscriberFlatlist = [
  {
    number: "#1340",
    status: 0,
    department: "Network",
    person: {
      name: "Mr Biglongname Testlongsurname",
      email: 'theproton@protonmail.com',
      phone: '20 424 523 523',
    },
    date: ["22/01/2024","22/01/2024"],
    time: ["06:00","12:00"],
  },
  {
    number: "#1339",
    status: 1, // 0=waiting 1=approved 2=disapproved
    department: "Software",
    person: {
      name: 'Mr Mark Buckerzerg',
      email: 'ypuremail@gmail.com',
      phone: '20 957 368 853',
    },
    date: ["12/02/2024","14/02/2024"],
    time: ["12:00","12:00"],
  },
  {
    number: "#1338",
    status: 2, // 0=waiting 1=approved 2=disapproved
    department: "Special",
    person: {
      name: 'Mr Jeff Bezoff',
      email: 'iamanemai@gmail.com',
      phone: '20 957 368 853',
    },
    date: ["11/02/2024","17/07/2024"],
    time: ["32:00","12:00"],
  },
  {
    number: "#1337",
    status: 0, // 0=waiting 1=approved 2=disapproved
    department: "NetWork",
    person: {
      name: 'Mr gre Zasdf',
      email: 'iamanemai@gmail.com',
      phone: '20 957 368 853',
    },
    date: ["11/02/2024","17/07/2024"],
    time: ["32:00","12:00"],
  },
  {
    number: "#1336",
    status: 1, // 0=waiting 1=approved 2=disapproved
    department: "Something",
    person: {
      name: 'Mr Zezof Jeff',
      email: 'iamanemai@gmail.com',
      phone: '20 345 123 412',
    },
    date: ["11/02/2024","17/07/2024"],
    time: ["32:00","12:00"],
  },
]


export default function CarDetailScreen() {
  const params = useLocalSearchParams();

  function TextSpec(props) {
    return (
      <Text style={{fontSize: 15}}>{props.children} </Text>
    )
  }


  return (
    <>

    {/*  <Stack.Screen options={ {title: params.numberplate} } />   FOR CARS ONLY */}
      <View style={bookPageStyle.topListItem}>
        <Image style={bookPageStyle.image} source={require('../../res/booking_vehicle_sample.png')}/>
        <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: "bold", marginBottom: 8}}>Specification: </Text>
          <View style={{flexDirection: "row"}}>
            <View>
          {/* VEHICLES BELOW */}
              <TextSpec> ID: </TextSpec>
              <TextSpec> Brand: </TextSpec>
              <TextSpec> Type: </TextSpec>
              <TextSpec> Fuel: </TextSpec>
              <TextSpec> Plate: </TextSpec>
          {/* ROOMS BELOW */}
              <TextSpec> Floor: </TextSpec>
              <TextSpec> Seats: </TextSpec>
              <TextSpec> Long Table: </TextSpec>
              <TextSpec> Flat Screen: </TextSpec>
              <TextSpec> Landline Phone: </TextSpec>
              <TextSpec> Speakers: </TextSpec>
              <TextSpec> Projector: </TextSpec>
            </View>
            <View>
          {/* VEHICLES BELOW */}
              <TextSpec> {params.id} </TextSpec>
              <TextSpec>  {params.brand} </TextSpec>
              <TextSpec>  {params.type} </TextSpec>
              <TextSpec>  {params.fuel} </TextSpec>
              <TextSpec>  {params.numberplate} </TextSpec>
          {/* ROOMS BELOW */}
              <TextSpec> {params.id} </TextSpec>
              <TextSpec> {params.floor} </TextSpec>
              <TextSpec> {params.seats} </TextSpec>
              <TextSpec> {params.longtable} </TextSpec>
              <TextSpec> {params.flatscreen} </TextSpec>
              <TextSpec> {params.landlinephone} </TextSpec>
              <TextSpec> {params.speakers} </TextSpec>
              <TextSpec> {params.projector} </TextSpec>
            </View>
          </View>

        </View>

      </View>

      <View style={styles.root}>
        <AppButton
          style={{marginTop: -40}}
          text="Make Reservation"
          onPress={ ()=>console.log('Make a Reservation Button') }
        />
        <Text style={{fontWeight: "bold"}}>Subscriber List: </Text>
        <FlatList
          data={subscriberFlatlist}
          renderItem={ ({item}) => <CardSubscriber {...item} /> }
        />

      </View>
    </>
  )
}


const bookPageStyle = StyleSheet.create({

  topListItem: {
    //alignItems: "",
    //justifyContent: "",
    paddingTop: 10,
    flexDirection: "row",

    height: 170,
    backgroundColor: colors.grey,

  },

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
    marginLeft: 10,
    width: 170,
    height: 120,
  }

});