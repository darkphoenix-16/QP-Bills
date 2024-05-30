import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Theme } from '../Components/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight, faArrowRight, faHeadset, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Entypo, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Carousel from 'react-native-reanimated-carousel';
import { AppContext } from '../Components/GlobalVariables'
import { addDoc, collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../Firebase/settings'
import { Button } from 'react-native-paper'
import { formatMoney } from '../Components/FormatMoney'
import { generateNumber } from '../Components/GenerateNumber'

const carouselLinks = [
    "https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

export function HomePage({ navigation }) {
    const { userUID, setPreloader, setUserInfo, userInfo } = useContext(AppContext)
    const screenWidth = Dimensions.get("screen").width
    // console.log(userUID);

    function createHistory() {
        setPreloader(true)
        addDoc(collection(db, "history"), {
            refId: "qp_" + generateNumber(20),
            naration: "",
            amount: "5000",
            description: "Card deposit",
            category: "Fund Account ",
            userUID,
            type: "credit",
            date: Date.now(),
            status: "successful",
        }).then((data) => {
            setPreloader(false)
            Alert.alert("Successful")
        }).catch(e => {
            setPreloader(false)
            console.log(e)
        })
    }

    useEffect(() => {
        setPreloader(true)
        // console.log(userUID);
        // getDoc(doc(db, "users", userUID)).then((user) => {
        //     setUserInfo(user.data());
        //     setPreloader(false)
        // }).catch(e => {
        //     setPreloader(false)
        //     console.log(e)
        // })
        onSnapshot(doc(db, "users", userUID), (snapShot) => {
            setPreloader(false)
            snapShot.exists() ?  setUserInfo(snapShot.data()) : null

        })
    }, [])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                 

                    <View style={styles.topBar}>
                        <View style={{ flexDirection: "row", gap: 10, alignItems: 'center', }}>
                            <Image source={{ uri: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1715176660~exp=1715180260~hmac=bd7d9a840a881ad650f607ab814071d6bc4ef4994aa53f30d148fef851250390&w=1380" }} style={styles.img} />
                            <View>
                                <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 18 }}>{userInfo.firstname} {userInfo.lastname}</Text>
                                <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 12, color: Theme.colors.text2 }}>Welcome to QP Bills</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", gap: 10, alignItems: 'center', }}>
                            <FontAwesomeIcon icon={faHeadset} color={Theme.colors.primary} size={28} />
                            <Ionicons name="notifications-outline" size={30} color={Theme.colors.primary} />
                        </View>

                    </View>

                    <View style={styles.balance}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                            <Text>Total Balance</Text>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 3 }} onPress={() => navigation.navigate("Transaction")}>
                                <Text>Transaction History</Text>

                                <FontAwesomeIcon icon={faAngleRight} color={Theme.colors.text2} size={15} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, alignItems: "center" }}>
                            <Text style={{ fontSize: 20, fontFamily: Theme.fonts.text600 }}>₦{formatMoney(userInfo.balance)}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("FundAccount", { docID: "GYV98734Q98W77982402G39UW92" })} style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: Theme.colors.primary, padding: 10, paddingHorizontal: 15, borderRadius: 30 }}>
                                <FontAwesomeIcon icon={faPlus} color="white" size={15} />
                                <Text style={{ color: "white", fontFamily: Theme.fonts.text600 }}>Add Money</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={styles.transfer}>
                        <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>Transfer Money</Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 16, marginTop: 20 }}>
                            <View style={{ alignItems: "center" }}>
                                <MaterialCommunityIcons name="bank-transfer" size={35} color={Theme.colors.primary} onPress={() => navigation.navigate("Transfer")} />
                                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text400, textAlign: "center", marginTop: 5 }}>To Bank</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <FontAwesome6 name="contact-book" size={30} color={Theme.colors.primary} />
                                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text400, textAlign: "center", marginTop: 5 }}>To QP-Bills</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <FontAwesome6 name="naira-sign" size={30} color={Theme.colors.primary} />
                                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text400, textAlign: "center", marginTop: 5 }}>Withdraw</Text>
                            </View>
                        </View >
                    </View>

                    <View style={styles.service}>
                        <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>Services</Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16, marginTop: 20 }}>
                            <View style={{ alignItems: "center" }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Airtime")}>
                                    <FontAwesome name="phone-square" size={30} color={Theme.colors.primary} />
                                    <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text400, textAlign: "center", marginTop: 5 }}>Airtime</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Data")}>
                                    <MaterialCommunityIcons name="wifi-arrow-up-down" size={30} color={Theme.colors.primary} />
                                    <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text400, textAlign: "center", marginTop: 5 }} >Data Bundle</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Entypo name="tv" size={30} color={Theme.colors.primary} />
                                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text400, textAlign: "center", marginTop: 5 }}>TV Plan</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Ionicons name="school" size={30} color={Theme.colors.primary} />
                                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text400, textAlign: "center", marginTop: 5 }}>Schools</Text>
                            </View >
                        </View >

                        <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16, marginTop: 20 }}>
                            <View style={{ alignItems: "center" }}>
                                <MaterialIcons name="emoji-transportation" size={30} color={Theme.colors.primary} />
                                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text400, textAlign: "center", marginTop: 5 }}>Transport</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Entypo name="shopping-bag" size={30} color={Theme.colors.primary} />
                                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text400, textAlign: "center", marginTop: 5 }}>Shopping</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <MaterialIcons name="data-thresholding" size={30} color={Theme.colors.primary} />
                                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text400, textAlign: "center", marginTop: 5 }}>Waste Bill</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <FontAwesome6 name="sack-dollar" size={30} color={Theme.colors.primary} />
                                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text400, textAlign: "center", marginTop: 5 }}>Refer </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginVertical: 10, }}>
                        <Carousel
                            loop
                            width={screenWidth - 30}
                            height={200}
                            autoPlay={true}
                            data={carouselLinks}
                            style={{ borderRadius: 10 }}
                            scrollAnimationDuration={2000}
                            renderItem={({ index }) => (
                                <Image style={{ width: '100%', height: 200, borderRadius: 10, }} source={{ uri: carouselLinks[index] }} />
                            )}
                        />
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    balance: {
        marginTop: 20,
        padding: 10,
        backgroundColor: Theme.colors.primary + 30,
        borderRadius: 10,
    },
    transfer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: Theme.colors.primary + 10,
        borderRadius: 10
    },
    service: {
        marginTop: 20,
        padding: 10,
        backgroundColor: Theme.colors.primary + 10,
        borderRadius: 10
    }
})
