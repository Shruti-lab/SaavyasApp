import {StyleSheet, View,Text, ScrollView, TouchableOpacity, Linking, Alert} from 'react-native';
import culturaldata from '../culturaldata';
import { Entypo } from '@expo/vector-icons';
import React, {useCallback} from 'react';
import { useFonts } from 'expo-font';

export default function CulturalEvents({route,navigation}){
    const {eventno} = route.params;
    const regurl = culturaldata[eventno-1].register;
    const detailurl = culturaldata[eventno-1].moredetails;
    
    const handlePress = useCallback(async () => {await Linking.openURL(regurl)}, [regurl]);

    const PressDetails = useCallback(async()=>{await Linking.openURL(detailurl)}, [detailurl])
    return(
        <ScrollView style={te.container}>
        <View >
            <View>
                <Text style={[te.title]}>{culturaldata[eventno-1].title}</Text>
                <Text style={[te.subtitle,{fontStyle:'italic'}]}>"{culturaldata[eventno-1].subtitle}"</Text>
                <Text style={te.subtitle}>PRIZE WORTH: {culturaldata[eventno-1].prize}</Text>
                <Text style={te.subtitle}>ENTRY FEE: {culturaldata[eventno-1].fee}</Text>
                <TouchableOpacity onPress={()=>{handlePress(regurl)}}>
                    <View style={te.button}>
                        <Text style={te.buttonText}>Register</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize:23,color:'white',alignSelf:'center',textDecorationLine: 'underline', marginVertical:20}}>About Event</Text>
            <Text style={te.description}>{culturaldata[eventno-1].desc}</Text>
            <TouchableOpacity onPress={()=>{PressDetails(detailurl)}} >
                    <View style={te.more}>
                        <Text style={te.moreText}>More Details</Text>
                        <Entypo name="arrow-with-circle-right" size={30} style={{alignSelf:'center'}} color="black" />
                    </View>
                </TouchableOpacity>
            <View style={{padding:50}}></View>
        </View>
        </ScrollView>
    )
}

const te = StyleSheet.create({
    container:{
        backgroundColor:'#111e22',
        flex:1
    },
    title:{
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        alignSelf:'center',
        margin:10,
        textAlign:'center',
        paddingVertical:10
    },
    subtitle:{
        fontSize:16,
        color:'white',
        alignSelf:'center',
        textAlign:'center',
        marginHorizontal:10,
        marginBottom:10,
    },
    description:{
        fontSize:15,
        color:'white',
        alignSelf:'center',
        padding:5,
        textAlign:'center'
    },
    button:{
        padding: 8,
        marginVertical: 10,
        margin: 50,
        backgroundColor: '#0077ff',
        borderColor: '#EDEFEE',
        borderWidth: 2,
        borderRadius: 40,
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    more:{
        padding: 8,
        marginVertical: 20,
        margin: 50,
        backgroundColor: '#d1d1d1',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
        flexDirection:'row',
        justifyContent:'center'
    },
    moreText:{
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal:10
    },
})