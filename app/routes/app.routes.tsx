import { Home } from "../screens/Home/Home";
import { Paises } from "../screens/Paises/Paises";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Calendario } from "../screens/Calendario/Calendario";
const Tab = createBottomTabNavigator();

export function AppRoutes() {
    return (
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused ? 'ios-home' : 'ios-home-sharp';
                  } else if (route.name === 'Grupos') {
                    iconName = focused ? 'ios-menu-outline' : 'ios-menu';
                  }
                  else if (route.name === 'Calendario') {
                    iconName = focused ? 'md-calendar' : 'ios-calendar-outline';
                  }
                  else if (route.name === 'Noticias') {
                    iconName = focused ? 'newspaper' : 'md-newspaper';
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
                }
              })}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Grupos" component={Paises} />
                <Tab.Screen name="Calendario" component={Calendario} />
                <Tab.Screen name="Noticias" component={Paises} />
                <Tab.Screen name="Perfil" component={Home} />
            </Tab.Navigator>
    );
}