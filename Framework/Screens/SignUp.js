import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Button, Switch } from 'react-native-paper';
import { Theme } from '../Components/Theme';

export function SignUp() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" }}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>QP-Bills</Text>
          {/* { isSwitchOn ? style= Theme.colors.light : style=Theme.colors.dark} */}
        </View>
        <Text style={{ fontSize: 35, textAlign: "center", marginTop: 160 }}>SignUp</Text>
        <TextInput
          placeholder='Enter  Full Name'
          placeholderTextColor={"black"}
          style={styles.input}
        />
        <TextInput
          placeholder='Enter E-mail'
          placeholderTextColor={"black"}
          style={styles.input}
        />
        <TextInput
          placeholder='Enter Username'
          placeholderTextColor={"black"}
          style={styles.input}
        />
        <TextInput
          placeholder='Enter Password'
          placeholderTextColor={"black"}
          style={styles.input}
        />
        <Button mode='contained-tonal' style={{ marginVertical: 10 }} buttonColor='#e0a2f9ad'> Sign Up</Button>
        <Text style={{ fontSize: 12, marginBottom: 5 }}>Forgot Password</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    fontSize: 15,
    marginTop: 10

  },
})
