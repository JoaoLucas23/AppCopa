import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditaPerfil } from "../screens/EditaPerfil/EditaPerfil";
import { EditaTimes } from "../screens/EditaTimesFavoritos/EditaTimes";
import { Perfil } from "../screens/Perfil/Perfil";


export function PerfilStackNavigator() {
    const PerfilStack = createNativeStackNavigator();
    return (
        <PerfilStack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
            <PerfilStack.Screen name="Perfil" component={Perfil} />
            <PerfilStack.Screen name="EditaPerfil" component={EditaPerfil} />
            <PerfilStack.Screen name="EditaTimes" component={EditaTimes} />
        </PerfilStack.Navigator>
    );
}