import { NavigationContainer } from '@react-navigation/native';
import DrawerStack from './Stacks/DrawerStack';

import { StatusBar } from 'expo-status-bar';
import AuthStack from './Stacks/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  );
}

