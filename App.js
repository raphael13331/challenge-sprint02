import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MotivaProvider } from './src/context/MotivaContext';
import HomeScreen from './src/screens/HomeScreen';
import DetalhesScreen from './src/screens/DetalhesScreen';
import ReportarScreen from './src/screens/ReportarScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MotivaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#1B5E20' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Motiva - Painel' }} />
          <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Detalhes do Trecho' }} />
          <Stack.Screen name="Reportar" component={ReportarScreen} options={{ title: 'Nova Ocorrência' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MotivaProvider>
  );
}