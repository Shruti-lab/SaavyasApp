
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TechnicalEvents from "./TechnicalEvents";
import CulturalEvents from "./CulturalEvents";
import AppHome from './AppHome';
import  Header from "./Header";


export default function HomeStackNav(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator initialRouteName="Home"
        >
            <Stack.Screen name="Home" 
            component={AppHome}
            options={{
                 headerTitle:()=> <Header headerName="Home"/>,
                headerStyle:{
                height:150,
                backgroundColor:'#0077ff',
                shadowColor:'#FFFFFF',
                elevation:25
                },
                headerTintColor:'#fff'
                }}
            />

            <Stack.Screen 
            name="TechnicalEvents" 
            component={TechnicalEvents}
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

               <Stack.Screen 
            name="CulturalEvents" 
            component={CulturalEvents}
            options={{
                headerTitle:()=> <Header headerName="Cultural Events"/>,
               headerStyle:{
                height:150,
                backgroundColor:'#0077ff',
                shadowColor:'#FFFFFF',
                elevation:25
               },
               headerTintColor:'#fff'
               }}/>
        </Stack.Navigator>

    )
}