import {StyleSheet, View,Text,Image} from 'react-native';

export default function Header({headerName}){
    return(
        <View style={headerStyle.box}>
            <Image source={require('../assets/saavyasWhiteLogo.png')} style={headerStyle.logo}/>
            <Text style={headerStyle.headertxt}>{headerName}</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    box:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
      },
      headertxt:{
        // position:'absolute',

        fontSize:20,
        fontWeight:'bold',
        color:'white'
      },
      logo:{
        height:35,
        width:35,
        resizeMode:'contain',
        marginRight:5
      }

})