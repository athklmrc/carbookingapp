import { View, Text } from "react-native";
import { router } from "expo-router";

import styles from "../../style/styles";

import SettingHeader from "../../component/SettingHeader";
import SettingList from "../../component/SettingList";


export default function Setting() {

  function navigatorHandler(link) {
    router.navigate(`./setting/${link}`)
  }

  function logoutHandler() {
    router.replace("/")
  }


  return (
    <View style={[styles.root, {paddingHorizontal: 20}]}>
      <SettingHeader title="Account" icon="person" />
      <SettingList title="Profil" onPress={()=>navigatorHandler("profil")}/>

      <SettingHeader title="Application" icon="app-settings-alt" />
      <SettingList title="Appearance" onPress={()=>navigatorHandler("appearance")} />
      <SettingList title="Notifications" onPress={()=>console.log("1")} />
      <SettingList title="Language" onPress={()=>navigatorHandler("language")} />

      <SettingHeader title="Miscellaneous" icon="miscellaneous-services" />
      <SettingList title="Privacy"/>
      <SettingList title="Help"/>
      <SettingList title="Contact"/>

      <SettingList title="Log out" onPress={logoutHandler}/>

    </View>
  );
}
