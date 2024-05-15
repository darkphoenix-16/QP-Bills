import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from '../Components/Theme'
import { Button } from 'react-native-paper'
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { AppButton } from '../Components/AppButton'



export function Profile({ navigation }) {
  const [show, setshow] = useState(false)
  const toggleModal = () => setshow(!show)

  function SignOut() {
    toggleModal()
    setTimeout(() => {
      navigation.replace("IntroScreen")
    }, 3000);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text  onPress={()=>{navigation.navigate("HomeScreen")}} style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>QP-Bills</Text>
        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 5, fontFamily: Theme.fonts.text600 }}>Profile</Text>
        <View style={{ marginBottom: 10 }}>
          <Image source={{ uri: "https://avatar.iran.liara.run/public/7" }} style={[styles.img, { alignSelf: "center" }]} />
          <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17, alignSelf: "center" }}>John wick</Text>
          <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 17, alignSelf: "center" }}>+20071590374</Text>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
            <Button mode='contained' icon={"account-edit"} textColor='black' buttonColor={Theme.colors.primary + 30} onPress={() => { navigation.navigate("Editprofile") }}>Edit Profile</Button>
          </View>

          <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginTop: 10 }]}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <AntDesign name="customerservice" size={17} color="black" />
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Customer service</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <MaterialCommunityIcons name="greater-than" size={20} color="black" />
            </View>
          </View>
          <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginTop: 10 }]}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <AntDesign name="questioncircleo" size={17} color="black" />
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>About Us</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <MaterialCommunityIcons name="greater-than" size={20} color="black" />
            </View>
          </View>
          <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginTop: 10 }]}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <MaterialIcons name="star-rate" size={17} color="black" />
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Rate Us</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <MaterialCommunityIcons name="greater-than" size={20} color="black" />
            </View>
          </View>


          <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17, marginTop: 10 }}>Settings</Text>
          <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", }]}>
            <Button mode='text' style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Change transfer pin</Button>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <MaterialCommunityIcons name="greater-than" size={20} color="black" />
            </View>
          </View>
          <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }]}>
            <Button mode='text' onPress={() => { navigation.navigate("ChangePassword") }} style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Change password</Button>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <MaterialCommunityIcons name="greater-than" size={20} color="black" />
            </View>
          </View>

          {/* <Button mode='text' onPress={() => { toggleModal }}>Sign Out</Button> */}
          <AppButton
            style={{ backgroundColor: "transparent", borderColor: Theme.colors.red, borderWidth: 1 , marginTop:20}}
            textColor={Theme.colors.red} onPress={toggleModal}>Sign Out
          </AppButton>
        </View>
      </View>
      <Modal
        visible={show}
        animationType="slide"
        transparent={true}
      >
        <View style={{ flex: 1, backgroundColor: "#000000a1" }}>
          <Pressable onPress={toggleModal} style={{ flex: 1, }}></Pressable>
          <View style={styles.modal}>
            <Text style={{ fontFamily: Theme.fonts.text700, fontSize: 18, textAlign: "center", marginBottom: 30, color: Theme.colors.text2 }}>Are you sure you want to sign out?</Text>
            <AppButton onPress={toggleModal}>No</AppButton>
            <AppButton
              style={{ backgroundColor: "transparent", borderColor: Theme.colors.red, borderWidth: 1, marginTop: 10 }}
              textColor={Theme.colors.red} onPress={SignOut}>Sign Out</AppButton>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff00",
  },
  img: {
    width: 78,
    height: 80,
    borderRadius: 100
  },
  view: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Theme.colors.primary + 20,
    borderRadius: 10
  },
  modal: {
    
      backgroundColor: "white",
      justifyContent: "center",
      // alignItems: "center",
      flex: 1,
      borderRadius: 20,
      // margin: 20,
      padding: 20
  }
})