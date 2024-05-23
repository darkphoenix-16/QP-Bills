import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { Theme } from '../Components/Theme'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import { formatMoney } from '../Components/FormatMoney'
import { AppContext } from '../Components/GlobalVariables'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../Firebase/settings'


export function Transaction() {
    const { userUID, setPreloader, setUserInfo, userInfo } = useContext(AppContext)
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setPreloader(true)
        // getDoc(doc(db, "users", userUID)).then((user) => {
        //     setUserInfo(user.data());
        //     setPreloader(false)
        // }).catch(e => {
        //     setPreloader(false)
        //     console.log(e)
        // })

        const q = collection(db, 'history');
        const filter = query(q, where('userUID', '==', userUID));
        onSnapshot(filter, (snapShot) => {
            let data = [];
            snapShot.forEach((doc) => {
                data.push(doc.data())
            })
            setHistory(data);
            setPreloader(false)
        });
    }, [])

    return (
        <View style={styles.container}>

                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 10 }}>
                    <FontAwesome6 name="clock-rotate-left" size={24} color="black" />
                    <Text style={{ textAlign: "center", fontFamily: Theme.fonts.text600, fontSize: 21, marginVertical: 19 }}>Transaction History</Text>
                </View>


                <FlatList
                    data={history}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, borderBottomWidth: 1.2, borderBottomColor: Theme.colors.bg2, paddingBottom: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <Image source={{ uri: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }} style={styles.img} />
                                    <View>
                                        <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17, textTransform: "capitalize" }}>{item.category}</Text>
                                        <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 14 }}>{new Date(item.date).toLocaleString()}</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: "flex-end", }}>
                                    <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 18 }}>{item.type == "credit" ? "+" : "-"} ₦{formatMoney(item.amount)}</Text>
                                    <Text style={{ color: Theme.colors[item.status == "successful" ? "green" : "red"], fontFamily: Theme.fonts.text500, fontSize: 14, textTransform: "capitalize" }}>{item.status}</Text>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={({ item }) => { item }}
                />

           
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 0,
        backgroundColor: "#ffffff",
    },
})