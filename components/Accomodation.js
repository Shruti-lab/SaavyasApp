import {StyleSheet, View,Text,ScrollView,TouchableOpacity,Linking} from 'react-native';
import OtherHeader from './OtherHeader';
import { Entypo } from '@expo/vector-icons';
import React, {useCallback} from 'react';

export default function Accomodation(){
    const regurl = "https://docs.google.com/forms/d/e/1FAIpQLSd9GWJcaIZcVpyOovTLkos87RBTvS9hn_s2tU-qWnBNL4XL5A/viewform";
    const detailurl = "https://drive.google.com/file/d/12NeXqmylizQsLCydQzD33r7tUUTtr8z7/view";
    
    const handlePress = useCallback(async () => {await Linking.openURL(regurl)}, [regurl]);
    const PressDetails = useCallback(async()=>{await Linking.openURL(detailurl)}, [detailurl])
    
    return(
        <View style={stay.container}>
            <OtherHeader name="Accomodation"/>
            <View style={{flex:0.89}}>
                <Text style={stay.heading}>Accomodation Rules</Text>
                <View>
                    <ScrollView>
                        <Text style={stay.rules}><Text style={{fontWeight:'bold'}}>1. Check-out Time:</Text>Check-out time for the hostel accommodation is before 11:00 am.</Text>
                        <Text style={stay.rules}><Text style={{fontWeight:'bold'}}>2. No Smoking Policy:</Text>Smoking is not allowed in the hostel premises.</Text>
                        <Text style={stay.rules}><Text style={{fontWeight:'bold'}}>3. Pet Policy:</Text>Pets are not allowed in the hostel.</Text>
                        <Text style={stay.rules}><Text style={{fontWeight:'bold'}}>4. Quiet Hours:</Text>Please maintain quiet hours from 10:00 PM to 8:00 AM.</Text>
                        <TouchableOpacity onPress={()=>{handlePress()}}>
                            <View style={stay.button}>
                                <Text style={stay.buttonText}>Register</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{PressDetails()}} >
                            <View style={stay.more}>
                                <Text style={stay.moreText}>More Details</Text>
                                <Entypo name="arrow-with-circle-right" size={30} style={{alignSelf:'center'}} color="black" />
                            </View>
                        </TouchableOpacity>
                        <View style={{height:200}}></View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const stay = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#111e22'
    },
    heading:{
        color:'white',
        paddingVertical:30,
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
    },
    rules:{
        color:'white',
        fontSize:16,
        padding:20
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
    }
})