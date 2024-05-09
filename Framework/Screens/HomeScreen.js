import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Theme } from '../Components/Theme'
import { Card } from 'react-native-paper'
import { faAngleRight, faHeadphones, faHeadset, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Entypo, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


export function HomeScreen() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>


          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Image source={{ uri: "https://avatar.iran.liara.run/public/7" }} style={styles.img} />
              <View>
                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 20 }}>John wick</Text>
                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>Welcome to QP-Bills</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <FontAwesomeIcon icon={faHeadset} size={28} color={Theme.colors.primary} />
              <Ionicons name="notifications-outline" size={30} color={Theme.colors.primary} />
            </View>
          </View>

          <View style={styles.balance}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
              <Text>Total Balance</Text>
              <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", }}>
                <Text>Transaction History </Text>
                <FontAwesomeIcon icon={faAngleRight} color={Theme.colors.primary} size={15} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, alignItems: "center" }}>
              <Text style={{ fontSize: 20, fontFamily: Theme.fonts.text600 }}>₦7,440,300.30</Text>
              <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: Theme.colors.primary, padding: 10, paddingHorizontal: 15, borderRadius: 30 }}>
                <FontAwesomeIcon icon={faPlus} color="white" size={15} />
                <Text style={{ color: "white" }}>Add Money</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.transfer}>
            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>Transfer</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <MaterialCommunityIcons name="bank-transfer" size={36} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300 }}>To Bank</Text>
              </View>
              <View>
                <FontAwesome5 name="star-of-life" size={36} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300, textAlign: "center" }}>To QP-Bills</Text>
              </View>
              <View>
                <FontAwesome6 name="naira-sign" size={36} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300, textAlign: "center" }}>Withdraw</Text>
              </View>
            </View>
          </View>

          <View style={styles.service}>
            <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>Services</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16, }}>
              <View style={{ marginHorizontal: 5 }}>
                <MaterialIcons name="4g-mobiledata" size={36} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300 }}>Data</Text>
              </View>
              <View style={{ marginHorizontal: 5 }}>
                <MaterialCommunityIcons name="network-strength-4" size={36} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300, textAlign: "center" }}>Airtime</Text>
              </View>
              <View style={{ marginHorizontal: 5 }}>
                <Entypo name="tv" size={38} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300, textAlign: "center" }}>TV</Text>
              </View>
              <View style={{ marginHorizontal: 5 }}>
                <FontAwesome6 name="money-bills" size={36} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300, textAlign: "center" }}>Loan</Text>
              </View>
              <View style={{ marginHorizontal: 5 }}>
                <Ionicons name="school" size={38} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300, textAlign: "center" }}>Schools</Text>
              </View >
              <View style={{ marginHorizontal: 5 }}>
                <MaterialIcons name="emoji-transportation" size={38} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300, textAlign: "center" }}>Transport</Text>
              </View>
              <View style={{ marginHorizontal: 5 }}>
                <FontAwesome name="wifi" size={38} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300, textAlign: "center" }}>Internet</Text>
              </View>
              <View style={{ marginHorizontal: 5 }}>
                <Entypo name="shopping-bag" size={38} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300, textAlign: "center" }}>Shopping</Text>
              </View>
              <View style={{ marginHorizontal: 5 }}>
                <MaterialIcons name="data-thresholding" size={36} color={Theme.colors.primary} />
                <Text style={{ fontSize: 12, fontFamily: Theme.fonts.text300, textAlign: "center" }}>Waste Bill</Text>
              </View>
            </View>
          </View>

          <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17, marginTop: 10 }}>Promos and discount</Text>
          <Card style={{ marginTop: 10, backgroundColor: Theme.colors.primary + 10 }}>
            <Card.Content>
              <Text variant="bodyMedium" style={{ fontFamily: Theme.fonts.text500, fontSize: 20 }}>30% off</Text>
              <Text variant="bodyMedium" style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>Get discount for every TV and electricity purchase made on the QP-Bills app.</Text>
            </Card.Content>
          </Card>

          <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17, marginTop: 10 }}>Transactions</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop:10}}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsT9VojMYDl1a35sEilgC3W64KiQfj5cKBrEuobZD6w&s" }} style={styles.img} />
              <View>
                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>Paypal</Text>
                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>Today|10am</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
             <Text style={{ fontFamily: Theme.fonts.text400,}}>₦700.00</Text>
            </View>
          </View>
        
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop:12}}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Image source={{ uri: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }} style={styles.img} />
              <View>
                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>Netflix</Text>
                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>Yesterday|9am</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
             <Text style={{ fontFamily: Theme.fonts.text400,}}>₦1200.00</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop:10}}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Image source={{ uri:"https://avatar.iran.liara.run/public/7"}} style={styles.img} />
              <View>
                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>Friend</Text>
                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>1 month ago</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
             <Text style={{ fontFamily: Theme.fonts.text400,}}>₦2500.00</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop:10}}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Image source={{ uri:"https://avatar.iran.liara.run/public/7"}} style={styles.img} />
              <View>
                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 17 }}>Friend 2</Text>
                <Text style={{ color: Theme.colors.text2, fontFamily: Theme.fonts.text400, fontSize: 12 }}>3 month ago</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
             <Text style={{ fontFamily: Theme.fonts.text400,}}>₦3500.00</Text>
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
    padding: 15,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
  },
  balance: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Theme.colors.primary + 20,
    borderRadius: 10

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
    backgroundColor: Theme.colors.primary + 20,
    borderRadius: 10

  }
})