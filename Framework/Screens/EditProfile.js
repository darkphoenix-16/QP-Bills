import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { Theme } from '../Components/Theme'
import { Formik } from 'formik'
import * as yup from "yup"

const validation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required(),
  phonenumber: yup.string().min(11).max(11).required(),
  address: yup.string().min(5).max(20).required(),
})

export  function EditProfile({navigation}) {

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
    <Button mode='text'style={{alignSelf:"flex-start"}} onPress={()=>{navigation.navigate("Profile")}} >profile</Button>
    <Formik
    initialValues={{ email: "", password: "", phonenumber: "", address:"" }}
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
          // placeholder='Enter  Full Name'
          placeholderTextColor={"gray"}
          style={styles.input}
          value={prop.values.email}
          onChangeText={prop.handleChange("email")}
          onBlur={prop.handleBlur("email")}
          />
           <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.email && prop.errors.email}</Text>
          </View>

          <View>
        <Text style={{fontFamily:Theme.fonts.text500}}> New Password :</Text>
        <TextInput
          placeholderTextColor={"gray"}
          style={styles.input}
          value={prop.values.password}
          onChangeText={prop.handleChange("password")}
          onBlur={prop.handleBlur("password")}
          />
           <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.password && prop.errors.password}</Text>
          
          </View>

          <View>
        <Text style={{fontFamily:Theme.fonts.text500}}> Phone number :</Text>
        <TextInput
          placeholderTextColor={"gray"}
          style={styles.input}
          value={prop.values.phonenumber}
          onChangeText={prop.handleChange("phonenumber")}
          onBlur={prop.handleBlur("phonenumber")}
          />
           <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.phonenumber && prop.errors.phonenumber}</Text>
          
          </View>

          <View>
        <Text style={{fontFamily:Theme.fonts.text500}}> Address :</Text>
        <TextInput
          placeholderTextColor={"gray"}
          style={styles.input}
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