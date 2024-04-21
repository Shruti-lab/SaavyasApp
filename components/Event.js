import {Image,Dimensions, StyleSheet, View,Text,TouchableOpacity,FlatList} from 'react-native';
import React, {useState,useCallback} from 'react';
import { useNavigation } from '@react-navigation/native';

import day1 from '../assets/dayWiseData/day1';
import day2 from '../assets/dayWiseData/day2';
import day3 from '../assets/dayWiseData/day3';
import day4 from '../assets/dayWiseData/day4';

const {WIDTH, HEIGHT} =Dimensions.get('window');


const Item = ({eventno,title,img,type,date,time,teamsize}) =>{
    const navigation = useNavigation();
    
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Tech',{"eventno":eventno})}
            activeOpacity={1}>
            <View style={eventStyle.box}>
                <View>
                    <Image source={img} style={eventStyle.image}/>
                </View>
            
                <View>
                <Text style={eventStyle.title} numberOfLines={1}>{title}</Text>
                <View>
                    {type=='Technical'? <View style={eventStyle.typetech}><Text style={{textAlign:'center',color:'white'}}>{type}</Text></View> :
                    <View style={eventStyle.typecult}><Text style={{textAlign:'center',color:'white'}}>{type}</Text></View>}
                    <View style={{flexDirection:'row',marginVertical:3}}>
                        <Image source={require('../assets/schedule.png')} style={eventStyle.logo}/>
                        <Text style={eventStyle.desc}>{date}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginVertical:3}}>
                        <Image source={require('../assets/time.png')} style={eventStyle.logo}/>
                        <Text>{time}</Text>
                    </View>
                </View>
            </View>
            </View>
            </TouchableOpacity>
        </View>
    )
}
export default function Events({navigation}){
    const [showday1, setShowday1] = useState(false);
    const [showday2, setShowday2] = useState(false);
    const [showday3, setShowday3] = useState(false);
    const [showday4, setShowday4] = useState(false);
    
    const d1 = ()=>{
        setShowday1(true);
        setShowday2(false);
        setShowday3(false);
        setShowday4(false);
    }
    const d2 = ()=>{
        setShowday2(true);
        setShowday1(false);
        setShowday3(false);
        setShowday4(false);
    }
    const d3 = ()=>{
        setShowday1(false);
        setShowday2(false);
        setShowday3(true);
        setShowday4(false);
    }
    const d4 = ()=>{
        setShowday1(false);
        setShowday2(false);
        setShowday3(false);
        setShowday4(true);
    }


    const renderItem = ({ item }) => <Item eventno={item.id} title={item.title} img={item.image} type = {item.event} date={item.date} time={item.time} teamsize={item.teamSize} />;
    return(
        <View style={eventStyle.container}>
            <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:"space-evenly"}}>
            <TouchableOpacity style={eventStyle.button} onPress={()=>d1()}><Text style={eventStyle.buttonText}>Day 1</Text></TouchableOpacity>
            <TouchableOpacity style={eventStyle.button} onPress={()=>d2()}><Text style={eventStyle.buttonText}>Day 2</Text></TouchableOpacity>
            <TouchableOpacity style={eventStyle.button} onPress={()=>d3()}><Text style={eventStyle.buttonText}>Day 3</Text></TouchableOpacity>
            <TouchableOpacity style={eventStyle.button} onPress={()=>d4()}><Text style={eventStyle.buttonText}>Day 4</Text></TouchableOpacity>
            </View>

        { showday1 &&   
        (<FlatList
        data={day1}
        renderItem = {renderItem}
        keyExtractor={(item) => item.id}
        indicatorStyle='white'
        pagingEnabled
        removeClippedSubviews={false}
        directionalLockEnabled
        ></FlatList>)}

        {showday2 &&   
        (<FlatList
        data={day2}
        renderItem = {renderItem}
        showsHorizontalScrollIndicator={true}
        indicatorStyle='white'
        pagingEnabled
        removeClippedSubviews={false}
        directionalLockEnabled
        ></FlatList>)}

        
        { showday3 &&   
        (<FlatList
        data={day3}
        keyExtractor={(item) => item.id}
        renderItem = {renderItem}
        showsHorizontalScrollIndicator={true}
        indicatorStyle='white'
        pagingEnabled
        removeClippedSubviews={false}
        directionalLockEnabled
        ></FlatList>)}

        { showday4 &&   
        (<FlatList
        data={day4}
        keyExtractor={(item) => item.id}
        renderItem = {renderItem}
        showsHorizontalScrollIndicator={true}
        indicatorStyle='white'
        pagingEnabled
        removeClippedSubviews={false}
        directionalLockEnabled
        ></FlatList>)}
        <View style={{height:70}}></View>
        </View>
    )
}

const eventStyle = StyleSheet.create({
    container:{
        backgroundColor:'#111e22',
        flex:1
    },
    box1:{
        margin:10,
        borderWidth:2,
        borderBlockColor:'white',
    },
    button:{
       padding: 8,
       marginVertical: 10,
       marginHorizontal:6,
       backgroundColor: '#08779c',
       borderColor: '#EDEFEE',
       borderWidth: 2,
       borderRadius: 12
     },
     buttonText: {
       color: 'white',
       textAlign: 'center',
       fontSize: 15
     },
      box:{
        width: WIDTH,
        margin:10,
        backgroundColor:'white',
        paddingHorizontal:10,
        borderRadius:40,
        flexDirection:'row',
        paddingBottom:5
    },
    image:{
        height:125,
        width:100,
        resizeMode:'cover',
        marginVertical:15,
        marginHorizontal:2,
        borderRadius:40
    },
    logo:{
        height:25,
        width:25,
        marginHorizontal:10
    },
    title:{
        fontSize:17,
        color:'#111e22',
        fontWeight:'bold',
        alignSelf:'center',
        paddingTop:10,
        paddingBottom:2
    },
    
    desc:{
        fontSize:14,
        color:'black',
        marginHorizontal:5,
    },
    typetech:{
        marginVertical: 2,
        borderRadius: 20,
        width:110,
        paddingVertical:2,
        marginHorizontal:10,
        backgroundColor:'#0077ff'
    },
    typecult:{
        marginVertical: 2,
        borderRadius: 20,
        width:110,
        marginHorizontal:10,
        backgroundColor:'#f21399'
    }
})