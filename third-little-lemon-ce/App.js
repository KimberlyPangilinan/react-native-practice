import { View , StyleSheet} from 'react-native';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import WelcomeScreen from './components/WelcomeScreen';
import { appStyles } from './components/Stylesheet';
export default function App() {

  
  return (
   
      <View
        style={appStyles.container}>
        <LittleLemonHeader />
        <WelcomeScreen/>
       
      </View>
    
   
   
  );
}
