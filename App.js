import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "deploy this app", key: "3" },
  ]);

 const presHandler=(key)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo=>todo.key != key)
      })
 } 

  return (
    <View style={styles.container}>
      {/* header */}
       <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) =>(
               <TodoItem item={item} presHandler={presHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
   
  },
  list: {
    margin: 20,
   
  },

});
