import { View , StyleSheet} from 'react-native';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      
    },
    text:{
            fontSize: 10,
            color: '#18182d',
            textAlign: 'center',
    }
  });
  
  return (
    <> 
      <View
        style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen/>
       
      </View>
      <View
        style={styles.text}>
        <LittleLemonFooter/>
      </View>
    </>
   
  );
}
