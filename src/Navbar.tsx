import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Navbar: React.FC = React.memo(() => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Navbar</Text>
        </View>
    )
})

const styles = StyleSheet.create({
    root: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#680e0e',
    },
    text: {
        color: '#fff',
        fontSize: 20,
    }
})