import { StyleSheet,TouchableOpacity, Image, View, Text } from "react-native";
import {signOut} from 'firebase/auth';
import {auth} from '../firebaseConfig';

export default function UserProfile(){
    return(
        <View style={u.container}>
            <Text>Setting</Text> 
            <TouchableOpacity style={u.button} onPress={async () => await signOut(auth)}><Text style={u.buttonText}>Sign Out</Text></TouchableOpacity>
        </View>
    )
}

const u = StyleSheet.create({
    container:{
       fles:1,
       alignItems:'center',
       justifyContent:'center'
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
})