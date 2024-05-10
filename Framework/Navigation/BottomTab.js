import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../Screens/HomeScreen";
import { Profile } from "../Screens/Profile";
import { Theme } from "../Components/Theme";

const Tab = createBottomTabNavigator();

export function HomeScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    let size;
                    if (route.name === 'HomePage') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    else if (route.name === 'Profile') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    else if (route.name === 'PostJob') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'plus' : 'plus-box-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: Theme.colors.primary,
                tabBarInactiveTintColor: Theme.colors.gray,
                headerShown: false,
            })}
        >
            <Tab.Screen name="HomePage" component={HomePage} options={{ title: "Home" }} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}