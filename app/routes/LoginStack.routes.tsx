import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cadastro } from "../screens/Cadastro/Cadastro";
import { Login } from "../screens/Login/Login";


export function LoginStackNavigator() {
    const LoginStack = createNativeStackNavigator();
    return (
        <LoginStack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
            <LoginStack.Screen name="Login" component={Login} />
            <LoginStack.Screen name="Cadastro" component={Cadastro} />
        </LoginStack.Navigator>
    );
}