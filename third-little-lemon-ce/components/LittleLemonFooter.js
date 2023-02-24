import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { footerStyles } from './Stylesheet';
export default function LittleLemonFooter() {


  return (
    <View
      style={footerStyles.container}>
      <Text
        style={footerStyles.text}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}