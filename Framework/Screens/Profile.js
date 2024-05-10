import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from '../Components/Theme'
import { Button } from 'react-native-paper'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { EditProfile } from './EditProfile'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

export function Profile({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>QP-Bills</Text>
        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 5, fontFamily: Theme.fonts.text600 }}>Profile</Text>
        <View style={{ marginBottom: 10 }}>
          <Image source={{ uri: "https://avatar.iran.liara.run/public/7" }} style={[styles.img, { alignSelf: "center" }]} />
          <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17, alignSelf: "center" }}>John wick</Text>
          <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 17, alignSelf: "center" }}>+20071590374</Text>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
            <Button mode='contained' icon={"account-edit"} textColor='black' buttonColor={Theme.colors.primary + 30} onPress={() => { navigation.navigate("Editprofile") }}>Edit Profile</Button>
          </View>

          <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginTop: 10 }]}>
            <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Full Name</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, }}>John Wick</Text>
            </View>
          </View>

          <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginTop: 10 }]}>
            <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>E-mail</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, }}>JohnWick@gmail.com</Text>
            </View>
          </View>

          <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginTop: 10 }]}>
            <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Username</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, }}>Johnwick_19</Text>
            </View>
          </View>

          <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginTop: 10 }]}>
            <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Password</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, }}>******</Text>
            </View>
          </View>

          <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17, marginTop: 10 }}>Settings</Text>
          <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }]}>
            <Button mode='text' style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Payment settings</Button>
           <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
           <MaterialCommunityIcons name="greater-than" size={20} color="black" />
           </View>
          </View>

          <Button mode='text'  onPress={() => { navigation.navigate("IntroScreen") }}>Sign Out</Button>

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
  }
})