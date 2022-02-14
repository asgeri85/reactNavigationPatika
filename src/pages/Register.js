import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const Register = ({navigation}) => {
  const [name, setName] = useState(null);
  const [surname, setSurName] = useState(null);
  const [age, setAge] = useState(null);
  const [mail, setMail] = useState(null);

  const submitForm = () => {
    user = {
      name,
      surname,
      age,
      mail,
    };

    if (!name || !surname || !age || !mail) {
      Alert.alert('Uyarı', 'Tüm alanları doldurunuz!');
      return;
    }

    navigation.navigate('HomeScreen', {user});
  };

  return (
    <View>
      <Text>Register</Text>
      <Input
        label="Üye adı"
        placeHolder="Adınızı giriniz..."
        type="default"
        changeText={setName}
      />
      <Input
        label="Üye soyadı"
        placeHolder="Soyadınızı giriniz..."
        type="default"
        changeText={setSurName}
      />
      <Input
        label="Üye yaşı"
        placeHolder="Yaşınızı giriniz..."
        type="numeric"
        changeText={setAge}
      />
      <Input
        label="E-posta"
        placeHolder="E-posta adresinizi giriniz..."
        type="email-address"
        changeText={setMail}
      />
      <Button title="Kaydı Tamamla" onPress={submitForm} />
    </View>
  );
};

export default Register;
