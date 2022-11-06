
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Navbar } from '../components/Navbar';
import { TodoProps, Todos } from '../components/Todos';
import { RootStackParamList, RouteType } from '../types';

export const HomeScreen: React.FC<NativeStackScreenProps<RootStackParamList>> = React.memo(({ navigation }) => {
  const [todos, setTodos] = useState<TodoProps[]>([])

  const handleAddTodo = useCallback((todo?: TodoProps) => {
    if (!todo) return

    setTodos((prev) => [...prev, todo])
  }, [])

  const handleRemoveTodo = useCallback((id?: number) => {
    if (!id) return

    setTodos((prev) => prev.filter(el => el.id !== id))
  }, [])

  const handleNavigate = useCallback((route?: RouteType) => {
    if (!route) return

    navigation.navigate(route)
  }, [])

  return (
    <View style={styles.root}>
        <Navbar onNavigate={handleNavigate} />

        <AddTodo onAddTodo={handleAddTodo} />

        <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </View>
  );
})

const styles = StyleSheet.create({
  root: {},
});
