import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../Screens/Profile';

import { IntroScreen } from '../Screens/IntroScreen';
import { Login } from '../Screens/Login';
import { SignUp } from '../Screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './BottomTab';
import { ForgottenPassword } from '../Screens/ForgottenPassword';
import { EditProfile } from '../Screens/EditProfile';
import { ChangePassword } from '../Screens/ChangePassword';
import { FundAccount } from '../Screens/FundAccount';

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
      <Stack.Screen name="FundAccount" component={FundAccount} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}