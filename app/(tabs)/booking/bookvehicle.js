import { View, Text, StyleSheet, Pressable, ScrollView, FlatList } from "react-native";
import { Link, router } from 'expo-router';


import AppSearchBar from "../../component/AppSearchBar";
import AppButton from "../../component/AppButton";
import CardBookingVehicle from "../../component/CardBookingVehicle";
import CardBookingRoom from "../../component/CardBookingRoom";
import styles from "../../style/styles";
import { useState } from "react";


// passing params should be the selected item or using from cache ?
// fetch thumbnails

const flatListdata = [
  {
    id: "1",
    img: require('../../res/booking_vehicle_sample.png'),
    brand: "toyota",
    fuel: "diesel",
    numberplate: "ອຮ 6342",
    type: "2 Seats",
  },
  {
    id: "2",
    img: require('../../res/booking_vehicle_sample.png'),
    brand: "Ranger",
    fuel: "diesel",
    numberplate: "ຂກ 3456",
    type: "4 Seats",
  },
  {
    id: "3",
    img: require('../../res/booking_vehicle_sample.png'),
    brand: "Toyota",
    fuel: "diesel",
    numberplate: "ຂກ 8635",
    type: "6 Seats",
  },
  {
    id: "4",
    img: require('../../res/booking_vehicle_sample.png'),
    brand: "Ranger",
    fuel: "diesel",
    numberplate: "ຂກ 2345",
    type: "2 Seats",
  },
  {
    id: "5",
    img: require('../../res/booking_vehicle_sample.png'),
    brand: "Ranger",
    fuel: "diesel",
    numberplate: "ຂກ 1222",
    type: "3 Seats",
  },
  {
    id: "6",
    img: require('../../res/booking_vehicle_sample.png'),
    brand: "Toyota",
    fuel: "diesel",
    numberplate: "ຂກ 8653",
    type: "2 Seats",
  },
  {
    id: "7",
    img: require('../../res/booking_vehicle_sample.png'),
    brand: "Toyota",
    fuel: "diesel",
    numberplate: "ຂກ 48643",
    type: "2 Seats",
  },
  {
    id: "8",
    img: require('../../res/booking_vehicle_sample.png'),
    brand: "Toyota",
    fuel: "diesel",
    numberplate: "ຂກ 4442",
    type: "2 Seats",
  },
]


export default function BookVehicle() {

  const [ listData, setListData ] = useState(flatListdata)

  const [ refreshing, setRefreshing ] = useState(false);


  function handleRefresh() {
    setRefreshing(true)
    //fetchData 20 limit
    setRefreshing(false)
  }

  const listNotFound = {
    img: require('../../res/img_not_found.jpg'),
    brand: "Not Found",
    fuel: "Not Found",
    numberplate: "Not Found",
    type: "Not Found",
  }

  // TODO in futur get details from cache instead
  function navigateToSelection({id, fuel, brand, numberplate, type}) {
    router.navigate({
      pathname: "/booking/[selected]",
      params: {
        id,
        //img: URI!!!,
        brand,
        fuel,
        numberplate,
        type,
      },
    })
  }

  return (
    <View style={styles.root}>

      <View style={bookStyle.search}>
        <AppSearchBar />
      </View>

      <View style={bookStyle.catalog}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={bookStyle.listing}>Listings</Text>
          <Text style={{color: "green"}}>View All (43)</Text>
        </View>

        <FlatList
          contentContainerStyle={{padding: 4}}
          data={listData}
          renderItem={ ({item}) => <CardBookingVehicle {...item} onPress={()=>navigateToSelection(item)}/> }
          refreshing={refreshing}
          onRefresh={handleRefresh}
          ListEmptyComponent={ <CardBookingVehicle {...listNotFound}/> }
        />


      </View>





      <Link
        href={{ pathname: './booking/[id]', params: { id: 1, other: "anything you want here"}  }}
      >
        Press me Test Route with Params
      </Link>





    </View>
  );
}

const bookStyle = StyleSheet.create({

  search: {
    marginBottom: 16
  },
  catalog: {

  },
  listing: {
    fontWeight: 'bold',
    marginBottom: 6

  },
  flatContainer: {
    borderColor: "black",
    borderWidth: 2,
  },
})