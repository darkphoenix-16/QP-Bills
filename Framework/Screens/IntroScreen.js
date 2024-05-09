import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Theme } from '../Components/Theme'
import { Button, Card, Switch } from 'react-native-paper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function HomeScreen() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" }}>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            <Text style={{ fontFamily:Theme.fonts.text500, fontSize: 15 }}>QP-Bills</Text>
          </View>
          <Card style={{ backgroundColor: "grey" }}>
            <Card.Cover source={{ uri: "https://i.pinimg.com/564x/65/c1/14/65c11480c77453a1fbc93367e7c87463.jpg" }} />
          </Card>
          {/* { isSwitchOn ? style= Theme.colors.light : style=Theme.colors.dark} */}
          <Card style={{ marginVertical: 25, backgroundColor: "#13a8f36d", }}>
            <Card.Title title="QP- Bills" subtitle="A Fin-Tech Company" />
            <Card.Content>
              <Text variant="bodyMedium" style={{fontFamily :Theme.fonts.text500}}>"Welcome to QP Bills, your trusted partner in streamlined financial transactions!
                At QP Bills, we specialize in making payments quick and easy,
                so you can focus on what truly matters.
                Whether you're managing personal finances or running a business,
                our user-friendly platform and dedicated support team are here to ensure your transactions are swift,
                secure, and hassle-free. Join us today and experience the convenience of seamless payments with QP Bills!"</Text>
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
          </Card>
          <Button mode='contained-tonal' style={{ marginTop: 15 }} buttonColor='#110df1b0'> Sign Up</Button>
          <Button mode='contained-tonal' style={{ marginVertical: 10 }} buttonColor='#110df1b0'> Log In</Button>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>Forgot Password</Text>
          <Text style={{ fontSize: 14, marginTop: 20, marginBottom: 5 }}>You can find us on the following platforms</Text>
          <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-around" }}>
            <FontAwesomeIcon icon={faFacebook} size={30} color='darkblue' />
            <FontAwesomeIcon icon={faWhatsapp} size={30} color='green' />
            <FontAwesomeIcon icon={faTwitter} size={30} color='blue' />
            <FontAwesomeIcon icon={faInstagram} size={30} color='purple' />
            <FontAwesomeIcon icon={faGithub} size={30} color='black' />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
  }
})