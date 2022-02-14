import React from 'react';
import {Text, View} from 'react-native';

const Home = ({route}) => {
  const {user} = route.params;

  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.surname}</Text>
      <Text>{user.age}</Text>
      <Text>{user.mail}</Text>
    </View>
  );
};

export default Home;
