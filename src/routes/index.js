import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { SplashScreen } from "../screens/SplashScreen"
import { Detail } from "../screens/Detail";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search } from "../screens/Search";
import { Favorites } from "../screens/Favorites";
import { theme } from "../styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { BottomBar } from "../components/BottomBar";



const options = {
    headerShown: false
}

const tabOptions = {
    tabBarActiveTintColor: theme.colors.red,
    tabBarInactiveTintColor: theme.colors.white,
    tabBarStyle: {
        backgroundColor: theme.colors.black
    }
}

function Tabs(){
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBar={props => <BottomBar {...props}/>} screenOptions={tabOptions}>
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <Ionicons name='home-outline' size={size} color={color}
                />}} name="Home"
                component={Home}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <Ionicons name='search-outline' size={size} color={color}
                />}} name="Search"
                component={Search}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <Ionicons name='heart-outline' size={size} color={color}
                />}} name="Favorites"
                component={Favorites}
            />
        </Tab.Navigator>
    )
}

export const Routes = () => {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen options={options} name="splash" component={SplashScreen}/>
                <Stack.Screen options={options} name="home" component={Tabs}/>
                <Stack.Screen options={options} name="detail" component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}