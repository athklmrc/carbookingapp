import { Stack } from 'expo-router'
import colors from '../../config/colors'


export default function BookingStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {backgroundColor: colors.primary},
        headerTitleStyle: {color: colors.white},
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen name='index' options={{headerTitle: "Booking", headerShown: false}}/>
      <Stack.Screen name='[selected]' options={{headerTitle: "Details", headerShown: true}}/>
      <Stack.Screen name='bookroom' options={{headerTitle: "Rooms", headerShown: true}}/>
      <Stack.Screen name='bookvehicle' options={{headerTitle: "Vehicles", headerShown: true}}/>

    </Stack>

  )
}