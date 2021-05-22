import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Todo = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity onPress={ () => deleteItem(item._id) }>
            <View style={ styles.todo }>
                <MaterialIcons name="done" size={ 24 } color="coral" />
                <Text style={styles.text}>{ item.todo }</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Todo;

const styles = StyleSheet.create({
    todo: {
        borderColor: "#bbb",
        marginTop: 16,
        padding: 16,
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: "row",
    },
    text: {
        marginLeft:10
    }
})