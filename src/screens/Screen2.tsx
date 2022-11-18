import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Screen2 = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen3')}
      />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 30,
    justifyContent: 'center',
  },
});
