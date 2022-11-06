
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const AboutScreen: React.FC = React.memo(() => {
  return (
    <View style={styles.root}>
        <Text>About page</Text>
    </View>
  );
})

const styles = StyleSheet.create({
  root: {},
});
