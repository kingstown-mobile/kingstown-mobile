import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, SimpleLineIcons, Octicons, Ionicons } from '@expo/vector-icons';

import ConfiguracoesScreen from '../configuracoes'
import PerfilScreen from '../perfil';
import TurmasScreen from '../turmas'

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator 
        screenOptions={{ headerShown: false, tabBarStyle: {backgroundColor: '#FFD105'}, 
        tabBarActiveTintColor: 'black'
    }} 
        >
            <Tab.Screen name="Configurações" component={ConfiguracoesScreen} options={{ tabBarIcon: () => <Ionicons name="settings-outline" size={24} color="black" /> }} />
            <Tab.Screen name="Minhas Turmas" component={TurmasScreen} options={{ tabBarIcon: () => <AntDesign name="book" size={24} color="black" /> }} />
            <Tab.Screen name="Perfil" component={PerfilScreen} options={{ tabBarIcon: () => <SimpleLineIcons name="user" size={24} color="black" /> }} />
        </Tab.Navigator>
    )
}