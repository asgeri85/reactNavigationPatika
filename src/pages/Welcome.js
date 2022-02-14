import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

const Welcome = ({navigation}) => {
  const goRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Full GYM</Text>
      <Button title="Üye Ol" onPress={goRegister} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});
