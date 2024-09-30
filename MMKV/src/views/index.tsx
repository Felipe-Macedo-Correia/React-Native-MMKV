// Index.tsx

import { TextInput, View, Button, Text} from 'react-native';
import { useState } from 'react';
import styles from '../css/indexCss';
import { useUser } from '../userContext'; 

export default function Index() {
  const { user, saveUser, pegar } = useUser(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    saveUser(name, email); 
    setName(''); 
    setEmail(''); 
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder='nome' onChangeText={setName} value={name} />
      <TextInput placeholder='email' onChangeText={setEmail} value={email} />
      <Button title='salvar' onPress={handleSave} />
      <Button title='pegar' onPress={pegar} /> {/* Botão para chamar pegar */}
      <Text>
        {user?.name} - {user?.email}
      </Text>
    </View>
  );
}
