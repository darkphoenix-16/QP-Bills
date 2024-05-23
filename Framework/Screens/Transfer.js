import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Theme } from '../Components/Theme'
import { Button } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Transfer() {
  return (
    <View style={styles.container}>

      <View style={{ padding: 15, backgroundColor: Theme.colors.bg2, marginVertical: 20, borderRadius: 10 }}>

        <View style={{  borderRadius: 10, padding: 10, marginBottom: 10,  }}>
          <Pressable style={{ borderBottomWidth: 1,flexDirection: "row", justifyContent:"space-between" }}>
            <Text style={{fontSize:12, fontFamily:Theme.fonts.text300}}>Select Bank</Text>
            <MaterialCommunityIcons name="greater-than" size={20} color="black" />
          </Pressable>
        </View>

        <View style={{ borderRadius: 10, padding: 10, marginBottom: 10 }}>
          <Text>Recipient Account</Text>
          <TextInput
          placeholder='enter 10 digit account number'
          style={{ borderBottomWidth: 1, padding: 10, }}
           />     
        </View>

        <View style={{ borderRadius: 10, padding: 10, marginBottom: 10 }}>
         <Text>Amount</Text>
          <TextInput
           placeholder='0'
           style={{ borderBottomWidth: 1, padding: 10, }}
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

    

      <Button mode='contained-tonal' buttonColor={Theme.colors.primary + 40}>Next</Button>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff"
  },
})