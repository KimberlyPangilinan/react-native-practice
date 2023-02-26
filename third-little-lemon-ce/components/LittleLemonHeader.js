import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ display:'flex', backgroundColor: '#dee2eb' , justifyContent: 'center', alignItems:'center'}}>
      <Text
        style={{
          paddingVertical: 24,
          marginHorizontal: 16,
          marginTop: 8,
          fontSize: 12,
          color: '#265630',
          textAlign: 'center',
        }}>
        LITTLE LEMON
      </Text>
    </View>
  );
}
