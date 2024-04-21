import {Text,View,Image,StyleSheet} from 'react-native';

export default function OtherHeader({name}){
    return(
        <View style={styles.box}>
            <Image source={require('../assets/saavyasWhiteLogo.png')} style={styles.logo}/>
            <Text style={styles.headertxt}>{name}</Text>
         </View>
    )
}

const styles = StyleSheet.create({
    box:{
        width:'100%',
        flex:0.11,
        flexDirection:'row',
        backgroundColor:'#0077ff',
        alignItems:'center'
      },
      headertxt:{
        // position:'absolute',
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginTop:40
      },
      logo:{
        height:35,
        width:35,
        resizeMode:'contain',
        marginRight:5,
        marginLeft:20,
        marginTop:40
      },

})