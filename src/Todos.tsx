import React, { useCallback } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, ListRenderItemInfo } from 'react-native';

export interface TodoProps {
    title: string
    id: number
}

interface TodosProps {
    todos: TodoProps[]
    onRemoveTodo: (id: number) => void
}

export const Todos: React.FC<TodosProps> = ({
    todos,
    onRemoveTodo,
}) => {
    const renderItem = useCallback((todo: ListRenderItemInfo<TodoProps>) => (
        <TouchableOpacity activeOpacity={0.5} onLongPress={onRemoveTodo.bind(null, todo.item.id)}>
            <Text
                style={styles.todo}
            >
                {todo.item.title}
            </Text>
        </TouchableOpacity>
    ), [])

    const keyExtractor = useCallback((todo: TodoProps) => String(todo.id), [])

    return (
        <FlatList
            style={styles.root}
            data={todos}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
    },
    todo: {
        fontSize: 14,
        marginBottom: 10,
    },
})