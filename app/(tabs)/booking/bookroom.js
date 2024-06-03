import { View, Text, StyleSheet, Pressable, ScrollView, FlatList } from "react-native";
import { Link, router } from 'expo-router';


import AppSearchBar from "../../component/AppSearchBar";
import AppButton from "../../component/AppButton";

import CardBookingRoom from "../../component/CardBookingRoom";
import styles from "../../style/styles";
import { useState } from "react";


const flatListdata1 = [
  {
    id: "1",
    img: require('../../res/booking_room_sample.png'),
    floor: "4",
    seats: "6",
    longtable: "1",
    flatscreen: "1",
    landlinephone: "1",
    speakers: "2",
    projector: "1",
  },
  {
    id: "2",
    img: require('../../res/booking_room_sample.png'),
    floor: "1",
    seats: "2",
    longtable: "0",
    flatscreen: "1",
    landlinephone: "1",
    speakers: "2",
    projector: "10",
  },

]


export default function BookRoom() {

  const [ listData, setListData ] = useState(flatListdata1)
  const [ refreshing, setRefreshing ] = useState(false);


  function handleRefresh() {
    setRefreshing(true)
    //setListData(listData)
    //fetchData 20 limit
    setRefreshing(false)
  }

  const listNotFound = {
    img: require('../../res/img_not_found.jpg'),
    floor: "not found",
    seats: "not found",
    longtable: "not found",
    flatscreen: "not found",
    landlinephone: "not found",
    speakers: "not found",
    projector: "not found",
  }

  // TODO in futur get details from cache instead
  function navigateToSelection({id, floor, seats, longtable, flatscreen, landlinephone, speakers, projector}) {
    router.navigate({
      pathname: "/booking/[selected]",
      params: {
        id,
        //img: URI!!!,
        floor,
        seats,
        longtable,
        flatscreen,
        landlinephone,
        speakers,
        projector,
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
          renderItem={ ({item}) => <CardBookingRoom {...item} onPress={()=>navigateToSelection(item)}/> }
          refreshing={refreshing}
          onRefresh={handleRefresh}
          ListEmptyComponent={ <CardBookingRoom {...listNotFound}/> }
        />

      </View>



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