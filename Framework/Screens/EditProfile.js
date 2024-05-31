import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { Theme } from '../Components/Theme'
import { Formik } from 'formik'
import * as yup from "yup"
import { AppContext } from '../Components/GlobalVariables'
import { AppButton } from '../Components/AppButton'
import { doc, updateDoc } from 'firebase/firestore'
import { db, imgStorage, storage } from '../Firebase/settings';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref } from 'firebase/storage'

const validation = yup.object({
  gender: yup.string().min(4).max(6).required(),
  phonenumber: yup.string().min(11).max(11).required(),
  address: yup.string().min(5).max(200).required(),
})

export function EditProfile({ navigation }) {
  const { userUID, setPreloader, userInfo } = useContext(AppContext);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // setPreloader(false)
  }, [])
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      uplaodToStorage(result.assets[0].uri)
        .then(() => {
          fetchProfilePic()
        })
    }
  };

  async function uplaodToStorage(image) {
    setPreloader(true)
    try {
      let response = await fetch(image);
      const imageBlob = await response.blob()
      await imgStorage().ref().child(`ProfileImages/${userUID}`).put(imageBlob);
    } catch (e) {
      console.log(e);
      setPreloader(false)
      Alert.alert(
        "Upload Status",
        "Failed to upload profile image. Please try again",
        [{ text: 'OK' }]
      )
    }
  }

  async function fetchProfilePic() {
    setPreloader(true)
    const reference = ref(storage, `ProfileImages/${userUID}`);
    await getDownloadURL(reference).then(imgURL => {
      updateDoc(doc(db, "users", userUID), {
        image: imgURL
      }).then(() => {
        Alert.alert(
          "Profile Image uploaded",
          "Your profile picture has been uploaded successfully!",
        );
        setPreloader(false)
      }).catch(() => {
        Alert.alert(
          "Upload Status",
          "Failed to update profile image. Please try again",
        )
        setPreloader(false);
      })
    }).catch((e) => {
      console.log(e);
      setPreloader(false);
    })
  }


  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ phonenumber: "", address: "", gender: "", }}
        onSubmit={(value) => {
          setPreloader(true)
          updateDoc(doc(db, "users", userUID), {
            phone: value.phonenumber,
            address: value.address,
            gender: value.gender
          }).then(() => {
            Alert.alert("Profile update", "Profile has been updated successuflly")
            setPreloader(false)
          }).catch(e => {
            console.log(e);
            setPreloader(false)
          })
        }}

        validationSchema={validation}
      >
        {(prop) => {
          return (
            <View style={{ flex: 1, }}>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 10, marginBottom: 30 }}>
                <Image source={{ uri: userInfo.image }} style={{
                  alignSelf: "center", width: 100,
                  height: 100,
                  borderRadius: 100
                }} />
                <View style={{}}>
                  <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 18, alignSelf: "center", marginBottom: 5 }}>{userInfo.firstname} {userInfo.lastname}</Text>
                  <Button mode='contained' icon={"account-edit"} textColor='black' buttonColor={Theme.colors.primary + 30} onPress={pickImage}>Change Image</Button>
                </View>
              </View>
              <View style={styles.label}>
                <Text style={{ fontFamily: Theme.fonts.text500 }}>Email :</Text>
                <TextInput
                  placeholder='enter new email'
                  style={{ borderBottomWidth: 1, borderColor: Theme.colors.border, padding: 10, marginBottom: 10 }}
                  value={userInfo.email}
                  editable={false}
                />
              </View>

              <View>
                <Text style={{ fontFamily: Theme.fonts.text500 }}> Gender :</Text>
                <TextInput
                  placeholder='enter gender'
                  style={{ borderBottomWidth: 1, borderColor: Theme.colors.border, padding: 10, }}
                  value={prop.values.gender}
                  onChangeText={prop.handleChange("gender")}
                  onBlur={prop.handleBlur("gender")}
                />
                <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.gender && prop.errors.gender}</Text>

              </View>
              <View>
                <Text style={{ fontFamily: Theme.fonts.text500 }}> Phone number :</Text>
                <TextInput
                  placeholder='enter phone number'
                  style={{ borderBottomWidth: 1, borderColor: Theme.colors.border, padding: 10, }}
                  value={prop.values.phonenumber}
                  onChangeText={prop.handleChange("phonenumber")}
                  onBlur={prop.handleBlur("phonenumber")}
                />
                <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.phonenumber && prop.errors.phonenumber}</Text>

              </View>

              <View>
                <Text style={{ fontFamily: Theme.fonts.text500 }}> Address :</Text>
                <TextInput
                  placeholder='enter your address'
                  style={{ borderBottomWidth: 1, borderColor: Theme.colors.border, padding: 10, }}
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

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },

})