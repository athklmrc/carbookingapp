import { View, Text, StyleSheet, Pressable, Modal, TouchableOpacity } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons';
import colors from '../config/colors'
import globals from '../config/globals';

// * <AppPickerItem> must be the a selectable and children
// "data" must be an array of options, 1st value is default



export default function AppPicker({
  data,
  stylePicker,
  styleDropdown,
  width,
  defaultval,
  onSelect,

}) {


  const ref = React.useRef();


  function RenderDropdown() {
    return (
      <Modal visible={modalVisible} transparent={true} animationType='none'>
        <TouchableOpacity
          style={pickerStyle.modalOverlay}
          onPress={()=>setModalVisible(false)}
        >
          <View style={[pickerStyle.modalContainer, styleDropdown, dropdownCoord, {width: width?width:globalWidth} ]}>
            {data.map(item=>{
              return (
                <TouchableOpacity key={item.key} activeOpacity={0.5} onPress={()=>onItemPress(item.label)} style={pickerStyle.item}>
                  <Text style={pickerStyle.itemText}> {item.label} </Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  //const inPress = () => React.useCallback(()=>)

  function onItemPress(label) {
    if(onSelect) {onSelect(label)} // send label back to parent state
    setSelected(label)
    setModalVisible(false)
  }

  function toggleDropdown() {
    modalVisible ? setModalVisible(false) : openDropDown();
  }

  function openDropDown() {
    //ref.current.measure((x,y,pageX,pageY,width,height)=>{
    //  setDropdownCoord( {top: y+pageY, left: x+pageX} )
    //})
    //setDropdownCoord( {top: pageY+height, left: width} )
    setModalVisible(true)
  }


  function handleMeasure() {
    ref.current.measure((x,y,width,height,pageX,pageY)=>{
      console.log('Absolute position:', {x: x + pageX, y: y + pageY})
      console.log(`pageX: ${pageX}, pageY: ${pageY}`)
      console.log(`width: ${width}, heigh: ${height}`)
      setDropdownCoord( {top: pageY+height, left: pageX} )

    })
  }

  const [ filteredData, setFilteredData ] = React.useState()

  const [ selected, setSelected ] = React.useState(defaultval?defaultval.label:"select")
  const [ modalVisible, setModalVisible ] = React.useState(false)
  const [ dropdownCoord, setDropdownCoord ] = React.useState({});



  return (
    <>
      <Pressable
        ref={ref}
        onLayout={handleMeasure}
        style={({ pressed }) => [
          pickerStyle.pickerContainer,
          { backgroundColor: pressed ? "rgb(210, 230, 255)" : colors.white },
          stylePicker,
          {width: width?width:globalWidth },
        ]}
        onPress={toggleDropdown}
      >
        {RenderDropdown() }
        <Text> {selected} </Text>
        <Entypo name="chevron-small-down" size={24} color="black" />
      </Pressable>

    </>
  )
}

const globalWidth = 130;

const pickerStyle = StyleSheet.create({
  pickerContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: globalWidth,
    height: 35,
    //borderWidth: 1,
    borderRadius: globals.radius ,
    borderColor: colors.outline,
    backgroundColor: colors.white,

  },
  modalContainer: {
    //right: 100,
    //left: 100,
    //top: 100,
    padding: 10,
    position: 'absolute',
    width: globalWidth,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "snow",
    //flex: 1,
    shadowColor: '#000000',
    shadowRadius: 6,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    borderRadius: globals.radius,
    elevation: 10, // * Android
  },
  modalOverlay: {
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  item: {
    //alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 130,
  },
  itemText: {
    fontSize: 16,
  },

})