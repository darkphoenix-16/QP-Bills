import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Theme } from '../Components/Theme'
import { Button } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { AppContext } from '../Components/GlobalVariables'
import { db } from '../Firebase/settings'
import { AppButton } from '../Components/AppButton'
import { generateNumber } from '../Components/GenerateNumber'

export function Transfer({navigation}) {
  const { userUID, setPreloader, userInfo } = useContext(AppContext)
  const [recipient, setRecipient] = useState(null);
  const [show, setshow] = useState(false)
  const toggleModal = () => setshow(!show)
  const [amount, setAmount] = useState('')
  const [account, setAccount] = useState('')



  function getReciever(acctNum) {
    setPreloader(true)
    const q = collection(db, 'users');
    const filter = query(q, where('accountNumber', '==', acctNum));
    getDocs(filter).then((response) => {
      let data = [];
      response.forEach((doc) => {
        data.push({ ...doc.data() })
      })
      data.length > 0 ? setRecipient(data[0]) : setRecipient(null)
      console.log(data);
      setPreloader(false)
    }).catch((e) => {
      console.log(e);
      setPreloader(false)
    });
  }
   const onSuccess = () => {
    setPreloader(true);
          updateDoc(doc(db, "users", recipient.userUID), {
            balance: Number(amount) + Number(recipient.balance)
          })
         .then(() => {
            addDoc(collection(db, "history", recipient.userUID), {
              refId: "qp_" + generateNumber(20),
              naration: "",
              amount:  amount ,
              description: "From Johnny",
              category: "Transfer",
              userUID: recipient.userUID,
              type: "credit",
              date: Date.now(),
              status: "successful",
            })
           Alert.alert("Payment Status", "Successful",[{text:"OK", onPress:()=>{navigation.goBack()}}])
          })
         .catch((e) => {
            setPreloader(false);
            Alert.alert(
              "Payment Status",
              `Something went wrong.`,
              [{ text: "Try Again", onPress: () => {navigation.goBack()} }]
            );
          });
  }
  return (
    <View style={styles.container}>

      <View style={{ padding: 15, backgroundColor: Theme.colors.bg2, marginVertical: 20, borderRadius: 10 }}>

        <View style={{ borderRadius: 10, padding: 10, marginBottom: 10 }}>
          <Text>Recipient Account</Text>
          <TextInput
            placeholder='enter 10 digit account number'
            style={{ borderBottomWidth: 1, padding: 10, }}
            onChangeText={setAccount}
            value={account}
            onChange={(inp) => inp.length == 10 ? getReciever(inp) : null}
          />
          {recipient ? <Text style={{ fontSize: 16, fontFamily: Theme.fonts.text600, color: Theme.colors.green }}>{recipient.firstname} {recipient.lastname}</Text> : null}
        </View>

        <View style={{ borderRadius: 10, padding: 10, marginBottom: 10 }}>
          <Text>Amount</Text>
          <TextInput
            placeholder='0'
            style={{ borderBottomWidth: 1, padding: 10, }}
            value={amount}
            onChangeText={setAmount}
            
          />
        </View>

        <View style={{ borderRadius: 10, padding: 10, marginBottom: 10 }}>
          <Text>Narration(Optional)</Text>
          <TextInput
            placeholder='narration'
            style={{ borderBottomWidth: 1, padding: 10, }}
          />
        </View>


      </View>



      <Button mode='contained-tonal' buttonColor={Theme.colors.primary + 40} onPress={toggleModal}>Next</Button>
      <Modal
        visible={show}
        animationType="slide"
        transparent={true}
        
      >
        <View style={{ flex: 1, backgroundColor: "#000000a1" }}>
          <Pressable onPress={toggleModal} style={{ flex: 1, }}></Pressable>
          <View style={styles.modal}>
            <Text style={{ textAlign: "center", fontFamily: Theme.fonts.text500, fontSize: 15, }}>Confirm details</Text>
            <View style={{ backgroundColor: Theme.colors.primary + 30, borderRadius: 10, marginVertical: 10 }}>
              <Text style={{ padding: 5,fontFamily:Theme.fonts.text400 }}>Confirm the transfer details  before you proceed to avoid mistakes</Text>
            </View>
            
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>Account</Text>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>{account}</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>Amount</Text>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>₦{amount}</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>Fee</Text>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>0</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 , marginBottom:25 }}>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>Total</Text>
              <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 14 }}>₦{Number(amount)}</Text>
            </View>

            <AppButton onPress={() => { toggleModal(); navigation.navigate("Pay", { amount: Number(amount) });onSuccess()}}>Confirm</AppButton>
            
          </View>
        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff"
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