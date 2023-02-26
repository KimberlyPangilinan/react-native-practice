import * as React from 'react';
import { View,ScrollView, Text, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: 'black',
    fontSize: 16,
  },
  itemMenu: {
    color: 'black',
    fontSize: 16,
    textAlign:'center'
  },
  MenuContainer: {
    
    paddingVertical: 20,
    justifyContent: 'center',
  },
})
const menuItemsToDisplay = [
  { name: 'Hummus', id: '1A' },
  { name: 'Moutabal', id: '2B' },
  { name: 'Falafel', id: '3C' },
  { name: 'Marinated Olives', id: '4D' },
  { name: 'Kofta', id: '5E' },
  { name: 'Eggplant Salad', id: '6F' },
  { name: 'Lentil Burger', id: '7G' },
  { name: 'Smoked Salmon', id: '8H' },
  { name: 'Kofta Burger', id: '9I' },
  { name: 'Turkish Kebab', id: '10J' },
  { name: 'Fries', id: '11K' },	
  { name: 'Buttered Rice', id: '12L' },
  { name: 'Bread Sticks', id: '13M' },
  { name: 'Pita Pocket', id: '14N' },
  { name: 'Lentil Soup', id: '15O' },
  { name: 'Greek Salad', id: '16Q' },
  { name: 'Rice Pilaf', id: '17R' },
  { name: 'Baklava', id: '18S' },
  { name: 'Tartufo', id: '19T' },
  { name: 'Tartufo', id: '20U' },
  { name: 'Tiramisu', id: '21V' },
  { name: 'Panna Cotta', id: '22W' },
];

const Item = ({name,id}) => (
  <View style={styles.innerContainer}>
    <Text style={styles.itemText}>{name}</Text>
    <Text>{id}</Text>
  </View>
)
const Seperator =()=> <View style={{borderBottomWidth:0.5,borderColor:'#3c343d'}}/>
const Header =()=> <View  style={styles.MenuContainer}><Text style={styles.itemMenu}>Menu</Text></View>
export default function WelcomeScreen() {

  const renderItem = ({item}) => <Item name = {item.name} id={item.id}/>
  return (
    <View style={styles.container}>
    <View style={{
      backgroundColor:"#265630",
    }}>
    <Text
        style={{

          marginHorizontal: 24,
          marginTop: 32,
          fontSize: 24,
          color: '#cb9d23',
          textAlign: 'left',
        }}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 10,
          marginHorizontal: 24,
          marginTop:24,
          marginBottom: 32,
          color: 'white',
          textAlign: 'left',
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text></View>
      
      <FlatList 
        data={menuItemsToDisplay} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
        ListHeaderComponent={Header}
      />
    </View>
  );
}