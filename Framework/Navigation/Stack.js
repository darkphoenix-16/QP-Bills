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
import { Transaction } from '../Screens/Transaction';
import { Transfer } from '../Screens/Transfer';
import { Airtime } from '../Screens/Airtime';
import { Data } from '../Screens/Data';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:true}} >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ForgotPassword" component={ForgottenPassword} />
      <Stack.Screen name="Editprofile" component={EditProfile} />
      <Stack.Screen name="FundAccount" component={FundAccount} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="Transfer" component={Transfer} />
      <Stack.Screen name="Airtime" component={Airtime} />
      <Stack.Screen name="Data" component={Data} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}