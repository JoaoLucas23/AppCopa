import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarouselNoticias } from "../components/CarouselNoticias";
import { Home } from "../screens/Home/Home";
import { PaginaPartida } from "../screens/PaginaPartida/PaginaPartida";


export function HomeStackNavigator() {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="CarouselNoticias" component={CarouselNoticias} />
            <HomeStack.Screen name="PaginaPartida" component={PaginaPartida} />
        </HomeStack.Navigator>
    );
}