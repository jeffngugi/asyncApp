import {StyleSheet, Button, View, Text} from 'react-native';
import React from 'react';

const Screen3 = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text>This is third screen</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
