import { View, Text, Alert, ToastAndroid } from "react-native";
import { Paystack } from 'react-native-paystack-webview';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useContext } from "react";
import { AppContext } from "../Components/GlobalVariables";
import { Theme } from "../Components/Theme";
import { db } from "../Firebase/settings";
import { generateNumber } from "../Components/GenerateNumber";

export function Pay({ navigation, route }) {
  const { userUID, setPreloader, userInfo } = useContext(AppContext);
  const { amount } = route.params
  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey={"pk_test_92fcc0077ec7f42a73ff01c87db79c3698b06dec"}
        amount={amount}
        // amount={amount + ((1.8 / 100) * amount)}
        billingEmail={userInfo.email}
        activityIndicatorColor={Theme.colors.green}
        onCancel={() => navigation.goBack()}

        onSuccess={() => {
          setPreloader(true);
          updateDoc(doc(db, "users", userUID), {
            balance: Number(userInfo.balance) - amount
          })
         .then(() => {
            addDoc(collection(db, "history" ), {
              refId: "qp_" + generateNumber(20),
              naration: "",
              amount:  amount ,
              description: "Transfer to ben",
              category: "Transfer",
              userUID,
              type: "debit",
              date: Date.now(),
              status: "successful",
            })
           Alert.alert("Payment Status", "Successful",[{text:"OK", onPress:()=>{navigation.goBack()}}])
          })
         .catch((e) => {
            setPreloader(false);
            Alert.alert(
              "Payment Status",
              `Something went wrong.`,
              [{ text: "Try Again", onPress: () => {navigation.goBack()} }]
            );
          });
        }}
        autoStart={true}
      />
    </View>
  )
}