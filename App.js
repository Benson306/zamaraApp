import { StatusBar } from 'expo-status-bar';
import { AuthProvder } from './src/context/AuthContext';
import AppNav from './src/Stacks/AppNav';

export default function App() {
  return (
    <AuthProvder>
      <AppNav />
    </AuthProvder>
    
  );
}


