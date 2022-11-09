import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from "./src/Auth/AuthContext";
import AppNav from "./src/AppNav";
import AuthStack from './src/Auth/AuthStack';

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

export default App;


