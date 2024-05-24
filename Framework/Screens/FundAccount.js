import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from '../Components/Theme'
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Button } from 'react-native-paper'
import { AppContext } from '../Components/GlobalVariables'
import { AppButton } from '../Components/AppButton'
import { text } from '@fortawesome/fontawesome-svg-core'

export function FundAccount({ navigation, route }) {
  const { userUID, setPreloader, setUserInfo, userInfo } = useContext(AppContext)
  const [show, setshow] = useState(false)
  const toggleModal = () => setshow(!show)
  const [amount, setAmount] = useState('')

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17, textAlign: "center" }}>FundAccount</Text>

        <View style={[styles.view, { marginBottom: 20 }]}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <MaterialCommunityIcons name="bank-transfer" size={30} color="black" />
            <TouchableOpacity style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }} onPress={() => navigation.navigate("Transfer")}><Text>Bank Transfer</Text></TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontFamily: Theme.fonts.text300, fontSize: 12, marginBottom: 13 }}>Account Number</Text>
            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 20, marginBottom: 10 }}>{userInfo.accountNumber}</Text>

            <Button mode='contained-tonal' buttonColor={Theme.colors.primary + 35}>Copy Number</Button>
          </View>
        </View>

        <View style={[styles.view, { marginTop: 10 }]}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 15 }}>
            <AntDesign name="creditcard" size={24} color="black" />
            <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Top up with Card</Text>
          </View>

          <View style={{}}>
            <TextInput style={{ fontFamily: Theme.fonts.text400, marginBottom: 10, fontSize: 15, borderBottomWidth: 1 }}
              placeholder='Amount'
              value={amount}
              onChangeText={setAmount}
            />
          </View>


          <View>
            <AppButton onPress={toggleModal}>Proceed</AppButton>
          </View>
        </View>



      </View>
      <Modal
        visible={show}
        animationType="slide"
        transparent={true}
        amount={amount}
      >
        <View style={{ flex: 1, backgroundColor: "#000000a1" }}>
          <Pressable onPress={toggleModal} style={{ flex: 1, }}></Pressable>
          <View style={styles.modal}>
            <Text style={{ textAlign: "center", fontFamily: Theme.fonts.text500, fontSize: 15, }}>Confirm details</Text>
            <View style={{ backgroundColor: Theme.colors.primary + 30, borderRadius: 20, marginVertical: 10 }}>
              <Text style={{ padding: 5,fontFamily:Theme.fonts.text400 }}>Confirm the transfer details  before you proceed to avoid mistakes</Text>
            </View>
            <MaterialCommunityIcons name="bank-transfer" size={36} color="black" style={{ alignSelf: "center", marginVertical: 5 }} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>Acccount Number</Text>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>{userInfo.accountNumber}</Text>
            </View>



            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>Payment Method</Text>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>Paystack/Card</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>Amount</Text>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>₦{amount}</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>Fee</Text>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>1.8%</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 , marginBottom:15 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>Total</Text>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>₦{Number(amount) + ((1.8/100 )*Number(amount))}</Text>
            </View>

            <AppButton onPress={toggleModal}>Confirm</AppButton>
            {/* onPress={()=>Alert.alert("Payment made",[{ text:"ok", onPress:()=>{}}])} */}
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
    backgroundColor: "#ffffff",
  },
  view: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Theme.colors.primary + 20,
    borderRadius: 10
  },
  modal: {

    backgroundColor: "#fffffff5",
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    borderRadius: 20,
    // margin: 20,
    padding: 20
  }
})