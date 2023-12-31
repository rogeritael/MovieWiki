import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { SplashScreen } from "../screens/SplashScreen"

const Stack = createNativeStackNavigator();

export const Routes = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false}} name="splash" component={SplashScreen}/>
                <Stack.Screen options={{ headerShown: false}} name="home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}