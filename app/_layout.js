//import { Stack, router, useRouter, useSegments } from "expo-router";
import { Stack } from "expo-router";
//import { useEffect } from "react";

import OfflineNotice from "./component/OfflineNotice";

// Root Layout is often used to inject global providers such as Redux, Themes, Styles,
// and so on, into the app, and to delay rendering until assets and fonts are loaded.
// Try to reduce the scope of your providers to only the routes that need them. This will improve performance and cause fewer rerenders.

export default function RootLayout() {

  /*
  const { isLoaded, isSignedIn } = true;
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(()=> {
    if(!isLoaded) return;
    const segments = useSegments();
    const router = useRouter();


    const inTabsGroup = segments[0] === '(auth)'
    console.log('isSignedIn', isSignedIn)

    if(isSignedIn && !inTabsGroup) {
      router.replace('./home');
    } else if (!isSignedIn) {
      router.replace('/login');
    }

  },[isSignedIn]);
  */


  return (
    <>
      <OfflineNotice />
      <RootLayoutNav />
    </>

  )

}

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};


function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  )
}