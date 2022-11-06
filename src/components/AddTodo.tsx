import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { InputTextControl } from './InputTextControl';
import { TodoProps } from './Todos';

interface AddTodoProps {
    onAddTodo: (todo?: TodoProps) => void
}

export const AddTodo: React.FC<AddTodoProps> = React.memo(({
    onAddTodo
}) => {
    const [value, setValue] = useState<string>()

    const handleChange = useCallback((value?: string) => {
        setValue(value)
    }, [])

    const handlePress = useCallback(() => {
        if (!value) return

        onAddTodo({ title: value, id: Date.now() })
    }, [value])

    return (
        <View style={styles.root}>
            <InputTextControl
                placeholder="Описание задачи"
                onChange={handleChange}
            />

            <Button
                title="Добавить"
                color="#4630EB"
                onPress={handlePress}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#f0f0f0',
    },
})