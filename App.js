import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import starmap from './screens/starmap';
import dailypic from './screens/dailypic';
import spacecraft from './screens/spacecraft'
const Stack = createStackNavigator();


function App () {
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown:false}}>

    <Stack.Screen name = "Home" component = {HomeScreen}/>
    <Stack.Screen name =  "ISSLocation" component = {starmap}/>
    <Stack.Screen name = "Meteors" component = {dailypic}/>
    <Stack.Screen name = "spacecraft" component = {spacecraft}/>


    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;