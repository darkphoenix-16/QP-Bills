import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Card } from 'react-native-paper'
import { Theme } from '../Components/Theme'

export function IntroScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <View  style={{marginVertical:20 ,}}>
        <Text  style={{textAlign:"center", fontFamily: Theme.fonts.text500, fontSize:20}}>QP-Bills</Text>
        <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLoRhrvmls5yT6-aGGPh9lC-NJJhtI3GmmVfYqbLKwQ&s' }}/>
        <Text style={{fontFamily:Theme.fonts.text300, textAlign:"center", fontSize:15}}>Best Way to Pay your Bills</Text>
      </View>
      <Button mode='contained-tonal' style={{marginVertical:5}} buttonColor={Theme.colors.primary + 30} onPress={()=>{navigation.navigate("SignUp")}}>Sign Up</Button>
      <Button mode='contained-tonal' style={{marginTop:5}} buttonColor={Theme.colors.primary + 30} onPress={()=>{navigation.navigate("Login")}}>Log In</Button>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor:"white"
  },
  img:{
    width:370,
    height:500,
    alignSelf:"center",

  }
})