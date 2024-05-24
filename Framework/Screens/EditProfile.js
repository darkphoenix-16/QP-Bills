import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { Theme } from '../Components/Theme'
import { Formik } from 'formik'
import * as yup from "yup"
import { AppContext } from '../Components/GlobalVariables'
import { AppButton } from '../Components/AppButton'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../Firebase/settings'

const validation = yup.object({
  gender: yup.string().min(4).max(6).required(),
  phonenumber: yup.string().min(11).max(11).required(),
  address: yup.string().min(5).max(200).required(),
})

export function EditProfile({ navigation }) {
  const { userUID, setPreloader, setUserInfo, userInfo } = useContext(AppContext)
  return (
    // <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Formik
        initialValues={{ phonenumber: "", address: "", gender: "" }}
        onSubmit={(value) => {
          setPreloader(true)
          updateDoc(doc(db, "users", userUID), {
            phone: value.phonenumber,
            address: value.address,
            gender: value.gender,
          }).then(() => {
            Alert.alert("Profile updated successfully")
            setPreloader(false)
          }).catch((e) => {
            console.log(e);
            setPreloader(false)
          })
        }}

        validationSchema={validation}
      >
        {(prop) => {
          return (
            <View style={{ flex: 1, }}>
              <Text style={{ fontSize: 35, textAlign: "center", fontFamily: Theme.fonts.text600, marginBottom: 30 }}>Edit Profile</Text>
              <View style={styles.label}>
                <Text style={{ fontFamily: Theme.fonts.text500 }}>Email :</Text>
                <TextInput
                  style={{ borderBottomWidth: 1, padding: 10,marginBottom:10 }}
                  value={userInfo.email}
                  onChangeText={prop.handleChange("email")}
                  onBlur={prop.handleBlur("email")}
                // editable={false}
                />
              
              </View>

              <View>
                <Text style={{ fontFamily: Theme.fonts.text500 }}> Phone number :</Text>
                <TextInput
                  placeholder='enter phone number'
                  style={{ borderBottomWidth: 1, padding: 10, }}
                  value={prop.values.phonenumber}
                  onChangeText={prop.handleChange("phonenumber")}
                  onBlur={prop.handleBlur("phonenumber")}
                />
                <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.phonenumber && prop.errors.phonenumber}</Text>

              </View>
              <View>
                <Text style={{ fontFamily: Theme.fonts.text500 }}>Gender :</Text>
                <TextInput
                  placeholder='enter gender'
                  style={{ borderBottomWidth: 1, padding: 10, }}
                  value={prop.values.gender}
                  onChangeText={prop.handleChange("gender")}
                  onBlur={prop.handleBlur("gender")}
                />
                <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.gender && prop.errors.gender}</Text>

              </View>

              <View>
                <Text style={{ fontFamily: Theme.fonts.text500 }}> Address :</Text>
                <TextInput
                  placeholder='enter your address'
                  style={{ borderBottomWidth: 1, padding: 10, }}
                  value={prop.values.address}
                  onChangeText={prop.handleChange("address")}
                  onBlur={prop.handleBlur("address")}
                />
                <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.address && prop.errors.address}</Text>

              </View>

              <AppButton onPress={prop.handleSubmit}>Update Profile</AppButton>
            </View>
          )
        }}
      </Formik>

    </View >
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },

})