import { Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from '../Components/Theme'
import { Button, Card } from 'react-native-paper'
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { AppContext } from '../Components/GlobalVariables'
import { AppButton } from '../Components/AppButton'



export function Profile({ navigation }) {
    const { userUID, setPreloader, setUserInfo, userInfo } = useContext(AppContext)
    const [show, setshow] = useState(false)
    const toggleModal = () => setshow(!show)

    function SignOut() {
        toggleModal()
        setTimeout(() => {
            navigation.replace("IntroScreen")
        }, 3000);
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <View style={{ marginBottom: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 10 }}>
                        <Image source={{ uri: "https://avatar.iran.liara.run/public/7" }} style={[styles.img, { alignSelf: "center" }]} />
                        <View style={{}}>
                            <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 18, alignSelf: "center", marginBottom: 5 }}>{userInfo.firstname} {userInfo.lastname}</Text>
                            <Button mode='contained' icon={"account-edit"} textColor='black' buttonColor={Theme.colors.primary + 30} onPress={() => { navigation.navigate("Editprofile") }}>Edit Profile</Button>
                        </View>
                    </View>

                    <View style={{ backgroundColor: Theme.colors.primary + 20, marginTop: 10, padding: 10, borderRadius: 10, marginBottom: 10 }}>
                        <Text style={{ fontFamily: Theme.fonts.text400, marginVertical: 10, fontSize: 17, marginLeft: 10, borderBottomWidth: 0.3, borderColor: "gray" }}> Account Name:   {userInfo.firstname} {userInfo.lastname}</Text>
                        <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 17, marginLeft: 10 }}> Account Number:   {userInfo.accountNumber}</Text>
                    </View>

                    <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17, marginTop: 10 }}>App</Text>
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
                    <TouchableOpacity onPress={() => navigation.navigate("ChangePin")} style={[styles.view, { flexDirection: "row", justifyContent: "space-between", }]}>
                        <Text mode='text' style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Change transfer pin</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <MaterialCommunityIcons name="greater-than" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.view, { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }]}>
                        <Text mode='text' onPress={() => { navigation.navigate("ChangePassword") }} style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Change password</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <MaterialCommunityIcons name="greater-than" size={20} color="black" />
                        </View>
                    </TouchableOpacity>

                    {/* <Button mode='text' onPress={() => { toggleModal }}>Sign Out</Button> */}
                    <AppButton
                        style={{ backgroundColor: "transparent", borderColor: Theme.colors.red, borderWidth: 1, marginTop: 20 }}
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
        backgroundColor: "#ffffff",
    },
    img: {
        width: 100,
        height: 100,
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