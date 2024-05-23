import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme } from './Theme'


export function Preloader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color={Theme.colors.primary} size={"large"}/>
      {/* <Text>Loading....</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  loader:{
    flex: 1,
    height:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    position:"absolute",
    top:0,
    zIndex:10,
    backgroundColor:"#ffffffbf ",
    width:"100%"
  }
  

})