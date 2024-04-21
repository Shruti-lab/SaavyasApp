import {StyleSheet, View,Text, Pressable,TouchableOpacity,Image, ScrollView,FlatList} from 'react-native';
import { useFonts } from 'expo-font';

import TechnicalCarousel from './TechnicalCarousel';
import CulturalCarousel from './CulturalCarousel';



export default function AppHome(){
    const [fontsLoaded, fontError] = useFonts({
        'PixelifySansRegular': require('../assets/fonts/PixelifySans-Regular.ttf'),
      });
    return(
        <View style={homeStyle.container}>
         <View style={{flex:0.89}}>
            <ScrollView>
            <View style={homeStyle.commonbox}>
            <Text style={[homeStyle.heading,{fontFamily: 'PixelifySansRegular'}]}>SAAVYAS'24</Text>
            </View>
            <Text style={{color:'white',fontSize:16,paddingHorizontal:10,paddingTop:30}}>Welcome User!</Text>
            <Text numberOfLines={3} style={{color:'white',alignSelf:'center', fontSize:23,paddingBottom:7,paddingTop:30}}>Technical Events</Text>
            <TechnicalCarousel/>

            <Text numberOfLines={3} style={{color:'white',alignSelf:'center', fontSize:23,padding:10}}>Cultural Events</Text>
            <CulturalCarousel/>
            <View style={homeStyle.commonbox}>
            <View style={homeStyle.neon}>
            <Image source={require('../assets/saavyasLogo.png')} style={homeStyle.image} />
            </View>
            </View>

            <Text style={homeStyle.introText}>Saavyas is NIT Goa's annual extravaganza techno-cultural fest attracting over 5k footfall of students and youth nationwide. This 3-day event serves as a platform for riveting tech showdowns, showcasing talents, fostering creativity, and promoting a vibrant cultural exchange. Embark on a journey where technology intertwines seamlessly with culture, creating an immersive and unforgettable experience right here at NIT Goa.</Text>
            <View style={{height:28}}></View>
            </ScrollView>
            </View>
        </View>
    )
}

const homeStyle = StyleSheet.create({
    container:{
        backgroundColor:'#111e22',
        flex:1
    },
    
    heading:{
        color:'white',
        fontSize:35,
        paddingTop:30,
        fontFamily:'PixelifySansMedium'
    },
    image:{
       height:200,
       width:200,
       resizeMode:'contain',
       margin:15
    },
    commonbox:{
       alignItems: 'center',
       justifyContent: 'center'
    },
    neon:{
       borderRadius:360,
       marginTop:30,
       shadowColor:'#82d7ff',
       shadowOpacity:1,
       borderWidth:2,
       borderRadius:999,
       elevation:90,
       borderColor:'white',
    },
    introText:{
        color:'white',
        fontSize:16,
        padding:30
     },
    
     
})