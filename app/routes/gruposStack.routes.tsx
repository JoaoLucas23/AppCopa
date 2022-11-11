import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Classificacao } from "../screens/Classificacao/Classificacao";
import { PaisDados } from "../screens/PaisDados/PaisDados";


export function GruposStackNavigator() {
    const GruposStack = createNativeStackNavigator();
    return (
        <GruposStack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
            <GruposStack.Screen name="Grupos" component={Classificacao} />
            <GruposStack.Screen name="PaisDados" component={PaisDados} />
        </GruposStack.Navigator>
    );
}