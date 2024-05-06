import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme } from '../Components/Theme'

export function HomeScreen() {
    return (
        <View >
            <Text style={{ color: Theme.colors.primary, fontFamily: Theme.fonts.text500 }}>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})