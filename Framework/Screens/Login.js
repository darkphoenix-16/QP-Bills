import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Theme } from '../Components/Theme';
import { Button, Switch } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function Login() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View styles={styles.container}>
        <View style={{ flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" }}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          <Text style={{ fontFamily: Theme.fonts.text900, fontSize: 15 }}>QP-Bills</Text>
          {/* { isSwitchOn ? style= Theme.colors.light : style=Theme.colors.dark} */}
        </View>
        <TextInput
          placeholder='Enter Username'
          placeholderTextColor={"gray"}
          style={styles.input}
        />
        <TextInput
          placeholder='Enter Password'
          placeholderTextColor={"gray"}
          style={styles.input}
        />

        <Button mode='contained-tonal' style={{ marginVertical: 10 }} buttonColor='#e0a2f9ad'> Log In</Button>
        <Text style={{ fontSize: 12, marginBottom: 5 }}>Forgot Password</Text>
        <Text style={{ fontSize: 14, marginTop: 20, marginBottom: 5 }}>You can find us on the following platforms</Text>
        <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-around" }}>
          <FontAwesomeIcon icon={faFacebook} size={30} color='darkblue' />
          <FontAwesomeIcon icon={faWhatsapp} size={30} color='green' />
          <FontAwesomeIcon icon={faTwitter} size={30} color='blue' />
          <FontAwesomeIcon icon={faInstagram} size={30} color='purple' />
          <FontAwesomeIcon icon={faGithub} size={30} color='black' />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: StatusBar.currentHeight,
    backgroundColor: Theme.colors.gray,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    fontSize: 15,
    marginTop: 10

  }
})