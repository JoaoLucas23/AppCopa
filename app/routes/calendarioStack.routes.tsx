import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Calendario } from "../screens/Calendario/Calendario";
import { PaginaPartida } from "../screens/PaginaPartida/PaginaPartida";


export function CalendarioStackNavigator() {
    const CalendarioStack = createNativeStackNavigator();
    return (
        <CalendarioStack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
            <CalendarioStack.Screen name="Calendario" component={Calendario} />
            <CalendarioStack.Screen name="PaginaPartida" component={PaginaPartida} />
        </CalendarioStack.Navigator>
    );
}