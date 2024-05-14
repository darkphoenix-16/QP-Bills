import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { Theme } from '../Components/Theme'

export  function EditProfile({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
    <Button mode='text'style={{alignSelf:"flex-start"}} onPress={()=>{navigation.navigate("Profile")}} >profile</Button>
      <View style={{flex:1, justifyContent:"center",}}>
    <Text style={{fontSize:35, textAlign:"center",  fontFamily:Theme.fonts.text600}}>Edit Profile</Text>
        <View style={styles.label}>
        <Text style={{fontFamily:Theme.fonts.text500}}>New Name :</Text>
        <TextInput
          // placeholder='Enter  Full Name'
          placeholderTextColor={"gray"}
          style={styles.input}
          />
          </View>
          <View>
        <Text style={{fontFamily:Theme.fonts.text500}}> New Password :</Text>
        <TextInput
          // placeholder='Enter E-mail'
          placeholderTextColor={"gray"}
          style={styles.input}
          />
          </View>

          <Button mode='contained-tonal' style={{marginTop:15}} buttonColor={Theme.colors.primary + 20}>Submit</Button>
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
    marginTop: 10

  },
})