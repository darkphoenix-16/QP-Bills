import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from '../Components/Theme'
import { Button } from 'react-native-paper'
import { AppContext } from '../Components/GlobalVariables'
import { generateRequestId } from '../Components/requestId'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../Firebase/settings'


const networkList = [
    { name: "MTN", id: "mtn", image: "https://wenethub.com/imageslink/mtnlogo.png" },
    { name: "Glo", id: "glo", image: "https://wenethub.com/imageslink/glo.jpg" },
    { name: "Airtel", id: "airtel", image: "https://wenethub.com/imageslink/airtel.jpg" },
    { name: "9Moble", id: "etisalat", image: "https://wenethub.com/imageslink/9mobile.png" },
]

// API KEY 762fc55124d0aab491390250678bbf60     660872022d187761940d4581e8e52ede
// PK_7678c22d56d75535bb1ccfed0c81a976e84978355e5     PK_77788788718102980ecab19ca6ebd38e6707de65dbc
// SK_3772c2b3b956fb320ed2ae3e09a008fbb0802f5c6ee      SK_86794d4f90faa5991de18567ec7247b52e5d8924a63

export function Airtime({ navigation }) {
    const { userUID, setPreloader, userInfo, pin, } = useContext(AppContext);
    const [network, setNetwork] = useState(networkList[0]);
    const [amount, setAmount] = useState(1000);

    useEffect(() => {
        // setPreloader(false)
    }, [])

    async function buyAirtime() {
        setPreloader(true)
        const data = {
            request_id: generateRequestId(),
            phone: "08011111111",
            serviceID: network.id,
            amount: String(amount),
            // pin
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "api-key": "660872022d187761940d4581e8e52ede",
                "secret-key": "SK_86794d4f90faa5991de18567ec7247b52e5d8924a63"
            },
            body: JSON.stringify(data),
            redirect: 'follow'
        };

        fetch("https://sandbox.vtpass.com/api/pay", requestOptions)
            .then(response => response.json())
            .then(response => {
                const { data, status, message } = response;
              const stat =  console.log(response);
              updateDoc(doc(db, "users", userUID), {
                balance: Number(userInfo.balance)- response.amount
              }).then(() => {
                 addDoc(collection(db, "history"), {
                  refId: "qp_" + generateNumber(20),
                  naration: "",
                  amount:  response.amount ,
                  description: "airtime",
                  category: "Airtime",
                  userUID,
                  type: "debit",
                  date: Date.now(),
                  status: "successful",
                })
               Alert.alert(" Status", "Successful",[{text:"OK"}])
              }).catch((e) => {
                setPreloader(false);
                Alert.alert(
                  "Status",
                  `Something went wrong.`,
                  [{ text: "Try Again",}]
                );
              });
                setPreloader(false)
            }).catch(error => {
                setPreloader(false)
                console.log('error', error)
                Alert.alert("Error!", error.message)
            });
    }

    

    return (
        // <SafeAreaView>
        <View style={styles.container}>

            <View style={{ backgroundColor: Theme.colors.primary + 20, marginTop: 20, padding: 15, borderRadius: 15 }}>
                <View style={{ flexDirection: "row" }}>
                    <Pressable>
                        <Text style={{ marginLeft: 7 }}>Select Network</Text>
                    </Pressable>
                    <Text style={{ marginLeft: 50, borderLeftWidth: 1, paddingHorizontal: 10 }}>08011111111</Text>
                </View>
            </View>

            <View style={{ padding: 15, backgroundColor: Theme.colors.bg2, marginTop: 20, borderRadius: 10 }}>
                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 10, marginBottom: 10
                }}>
                    <View>
                        <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>₦50</Text>
                        <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+ ₦1 bonus</Text>
                    </View>
                    <View>
                        <Button mode='contained' buttonColor={Theme.colors.primary + 60}>Buy</Button>
                    </View>
                </View>

                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 10, marginBottom: 10
                }}>
                    <View>
                        <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>₦100</Text>
                        <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+ ₦2 bonus</Text>
                    </View>
                    <View>
                        <Button mode='contained' buttonColor={Theme.colors.primary + 60}>Buy</Button>
                    </View>
                </View>

                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 10, marginBottom: 10
                }}>
                    <View>
                        <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>₦200</Text>
                        <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+ ₦4 bonus</Text>
                    </View>
                    <View>
                        <Button mode='contained' buttonColor={Theme.colors.primary + 60}>Buy</Button>
                    </View>
                </View>

                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 10, marginBottom: 10
                }}>
                    <View>
                        <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>₦500</Text>
                        <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+ ₦10 bonus</Text>
                    </View>
                    <View>
                        <Button mode='contained' buttonColor={Theme.colors.primary + 60}>Buy</Button>
                    </View>
                </View>

                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 10, marginBottom: 10
                }}>
                    <View>
                        <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>₦1000</Text>
                        <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+ ₦20 bonus</Text>
                    </View>
                    <View>
                        <Button mode='contained' buttonColor={Theme.colors.primary + 60}>Buy</Button>
                    </View>
                </View>

                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 10, marginBottom: 10
                }}>
                    <View>
                        <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>₦2000</Text>
                        <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+ ₦40 bonus</Text>
                    </View>
                    <View>
                        <Button mode='contained' buttonColor={Theme.colors.primary + 60}>Buy</Button>
                    </View>
                </View>

            </View>

            <View style={{ marginVertical: 10, backgroundColor: Theme.colors.bg2, padding: 10, borderRadius: 10 }}>
                <TextInput style={{ paddingHorizontal: 10 }}
                    placeholder=" ₦50 - 500000"
                    placeholderTextColor={Theme.colors.gray} />
            </View>

            <Button onPress={buyAirtime} mode='contained-tonal' buttonColor={Theme.colors.primary + 40}>Pay</Button>

        </View>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 0,
        backgroundColor: "#ffffff",
    },
})