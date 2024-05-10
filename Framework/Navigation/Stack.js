import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../Screens/Profile';

import { IntroScreen } from '../Screens/IntroScreen';
import { Login } from '../Screens/Login';
import { SignUp } from '../Screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './BottomTab';
import { ForgottenPassword } from '../Screens/ForgottenPassword';
import { EditProfile } from '../Screens/EditProfile';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName='' screenOptions={{headerShown:false}} >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ForgotPassword" component={ForgottenPassword} />
      <Stack.Screen name="Editprofile" component={EditProfile} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}