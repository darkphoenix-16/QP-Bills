import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { React, useContext, useState } from 'react'
import { Theme } from '../Components/Theme';
import { Button, Switch } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { NavigationContainerRefContext } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from "yup"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/settings';
import { AppContext } from '../Components/GlobalVariables';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const validation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required(),
  confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], "password does not match"),
})

export function Login({ navigation }) {
  const { setUserUID } = useContext(AppContext)
  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Button mode='text' style={{ alignSelf: "flex-start" }} onPress={() => { navigation.navigate("IntroScreen") }} >intro</Button>
        <Text style={{ fontFamily: Theme.fonts.text400, fontSize: 15 }}>QP-Bills</Text>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={(value) => {
            signInWithEmailAndPassword(auth, value.email, value.password)
              .then((data) => {
                // console.log(data.user.uid);
                // console.log(user);
                setUserUID(data.user.uid)
                navigation.replace("HomeScreen")
              })

              .catch(e => console.log(e))
          }}
          validationSchema={validation}
        >
          {(prop) => {
            return (
              <View style={{ flex: 1, justifyContent: "center", }}>
                <Text style={{ fontSize: 35, textAlign: "center", fontFamily: Theme.fonts.text600 }}>LogIn</Text>
                <View style={styles.label}>
                  <Text style={{ fontFamily: Theme.fonts.text500 }}>Email :</Text>
                  <TextInput
                    // placeholder='Enter  Full Name'
                    placeholderTextColor={"gray"}
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={prop.handleChange("email")}
                    onBlur={prop.handleBlur("email")}
                    value={prop.values.email}
                  />
                  <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.email && prop.errors.email}</Text>
                </View>
                <View>
                  <Text style={{ fontFamily: Theme.fonts.text500 }}>Password :</Text>

                      
                      <TextInput
                        // placeholder='Enter E-mail'
                        placeholderTextColor={"gray"}
                        style={styles.input}
                        autoCapitalize="none"
                        secureTextEntry={!showPassword}
                        value={prop.values.password}
                        onChangeText={prop.handleChange("password")}
                        autoComplete="off"
                        autoCorrect={false}
                        keyboardType='default'
                        onBlur={prop.handleBlur("password")}
                      
                      />    
                      <MaterialCommunityIcons
                        name={showPassword ? 'eye' : 'eye-off'}
                        size={24}
                        style={{alignSelf:"flex-end"}}
                        color="black"
                        onPress={togglePassword}
                      />
                  

                  <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.password && prop.errors.password}</Text>
                </View>

                <View style={styles.label}>
                  <Text style={{ fontFamily: Theme.fonts.text500 }}>Confirm Password</Text>
                  <TextInput
                    placeholderTextColor={"gray"}
                    style={styles.input}
                    secureTextEntry={!showPassword}
                    value={prop.values.confirmPassword}
                    onChangeText={prop.handleChange('confirmPassword')}
                    autoCapitalize='none'
                    onBlur={prop.handleBlur("confirmPassword")}
                  />
                  <MaterialCommunityIcons
                        name={showPassword ? 'eye' : 'eye-off'}
                        size={24}
                        style={{alignSelf:"flex-end"}}
                        color="black"
                        onPress={toggleConPassword}
                      />
                  <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.confirmPassword && prop.errors.confirmPassword}

                  </Text>
                </View>
                <Button mode='text' style={{ fontSize: 12, alignSelf: "flex-end" }} onPress={() => { navigation.navigate("ForgotPassword") }}>Forgot Password?</Button>

                <Button mode='contained-tonal' style={{ marginVertical: 15 }} onPress={prop.handleSubmit} buttonColor={Theme.colors.primary + 30} > Log In</Button>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 15, marginVertical: 30, fontFamily: Theme.fonts.text300 }}>Im a new user</Text>
                  <Button mode='text' onPress={() => { navigation.navigate("SignUp") }}>Sign Up</Button>
                </View>

              </View>
            )
          }}
        </Formik>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff00",
  },
  input: {
    borderColor: Theme.colors.primary,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 30,
    fontSize: 15,
    marginTop: 10

  },
  label: {
    
  }
})