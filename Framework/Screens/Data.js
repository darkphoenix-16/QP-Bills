import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from '../Components/Theme'
import { Button } from 'react-native-paper'

export function Data() {
  return (
    // <SafeAreaView>
    <View style={styles.container}>

      <View style={{ backgroundColor: Theme.colors.primary + 20, marginTop: 20, padding: 20, borderRadius: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <Pressable>
            <Text style={{ marginLeft: 7 }}>Select Network</Text>
          </Pressable>
          <Text style={{ marginLeft: 50, borderLeftWidth: 1, paddingHorizontal: 10 }}>0812345678</Text>
        </View>
      </View>

      <View style={{
        padding: 15, backgroundColor: Theme.colors.bg2, marginTop: 20, borderRadius: 10,
      }}>
        <View style={{ flexDirection: "row", gap: 10, marginBottom:5 }}>

          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>100mb</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>₦100</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦2 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>24 hrs</Button>
            </View>
          </View>

          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>200mb</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>₦200</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦4 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>3 days</Button>
            </View>
          </View>

          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>1GB</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>₦350</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦7 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>1 day</Button>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 10,marginBottom:5 }}>
          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>1GB</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>₦600</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦12 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>7 days</Button>
            </View>
          </View>

          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>1.2GB</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>₦1000</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦20 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>30 days</Button>
            </View>
          </View>

          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>2.5GB</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>₦600</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+ ₦12 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>2 days</Button>
            </View>
          </View>

        </View>

        <View style={{ flexDirection: "row", gap: 10 , marginBottom:5}}>
          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>3GB</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>₦1600</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦32 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>30 days</Button>
            </View>
          </View>

          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>4GB</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>₦2000</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦40 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>30 days</Button>
            </View>
          </View>

          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>5GB</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦1500</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦30 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>7 days</Button>
            </View>
          </View>

        </View>

        <View style={{ flexDirection: "row", gap: 10,marginBottom:5 }}>
          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>10GB</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>₦3500</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦70 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>30 days</Button>
            </View>
          </View>

          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>12GB</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>₦4000</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦80 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>30 days</Button>
            </View>
          </View>

          <View style={{
            backgroundColor: Theme.colors.primary + 15, borderRadius: 10, padding: 5, marginBottom: 10
          }}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: Theme.fonts.text400, fontWeight: "bold" }}>20GB</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>₦5500</Text>
              <Text style={{ fontSize: 14, fontFamily: Theme.fonts.text300 }}>+₦110 bonus</Text>
            </View>
            <View>
              <Button mode='contained' buttonColor={Theme.colors.primary + 60}>30 days</Button>
            </View>
          </View>

        </View>

      </View>

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