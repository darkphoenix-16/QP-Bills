import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Button, } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from '../Components/Theme'

export  function ForgottenPassword({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>   
      <Button mode='text'style={{alignSelf:"flex-start"}} onPress={()=>{navigation.navigate("IntroScreen")}} >intro</Button>
      <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>QP-Bills</Text>
      <View style={{flex:1, justifyContent:'center'}}>

        <Text style={{ fontSize: 35, textAlign: "center", fontFamily:Theme.fonts.text600 }}>Forgot password</Text>
        <Text style={{fontFamily:Theme.fonts.text300, marginVertical:10, fontSize:13}}>Enter your email below to receive password reset instructions</Text>
        <View style={styles.label}>
        <Text style={{fontFamily:Theme.fonts.text500}}>E-Mail :</Text>
        <TextInput
          style={styles.input}
          />
          </View>
          <Button mode='contained-tonal' buttonColor={Theme.colors.primary + 20}>Submit</Button>
          <Button mode='text' style={{marginTop:12}} onPress={()=>{navigation.navigate("Login")}}>Back to Log In</Button>
          </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff00",
  },
  input: {
    borderColor: Theme.colors.primary,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal:15,
    borderRadius: 30,
    fontSize: 15,
  },
label:{
  marginBottom:15
}
  
})