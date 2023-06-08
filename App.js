import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import{Home} from './views';
import {LeituraQrcode}  from './views';

const Stack = createNativeStackNavigator();


export default function App() {
return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="LeituraQrcode" component={LeituraQrcode} options={{headerShown:false}}/>

    </Stack.Navigator>
  </NavigationContainer>
);
}