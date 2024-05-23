import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { Theme } from '../Components/Theme'
import { Formik } from 'formik'
import * as yup from "yup"

const validation = yup.object({
  email: yup.string().email().required(),
  phonenumber: yup.string().min(11).max(11).required(),
  address: yup.string().min(5).max(20).required(),
})

export  function EditProfile({navigation}) {

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
    <Formik
    initialValues={{ email: "",  phonenumber: "", address:"" }}
          onSubmit={(value) => {
            navigation.navigate("HomeScreen")}}

          validationSchema={validation}
        >
          {(prop) => {
            return (
      <View style={{flex:1, justifyContent:"center",}}>
    <Text style={{fontSize:35, textAlign:"center",  fontFamily:Theme.fonts.text600}}>Edit Profile</Text>
        <View style={styles.label}>
        <Text style={{fontFamily:Theme.fonts.text500}}>New email :</Text>
        <TextInput
          placeholder='enter new email'  
          style={{borderBottomWidth: 1, padding: 10,}}
          value={prop.values.email}
          onChangeText={prop.handleChange("email")}
          onBlur={prop.handleBlur("email")}
          />
           <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.email && prop.errors.email}</Text>
          </View>

          <View>
        <Text style={{fontFamily:Theme.fonts.text500}}> Phone number :</Text>
        <TextInput
          placeholder='enter phone number'
          style={{borderBottomWidth: 1, padding: 10,}}
          value={prop.values.phonenumber}
          onChangeText={prop.handleChange("phonenumber")}
          onBlur={prop.handleBlur("phonenumber")}
          />
           <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.phonenumber && prop.errors.phonenumber}</Text>
          
          </View>

          <View>
        <Text style={{fontFamily:Theme.fonts.text500}}> Address :</Text>
        <TextInput
          placeholder='enter your address'
          style={{borderBottomWidth: 1, padding: 10,}}
          value={prop.values.address}
          onChangeText={prop.handleChange("address")}
          onBlur={prop.handleBlur("address")}
          />
           <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.address && prop.errors.address}</Text>
          
          </View>

          <Button mode='contained-tonal' style={{marginTop:15}} buttonColor={Theme.colors.primary + 20}>Submit</Button>
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
    backgroundColor: "#ffffff00",
  },
 
})