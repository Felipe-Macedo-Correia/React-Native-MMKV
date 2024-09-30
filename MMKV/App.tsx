
import { View } from 'react-native';
import Index from './src/views/index'
import { UserProvider } from './src/userContext';

export default function App() {
  return (
    <View>
      <UserProvider>
        <Index/>
      </UserProvider>
    </View>
  );
}
