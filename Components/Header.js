import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>To Do App</Text>
        </View>
     );
}
 
export default Header;

const styles=StyleSheet.create({
    header:{
        backgroundColor:"coral",
        width:"100%",
        padding:48,
        height:60,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        height:60,
        paddingTop:30
    }
})