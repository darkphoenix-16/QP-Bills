import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { Theme } from '../Components/Theme'
import { FontAwesome6 } from '@expo/vector-icons'


export function Transaction({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <Button style={{ alignSelf: "flex-start" }} onPress={() => { navigation.navigate("HomeScreen") }}>Home</Button>
                    <View style={{flexDirection:"row", justifyContent:"flex-start",alignItems:"center", gap:10}}>
                    <FontAwesome6 name="money-bill-transfer" size={24} color="black" />
                    <Text style={{ textAlign: "center", fontFamily: Theme.fonts.text500, fontSize: 21, marginVertical: 19 }}>Transaction History</Text>
                    </View>
<Text style={{ fontFamily: Theme.text500, fontSize: 17,marginBottom:5 }}>New Transactions</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={{ uri: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }} style={styles.img} />
                            <View>
                                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>Netflix</Text>
                                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>1 month ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>#1200</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" }} style={styles.img} />
                            <View>
                                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>Paypal</Text>
                                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>1 month ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>$1500</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={{ uri: "https://avatar.iran.liara.run/public/7" }} style={styles.img} />
                            <View>
                                <Text style={{ fontFamily: Theme.fonts.text500, fontSize:15}}>Friend 2</Text>
                                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>2 months ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>#3000</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={{ uri: "https://avatar.iran.liara.run/public/7" }} style={styles.img} />
                            <View>
                                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>Friend 3</Text>
                                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}> 5 months ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>#20000</Text>
                        </View>
                    </View>

                    <Text style={{ fontFamily: Theme.text500, fontSize: 17, marginTop: 20, marginBottom: 7 }}>Older Transactions</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={{ uri: "https://avatar.iran.liara.run/public/7" }} style={styles.img} />
                            <View>
                                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>Friend</Text>
                                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>7 months ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>#2500</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={{ uri: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }} style={styles.img} />
                            <View>
                                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>Netflix</Text>
                                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>10 months ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>#1900</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" }} style={styles.img} />
                            <View>
                                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>Paypal</Text>
                                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>1 year ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>$15,200</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={{ uri: "https://avatar.iran.liara.run/public/7" }} style={styles.img} />
                            <View>
                                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>Friend 2</Text>
                                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>2 years ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>#3100</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={{ uri: "https://avatar.iran.liara.run/public/7" }} style={styles.img} />
                            <View>
                                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>Friend 2</Text>
                                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>2 years ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>#3500</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={{ uri: "https://avatar.iran.liara.run/public/7" }} style={styles.img} />
                            <View>
                                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>Friend 2</Text>
                                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>2 years ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 15 }}>#3500</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
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
        backgroundColor: "#d1cfcf1c",
    },
})