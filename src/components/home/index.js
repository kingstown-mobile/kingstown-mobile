import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, SimpleLineIcons, Octicons, Ionicons } from '@expo/vector-icons';

import CursoScreen from '../curso';
import SolicitacoesScreen from '../solicitacoes';
import LinksScreen from '../links';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Configurações" component={CursoScreen} options={{ tabBarIcon: () => <Ionicons name="settings-outline" size={24} color="black" /> }} />
            <Tab.Screen name="Home" component={SolicitacoesScreen} options={{ tabBarIcon: () => <SimpleLineIcons name="home" size={24} color="black" /> }} />
            <Tab.Screen name="Perfil" component={LinksScreen} options={{ tabBarIcon: () => <SimpleLineIcons name="user" size={24} color="black" /> }} />
        </Tab.Navigator>
    )
}