import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from './component/Header';
import Content from './component/Content';
import Form from './component/Form'

export default function App() {
  
  const [todo, setTodo] = useState([
    {text: "купить хлеб", id: 1},
    {text: "купить молоко", id: 2},
    {text: "захватить Чувашию", id: 3},
    {text: "купить пиво", id: 4}
  ]);

  const addTodo = (el) => {
    const newObj = [...todo, el]
    setTodo(newObj)
  }

  const del = (id) => {
    const index = todo.findIndex(el => el.id === id);
    const newObj = [...todo.slice(0, index), ...todo.slice(index + 1)]
    setTodo(newObj)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header/>
        <Form addTodo={addTodo}/>
      </View>
      <View style={styles.list}>
        <FlatList data={todo} keyExtractor={ (item, index) => index.toString() } renderItem={({item}) => (
          <Content 
            el={item}
            del={del}
           />
        )}/>
      </View>
      <StatusBar hidden={true}></StatusBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: -1,
    alignItems: 'center',
    paddingTop: 40,
  }
});
