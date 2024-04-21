import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';


//Google signin
import 'expo-dev-client'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from 'firebase/auth';
import {auth} from "./firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

//Navigation
// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens imported
import AppHome from './components/AppHome'
import Event from './components/Event'
import Accomodation from './components/Accomodation'
import Contact from './components/Contact'
import TechnicalEvents from './components/TechnicalEvents';
import CulturalEvents from './components/CulturalEvents';
import Header from './components/Header';
import SignIn from './components/SignIn';

//Icons
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import homeOutline from './assets/homeOutline.png';
import homeSolid from './assets/homeSolid.png';
import eventsOutline from './assets/eventsOutline.png';
import eventsSolid from './assets/eventsSolid.png';
import stayOutline from './assets/stayOutline.png';
import staySolid from './assets/staySolid.png';

//navigators
import HomeStackNav from './components/HomeStackNav';
import EventStackNav from './components/EventStackNav';
import React,{ useEffect, useState } from 'react';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// focused ? <Entypo name="home" size={24} color="black"/>
// : <AntDesign name="home" size={24} color="black"/>

export default function App() {
  // const [userInfo, setUserInfo] = useState();
  // const [requests, response, prompAsync] = Google.useAuthRequest({
  //   androidClientId:process.env.ANDROIDCLIENTID
  // },{ native: 'com.deskforcea.SaavyasApp//' })

  // const checkLocalUser = async()=>{  //to get local data
  //   try{
  //     const userJSON = await AsyncStorage.getItem("@user");
  //      const userData = userJSON ? JSON.parse(userJSON): null;
  //      console.log("LOCAL STORAGE................",userData);
  //      setUserInfo(userData);
  //     } catch(e){
  //     alert(e.message);
  //   }
  // }


  // useEffect(()=>{
  //   if(response?.type=="success") {
  //     const {id_token} = response.params;
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     signInWithCredential(auth,credential);
  //   }
  // },[response]);

  // useEffect(()=>{
  //   checkLocalUser();
  //    const unsub = onAuthStateChanged(auth,async(user)=>{
  //     if(user){
  //       console.log(JSON.stringify(user,null,2));
  //       setUserInfo(user);
  //       await AsyncStorage.setItem("@user",JSON.stringify(user))
  //     } else{
  //       // Alert.alert("User doesn't exist");
  //     console.log("USER NOT AUTHENTICATED");
  //     }
  //    });

  //    return ()=>unsub();
  // },[])

  return (
      <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
         
         initialRouteName="AppHome"
        screenOptions={{
          headerShown:false,
          tabBarStyle:{
              backgroundColor:'white',
              position:'absolute',
              height:53,
              // right:7,
              // left:7,
              // borderRadius:15,
              elevation:12,
              borderTopRightRadius:15,
              borderTopLeftRadius:15

              
          },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray'}}
          
        >
        <Tab.Screen name="AppHome" 
        component={HomeStackNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            return (
                 <Image source={focused ? homeSolid : homeOutline} style={{height:26, width:26,marginTop:2}}/>
            )
        }
        }}/>
        <Tab.Screen name="Events"
         component={EventStackNav}
         options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={focused ?eventsSolid : eventsOutline} style={{height:26, width:26,marginTop:2}}/>
            )}}}
            />
        <Tab.Screen name="Accomodation" 
        component={Accomodation}
         options={{
          tabBarLabel: 'Stay',
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={focused ? staySolid : stayOutline} style={{height:29, width:29,marginTop:2}}/>
            )}}}/>
        <Tab.Screen name="Profile" 
        component={Contact}
         options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons name="contact-support" size={24} color="black" />
            )}}}/>
      </Tab.Navigator>
      </NavigationContainer>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
