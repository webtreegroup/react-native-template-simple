import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { FnAction, RouteType } from '../types';

interface NavbarProps {
    onNavigate: FnAction<RouteType>
}

export const Navbar: React.FC<NavbarProps> = React.memo(({ onNavigate }) => {
    return (
        <View style={styles.root}>
            <Button
                title="Home"
                onPress={onNavigate.bind(null, 'Home')}
            />

            <Button
                title="About"
                onPress={onNavigate.bind(null, 'About')}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    root: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#680e0e',
        padding: 10,
    },
})