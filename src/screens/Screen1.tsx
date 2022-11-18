import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Screen1 = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handlePress = () => {
    if (data.username === '' || data.password === '') {
      Alert.alert('Please Input all fields');
      console.log('Input all fields');
    } else {
      console.log(data);
      storeData(data);
    }
  };

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@userData', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.txtInput}
        onChangeText={username => setData({...data, username})}
      />
      <TextInput
        secureTextEntry
        style={styles.txtInput}
        onChangeText={password => setData({...data, password})}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.txt}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 10,
  },
  txtInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: 'gray',
  },
  txt: {
    color: 'white',
  },
});
