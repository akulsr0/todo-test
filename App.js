import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>TODO APP</Text>
      <View style={{ width: '100%', marginTop: 20 }}>
        <TextInput
          style={styles.input}
          placeholder='Your Task'
          onChangeText={(text) => {
            setTodoTitle(text);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setTodos([...todos, todoTitle]);
          }}
        >
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setTodos([]);
          }}
        >
          <Text>Clear List</Text>
        </TouchableOpacity>
      </View>
      {todos.map((td) => (
        <View
          key={td}
          style={{
            width: '100%',
            marginTop: 10,
            backgroundColor: '#f1f3f6',
            paddingVertical: 10,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>{td}</Text>
          <TouchableOpacity
            style={{ backgroundColor: 'red', padding: 6 }}
            onPress={() => {
              let newtodos = todos.filter((t) => t !== td);
              setTodos(newtodos);
            }}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  input: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#f1f3f6',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});
