import { View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
//import { useTranslation } from 'react-i18next';


// https://dev.to/anyiamchimdia/creating-multilingual-react-apps-with-i18n-a-step-by-step-guide-to-internationalisation-107o
// https://docs.expo.dev/guides/localization/
// https://simeonnortey.medium.com/how-to-add-multiple-languages-in-react-native-43d27fc7e717
// https://www.phind.com/search?cache=sf5rtgcw01mqmx3jd1gyyn6n


import styles from '../../style/styles'
import colors from '../../config/colors';
import SettingHeader from '../../component/SettingHeader';

export default function Language() {

  //const { t, i18n } = useTranslation(); //i18n instance

  //const [ selected , setSelected ] = React.useState(true)

  function selectLang(code) {
    i18n.changeLanguage(`${code}`)
  }

  function LangSelect({title, code, selected=true}) {
    return (
      <TouchableHighlight underlayColor={colors.grey2} onPress={() => selectLang(code) }>
        <View style={langStyle.langItem}>
          <Text style={{fontSize: 16}}>{title}</Text>
      {/*    { i18n.language === code && <MaterialIcons name="check" size={24} color={colors.primary} /> }  */}
          { selected ? <MaterialIcons name="check" size={24} color={colors.primary} /> : null }
        </View>
      </TouchableHighlight>
    )
  }

  return (
    <View style={[styles.root, {paddingHorizontal: 20}]}>
      <SettingHeader title="Select your Language: "/>
      <View>
        <LangSelect title="English" code="en" />
        <LangSelect title="ລາວ" code="la" />
        <LangSelect title="ไทย" code="th" />
        <LangSelect title="Việt" code="vn" />
        <LangSelect title="中国人" code="zh" />
      </View>
    </View>
  )
}

const langStyle = StyleSheet.create({
  langItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    height: 50,
    paddingHorizontal: 20,
  },

})