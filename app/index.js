
import { router, Redirect  } from "expo-router";
import Welcome from "./welcome";

//import { FontSizeProvider, useFontSize } from "./fontSizeContext";

export default function App() {


  //<Redirect href={"/(tabs)/home"} />
  return (

    <Welcome/>
  );
}