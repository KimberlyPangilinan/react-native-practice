import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {

  const styles = StyleSheet.create({
  container: {
      backgroundColor: '#d5d6e0',
        marginBottom: 0,
        padding: 8
  },
  text:{
      fontSize: 10,
          color: 'black',
          textAlign: 'center',
  }
});

  return (
    <View
      style={styles.container}>
      <Text
        style={styles.text}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}