import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarouselNoticias } from "../components/CarouselNoticias";
import { EditaTimes } from "../screens/EditaTimesFavoritos/EditaTimes";
import { Home } from "../screens/Home/Home";
import { JogadorDados } from "../screens/JogadorDados/JogadorDados";
import { PaginaPartida } from "../screens/PaginaPartida/PaginaPartida";
import { PaisDados } from "../screens/PaisDados/PaisDados";
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
            <PerfilStack.Screen name="EditaPerfil" component={EditaTimes} />
            <PerfilStack.Screen name="EditaTimes" component={EditaTimes} />
        </PerfilStack.Navigator>
    );
}