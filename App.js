import { StatusBar } from 'expo-status-bar';
import { AuthProvder } from './context/AuthContext';
import AppNav from './Stacks/AppNav';

export default function App() {
  return (
    <AuthProvder>
      <AppNav />
    </AuthProvder>
    
  );
}


