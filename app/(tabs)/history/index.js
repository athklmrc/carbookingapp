// import { router } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable, FlatList } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';


import styles from "../../style/styles";
import AppButton from "../../component/AppButton";
import CardHistory from "../../component/CardHistory";
import AppPicker from "../../component/AppPicker";
import colors from "../../config/colors";
import globals from "../../config/globals";
import AppInputDate from "../../component/AppInputDate";


const flatlistHistoryData = [
  {
    id: 1,
    img: require('../../res/booking_vehicle_sample.png'),
    number: 1334,
    time: "09:00 - 10:00",
    date_start: "25/02/2024",
    date_end: "25/02/2024",
    status: "disapproved",
  },
  {
    id: 2,
    img: require('../../res/booking_vehicle_sample.png'),
    number: 1211,
    time: "09:00 - 10:00",
    date_start: "10/06/2024",
    date_end: "11/06/2024",
    status: "approved",
  },
  {
    id: 3,
    img: require('../../res/booking_vehicle_sample.png'),
    number: 5321,
    time: "10:00 - 11:00",
    date_start: "10/06/2024",
    date_end: "11/06/2024",
    status: "cancelled",
  },
  {
    id: 4,
    img: require('../../res/booking_vehicle_sample.png'),
    number: 5331,
    time: "10:00 - 11:00",
    date_start: "10/06/2024",
    date_end: "11/06/2024",
    status: "disapproved",
  },
  {
    id: 5,
    img: require('../../res/booking_vehicle_sample.png'),
    number: 1213,
    time: "10:00 - 11:00",
    date_start: "10/06/2024",
    date_end: "11/06/2024",
    status: "waiting",
  },

]

const filterType = [
  {key:'1', label:'All'},
  {key:'2', label:'Cars'},
  {key:'3', label:'Motorbikes'},
  {key:'4', label:'Rooms'},
]
const filterStatus = [
  {key:'1', label:'All'},
  {key:'2', label:'Pending'},
  {key:'3', label:'Completed'},
  {key:'4', label:'Cancelled'},
]


export default function History() {

/*
  const [ filtered , dispatch ] = React.useReducer((state, action)=>{
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        throw new Error();
    }
  }, allFilter)
*/

  const [selectedType, setSelectedType] = React.useState(filterType[0]);
  const [selectedStatus, setSelectedStatus] = React.useState(filterStatus[0]);
  const [selectedDateStart, setSelectedDateStart] = React.useState();
  const [selectedDateEnd, setSelectedDateEnd] = React.useState();


  //const [selectedFilters, setSelectedFilters] = React.useState([]);
  const [filteredItems, setFilteredItems] = React.useState(flatlistHistoryData);

/*  FAILED ATTEMPT TO IMPLEMENT THE FILTER FUNCTION
  function filterItems() {
    let tempItems = filteredItems.map((item)=>{
      let temp = item.filter((property)=>property.status === selectedStatus )
      return temp;
    })
    setFilteredItems(tempItems)
  }

  React.useEffect(()=>{
    filterItems();
  }, [selectedType, selectedStatus ]);

*/

  return (
    <View style={styles.root}>

      <View style={style.SectionFilter}>
        <View style={style.filterHeader}>
          <Text style={{ fontWeight: "bold"}}>Filters</Text>
          <MaterialIcons name="filter-list" size={20} color="black" />
        </View>
        <View style={style.filterPickers}>
          <AppPicker data={filterType} defaultval={filterType[0]} onSelect={(label)=>setSelectedType(label)} />
          <AppPicker data={filterStatus} defaultval={filterStatus[0]} onSelect={(label)=>setSelectedStatus(label)}/>
        </View>

        <View style={style.filterHeader}>
          <Text>Date Range: </Text>
        </View>
        <View style={style.filterPickers}>
          <AppInputDate style={style.filterDate} />
          <Text style={{alignSelf: "center", marginHorizontal: 8}}>to</Text>
          <AppInputDate style={style.filterDate} />
        </View>

      </View>

      <FlatList
        data={filteredItems}
        renderItem={ ({item}) => <CardHistory {...item}/>  }
      />


    </View>
  );
}

const style = StyleSheet.create({
  SectionFilter: {
    marginBottom: 10,
    padding: 6,
    backgroundColor: colors.grey,
    borderRadius: globals.radius + 2,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,

  },
  filterHeader: {
    padding: 4,
    marginRight: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
  },
  filterbox: {
    borderRadius: 4,
    backgroundColor: "white",
  },
  filterPickers: {

    justifyContent: "flex-end",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  filterDate: {
    height: 40,
    borderWidth: 0,
    backgroundColor: colors.white,
  },
})