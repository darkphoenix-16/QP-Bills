import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from '../Components/Theme'
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Button } from 'react-native-paper'

export function FundAccount({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button style={{alignSelf:"flex-start"}} onPress={()=>{navigation.navigate("HomeScreen")}}>Home</Button>
        <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 , textAlign:"center"}}>FundAccount</Text>
<View style={[styles.view, {marginBottom:20}]}>
<View style={[ { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }]}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MaterialCommunityIcons name="bank-transfer"size={30} color="black" />
            <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Bank Transfer</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <MaterialCommunityIcons
              name="greater-than" size={20} color="black" />
          </View>
        </View>
        <View>
          <Text style={{fontFamily:Theme.fonts.text300, fontSize:12, marginBottom:13}}>Account Number</Text>
          <Text style={{fontFamily:Theme.fonts.text500, fontSize:20, marginBottom:10}}>800 700 5009</Text>

          <Button mode='contained-tonal' buttonColor={Theme.colors.primary + 35}>Copy Number</Button>
        </View>
</View>



        <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginTop: 10 }]}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MaterialCommunityIcons name="cash" size={24} color="black" />
            <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Cash deposit</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <MaterialCommunityIcons
              name="greater-than" size={20} color="black" />
          </View>
        </View>

        <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginTop: 10 }]}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <AntDesign name="creditcard" size={24} color="black" />
            <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Top up with Card</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <MaterialCommunityIcons
              name="greater-than" size={20} color="black" />
          </View>
        </View>
        <View style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginTop: 10 }]}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MaterialIcons name="mobile-screen-share" size={24} color="black" />
            <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Bank USSD</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <MaterialCommunityIcons
              name="greater-than" size={20} color="black" />
          </View>
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
  view: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Theme.colors.primary + 20,
    borderRadius: 10
  },
})