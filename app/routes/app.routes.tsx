import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { GruposStackNavigator } from "./gruposStack.routes";
import { HomeStackNavigator } from "./homeStack.routes";
import { CalendarioStackNavigator } from "./calendarioStack.routes";
import { Noticias } from "../screens/Noticias/Noticias";
import { PerfilStackNavigator } from "./PerfilStack.routes";
import { useState } from "react";
import { Login } from "../screens/Login/Login";
import { View } from "react-native";
import { Cadastro } from "../screens/Cadastro/Cadastro";
const Tab = createBottomTabNavigator();

export function AppRoutes() {

  const [logado, setLogado] = useState(false);

    return (
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused ? 'ios-home' : 'ios-home-sharp';
                  } else if (route.name === 'Classificacao') {
                    iconName = focused ? 'ios-menu-outline' : 'ios-menu';
                  }
                  else if (route.name === 'Calendario') {
                    iconName = focused ? 'md-calendar' : 'ios-calendar-outline';
                  }
                  else if (route.name === 'Noticias') {
                    iconName = focused ? 'newspaper' : 'md-newspaper';
                  }
                  else if (route.name === 'Bolão') {
                    iconName = focused ? 'football-outline' : 'football';
                  }
                  else if (route.name === 'Perfil') {
                    iconName = focused ? 'md-person' : 'ios-person';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#D7CD86',
                tabBarInactiveTintColor: '#737171',
                tabBarStyle: {
                    backgroundColor: '#f3efec',
                },
                headerShown: false,
              })}>
                      <Tab.Screen name="Home" component={HomeStackNavigator} />
                      <Tab.Screen name="Classificacao" component={GruposStackNavigator} />
                      <Tab.Screen name="Calendario" component={CalendarioStackNavigator} />
                      <Tab.Screen name="Noticias" component={Noticias} />       
            </Tab.Navigator>
    );
}