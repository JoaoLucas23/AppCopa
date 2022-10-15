import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Grupos } from "../screens/Grupos/Grupos";
import { PaisDados } from "../screens/PaisDados/PaisDados";


export function GruposStackNavigator() {
    const GruposStack = createNativeStackNavigator();
    return (
        <GruposStack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
            <GruposStack.Screen name="Grupos" component={Grupos} />
            <GruposStack.Screen name="PaisDados" component={PaisDados} />
        </GruposStack.Navigator>
    );
}