import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './Framework/Screens/HomeScreen';
import { Login } from './Framework/Screens/Login';
import { SignUp } from './Framework/Screens/SignUp';

export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <HomeScreen/> */}
      <Login/>
      {/* <SignUp/> */}
    </View>
  );
}



