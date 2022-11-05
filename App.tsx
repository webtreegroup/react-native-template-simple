import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todos, TodoProps } from './src/Todos';

export default function App() {
  const [todos, setTodos] = useState<TodoProps[]>([])

  const handleAddTodo = useCallback((todo?: TodoProps) => {
    if (!todo) return

    setTodos((prev) => [...prev, todo])
  }, [])

  const handleRemoveTodo = useCallback((id?: number) => {
    if (!id) return

    setTodos((prev) => prev.filter(el => el.id !== id))
  }, [])

  return (
    <View style={styles.container}>
      <Navbar />
      <AddTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
