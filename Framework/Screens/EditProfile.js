import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'

export  function EditProfile({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
    <Button mode='text'style={{alignSelf:"flex-start"}} onPress={()=>{navigation.navigate("Profile")}} >profile</Button>
      <Text>EditProfile</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff00",
  },
})