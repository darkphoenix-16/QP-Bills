import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Theme } from '../Components/Theme';
import { Button, Switch } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { NavigationContainerRefContext } from '@react-navigation/native';

export function Login({navigation}) {
 

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Button mode='text'style={{alignSelf:"flex-start"}} onPress={()=>{navigation.navigate("IntroScreen")}} >intro</Button>
          <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>QP-Bills</Text>
          <View style={{flex:1, justifyContent:"center",}}>

        <Text style={{fontSize:35, textAlign:"center", fontFamily:Theme.fonts.text600}}>LogIn</Text>
        <View style={styles.label}>
        <Text style={{fontFamily:Theme.fonts.text500}}>UserName :</Text>
        <TextInput
          // placeholder='Enter  Full Name'
          placeholderTextColor={"gray"}
          style={styles.input}
          />
          </View>
          <View>
        <Text style={{fontFamily:Theme.fonts.text500}}>Password :</Text>
        <TextInput
          // placeholder='Enter E-mail'
          placeholderTextColor={"gray"}
          style={styles.input}
          />
          </View>
        <Button mode='text' style={{ fontSize: 12, alignSelf:"flex-end"}} onPress={()=>{navigation.navigate("ForgotPassword")}}>Forgot Password?</Button>

        <Button mode='contained-tonal' style={{ marginVertical: 15 }}  onPress={()=>{navigation.navigate("HomeScreen")}} buttonColor={Theme.colors.primary + 30} > Log In</Button>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}> 
        <Text style={{ fontSize: 15, marginVertical:30, fontFamily:Theme.fonts.text300}}>Im a new user</Text>
        <Button mode='text' onPress={()=>{navigation.navigate("SignUp")}}>Sign Up</Button>
        </View>
       
</View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: StatusBar.currentHeight,
    backgroundColor:"#ffffff00",
  },
  input: {
    borderColor: Theme.colors.primary,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal:15,
    borderRadius: 30,
    fontSize: 15,
    marginTop: 10

  },
label:{
  marginBottom:7
}
})