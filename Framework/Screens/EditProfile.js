import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { Theme } from '../Components/Theme'
import { Formik } from 'formik'
import * as yup from "yup"
import { AppContext } from '../Components/GlobalVariables'
import { AppButton } from '../Components/AppButton'
import { doc, updateDoc } from 'firebase/firestore'
import { db, imgStorage } from '../Firebase/settings'
import * as ImagePicker from 'expo-image-picker';

const validation = yup.object({
  gender: yup.string().min(4).max(6).required(),
  phonenumber: yup.string().min(11).max(11).required(),
  address: yup.string().min(5).max(200).required(),
})

export function EditProfile({ navigation }) {
  const { userUID, setPreloader, setUserInfo, userInfo } = useContext(AppContext)

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      uplaodToStorage(result.assets[0].uri)
        .then(() => {
          setPreloader(false)
          Alert.alert(
            "Upload Status",
            "Profile image has been uploaded successfully",
          )
        })
    }
  };

  async function uplaodToStorage(image) {
    setPreloader(true)
    try {
      let response = await fetch(image);
      const imageBlob = await response.blob()
      await imgStorage().ref().child(`ProfileImages/${userUID}`).put(imageBlob);
    } catch {
      setPreloader(false)
      Alert.alert(
        "Upload Status",
        "Failed to upload profile image. Please try again",
        [{ text: 'OK' }]
      )
    }
  }

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
              {/* <Text style={{ fontSize: 35, textAlign: "center", fontFamily: Theme.fonts.text600, marginBottom: 30 }}>Edit Profile</Text> */}

              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 10 }}>
                        <Image source={{ uri: "https://avatar.iran.liara.run/public/7" }} style={[styles.img, { alignSelf: "center" }]} />
                        <View style={{}}>
                            <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 18, alignSelf: "center", marginBottom: 5 }}>{userInfo.firstname} {userInfo.lastname}</Text>
                            <Button mode='contained' icon={"account-edit"} textColor='black' buttonColor={Theme.colors.primary + 30} onPress={pickImage}>Change Image</Button>
                        </View>
                    </View>

              <View style={styles.label}>
                <Text style={{ fontFamily: Theme.fonts.text500, marginTop:10 }}>Email :</Text>
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
  img: {
    width: 100,
    height: 100,
    borderRadius: 100
},

})