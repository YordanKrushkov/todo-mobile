import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './Components/Header';
import Todo from './Components/todoes';
import AddTodo from './Components/addTodo';
import { getTodo, archiveTodo, createTodo } from './Services/REST'

export default function App() {

  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getTodo().then(res => setData(res)).catch(er => console.log(er));
  }, [data, load]);

  const deleteItem = (_id) => {
    archiveTodo(_id).then(res => setLoad(load => !load)).catch(err => console.log(err))
  }
  const submitHandler = (text) => {
    if (text.length > 3) {
      createTodo(text).then(res => setLoad(load => !load)).catch(err => console.log(err))
    } else {
      Alert.alert('Ooops!', "Todos must be over three chars long", [
        { text: "Understood"}
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={ styles.container }>
        <Header />
        <View style={ styles.content }>
          <AddTodo submitHandler={ submitHandler } />

          <View style={ styles.list }>
            <FlatList
              data={ data }
              keyExtractor={ (item) => item._id }
              renderItem={ ({ item }) => (
                <Todo item={ item } deleteItem={ deleteItem } />
              ) }
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
    width: "100%"
  }
});
