import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Event from './Event';
import Tech from './Tech';
import Header from './Header';

export default EventStack = ()=>{
const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
       <Stack.Screen name="Event"
       component={Event}
       options={{
        headerTitle:()=> <Header headerName="Events"/>,
       headerStyle:{
        height:150,
        backgroundColor:'#0077ff',
        shadowColor:'#FFFFFF',
        elevation:25
       },
       headerTintColor:'#fff'
       }}/>
      <Stack.Screen name="Tech" 
      component={Tech}
      options={{
        headerTitle:()=> <Header headerName="Technical Events"/>,
       headerStyle:{
        height:150,
        backgroundColor:'#0077ff',
        shadowColor:'#FFFFFF',
        elevation:25
       },
       headerTintColor:'#fff'
       }}/>
      <Stack.Screen name="Cultural" 
      component={Tech}
      options={{
        headerTitle:()=> <Header headerName="Cultural Events"/>,
       headerStyle:{
        height:150,
        backgroundColor:'#0077ff',
        shadowColor:'#FFFFFF',
        elevation:25
       },
       headerTintColor:'#fff'}}
       />
    </Stack.Navigator>
  )
}