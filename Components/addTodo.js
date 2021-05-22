import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput,TouchableOpacity } from 'react-native';


const AddTodo = ({ submitHandler }) => {
    const [text, setText] = useState('')
    const changeHandler = (value) => {
        setText(value)
    }
    return (
        <View>
            <TextInput
                style={ styles.input }
                placeholder='New todo...'
                onChangeText={ changeHandler }
                value={ text }
            />
            <TouchableOpacity style={styles.button} onPress={ () => { submitHandler(text), setText('') } }>
                <Text style={styles.text}>add todo</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddTodo;

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    },
    button:{
        backgroundColor:"coral",
        height:30,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:"white",
        textTransform:"capitalize"
    }
})