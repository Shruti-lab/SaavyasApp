import {Animated,Dimensions,View,Text,Image,StyleSheet, FlatList, TouchableOpacity} from "react-native";
import React, {useRef} from 'react';
import {Card} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import carouselItems from '../techcarouseldata';

const {WIDTH, HEIGHT} =Dimensions.get('window');

const Item = ({eventno,title,img,url,date,prize,teamsize}) =>{
    const navigation = useNavigation();
    
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('TechnicalEvents',{"eventno":eventno})}
            activeOpacity={1}>
            <View style={c.box}>
                <View>
                    <Image source={img} style={c.image}/>
                </View>
            
            <View >
                <Text style={c.title} numberOfLines={1}>{title}</Text>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../assets/schedule.png')} style={c.logo}/>
                        <Text style={c.desc}>{date}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../assets/prize.png')} style={c.logo}/>
                        <Text style={c.desc}>{prize}</Text>
                    </View>
                    <Text style={c.desc}>Team Size: {teamsize}</Text>
                </View>
            </View>
            </View>
            </TouchableOpacity>
        </View>
    )
}

// const Pagination = ({data,scrollX})=>{
//     return (
//         <View style={c.dotbox}>
//             {data.map((_,id) => {
//                 const inputRange = [(id-1)*WIDTH , id * WIDTH, (id+1)*WIDTH]
//                 const dotWidth = scrollX.interpolated({
//                     inputRange,
//                     outputRange:[12,30,12],
//                     extrapolate:'clamp'
//                 })
//                 return (<Animated.View key={id.toString()} style={[c.dot,{width:dotWidth}]}/>)
//             })}
//         </View>
//     )
// }


export default function TechnicalCarousel({navigation}){
    // const scrollX = useRef(new Animated.value(0)).current;
    const renderItem = ({ item }) => <Item eventno={item.id} title={item.title} img={item.image} url={item.url} date={item.time} prize={item.prize} teamsize={item.teamSize} />;
    // const handleOnScroll = event =>{
    //     Animated.event([
    //         {
    //             nativeEvent:{
    //                 countOffset:{
    //                     x:scrollX,
    //                 },
    //             },
    //         },
    //     ],
    //     {
    //         useNativeDriver:false
    //     }
    //     )(event);
    // };

    // const onViewableItemsChanged = useRef(({viewableItems}) =>{

    // }).current;
    return (
     <View style={c.container}>

        <FlatList
        data={carouselItems}
        keyExtractor={(item) => item.id}
        renderItem = {renderItem}
        horizontal
        showsHorizontalScrollIndicator={true}
        indicatorStyle='white'
        // showHorizontalIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        removeClippedSubviews={false}
        maxToRenderPerBatch={3}
        directionalLockEnabled
        // onScroll={flashScrollIndicators()}
        
        // onScroll={handleOnScroll}
        // onViewableItemsChanged={handleOnViewableItemsChanged}
        ></FlatList>
        <View style={{flexDirection:'row',paddingBottom:40}}>
            <Text style={{color:'white',padding:10}}>Swipe right</Text>
            <Image source={require('../assets/gifs/arrowWhite.gif')} style={{height:30,width:30,alignSelf:'center'}}/>
        </View>
     </View>
    )
}
// <Pagination data={carouselItems} scrollX={scrollX}/>
const c = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#111e22",
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        width: WIDTH,
        margin:10,
        backgroundColor:'white',
        paddingHorizontal:10,
        borderRadius:40,
        paddingBottom:15,
    },
    image:{
        height:230,
        width:320,
        resizeMode:'cover',
        marginVertical:15,
        marginHorizontal:2,
        borderRadius:40
    },
    logo:{
        height:25,
        width:25,
        margin:10
    },
    title:{
        fontSize:22,
        color:'#111e22',
        fontWeight:'bold',
        alignSelf:'center',
        
        
    },
    
    desc:{
        fontSize:16,
        color:'black',
        marginVertical:7,
        marginHorizontal:5
    },
    dotbox:{
        // position:'absolute',
        //bottom:50,
        width:'100%',
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
        backgroundColor:'white',
        
    },
    dot:{
        width:12,
        height:12,
        borderRadius:10,
        marginHorzontal:5,
        borderColor: '#EDEFEE',
        backGroundColor:'#ccc',
    },
    
})