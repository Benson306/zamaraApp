import { NavigationContainer } from '@react-navigation/native';
import AppStack from './Stacks/AppStack';

export default function App() {
  return (
    <NavigationContainer>
           <AppStack />
    </NavigationContainer>
  );
}

