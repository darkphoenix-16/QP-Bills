import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from '../Components/Theme'
import { Button } from 'react-native-paper'

export function Airtime() {
    return (
        // <SafeAreaView>
        <View style={styles.container}>

            <View style={{ backgroundColor: Theme.colors.primary + 20, marginTop: 20, padding: 15, borderRadius: 15 }}>
                <View style={{ flexDirection: "row" }}>
                    <Pressable>
                        <Text style={{ marginLeft: 7 }}>Select Network</Text>
                    </Pressable>
                    <Text style={{ marginLeft: 50, borderLeftWidth: 1, paddingHorizontal: 10 }}>0812345678</Text>
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

            <View style={{ marginVertical: 10, backgroundColor:Theme.colors.bg2,padding:10,borderRadius:10 }}>
                <TextInput style={{paddingHorizontal: 10}}
                 placeholder =" ₦50 - 500000"
                 placeholderTextColor={Theme.colors.gray}  />
            </View>

            <Button mode='contained-tonal' buttonColor={Theme.colors.primary + 40}>Pay</Button>

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