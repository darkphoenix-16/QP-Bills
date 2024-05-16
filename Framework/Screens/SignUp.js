import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Button, Switch } from 'react-native-paper';
import { Theme } from '../Components/Theme';
import { Formik } from 'formik';

export function SignUp({navigation}) {
 
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        
      <Button mode='text'style={{alignSelf:"flex-start"}} onPress={()=>{navigation.navigate("IntroScreen")}} >intro</Button>
          <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>QP-Bills</Text>
          <Formik
        initialValues={{fullname :"john wick", email:"john@gmail.com", username:"john99", password:"password"}}
        onSubmit={(value)=>{
          console.log( value.fullname, value.email,value.username, value.password)
        }}
        >
          {(prop)=>{
            return (
          <View style={{flex:1, justifyContent:"center",}}>
        <Text style={{ fontSize: 35, textAlign: "center", fontFamily:Theme.fonts.text600 }}>Create Account</Text>
        <View style={styles.label}>
        <Text style={{fontFamily:Theme.fonts.text500}}>Full Name :</Text>
        <TextInput
          // placeholder='Enter  Full Name'
          placeholderTextColor={"gray"}
          style={styles.input}
          />
          </View>
          <View style={styles.label}>
        <Text style={{fontFamily:Theme.fonts.text500}}>E-mail :</Text>
        <TextInput
          // placeholder='Enter E-mail'
          placeholderTextColor={"gray"}
          style={styles.input}
          />
          </View>

          <View style={[styles.label, {}]}>
        <Text style={{fontFamily:Theme.fonts.text500}}>Username :</Text>
        <TextInput
          // placeholder='Enter Username'
          placeholderTextColor={"gray"}
          style={styles.input}
          
          />
          </View>

          <View style={styles.label}>
        <Text style={{fontFamily:Theme.fonts.text500}}>Password :</Text>
        <TextInput
          // placeholder='Enter Password'
          // placeholderTextColor={"gray"}
          style={styles.input}
          />
          </View>
        <Button mode='contained-tonal' style={{ marginVertical: 10 }} onPress={prop.handleSubmit} buttonColor={Theme.colors.primary +30}  > Sign Up</Button>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}> 
        <Text style={{ fontSize: 15, marginVertical:30, fontFamily:Theme.fonts.text300}}>Im already a user</Text>
        <Button mode='text' onPress={()=>{navigation.navigate("Login")}}>Log In</Button>
        </View>
</View>
      )
          }}
        </Formik>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff00",
  },
  input: {
    borderColor: Theme.colors.primary,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal:15,
    borderRadius: 30,
    fontSize: 17,
  },

  label:{
    marginBottom:10,
  }
})
