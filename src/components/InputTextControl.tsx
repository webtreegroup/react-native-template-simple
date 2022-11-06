import React, { useCallback, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface InputTextControlProps {
    placeholder?: string
    onChange?: (value?: string) => void
}

export const InputTextControl: React.FC<InputTextControlProps> = ({
    placeholder,
    onChange,
}) => {
    const [value, setValue] = useState<string>('')

    const handleChangeText = useCallback((value: string) => {
        setValue(value)
        onChange?.(value)
    }, [])

    return (
        <TextInput
            style={styles.root}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    root: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})