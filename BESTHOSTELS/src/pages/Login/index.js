import { Button, Input, Text } from '@ui-kitten/components';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';
import { Gap } from '../../component';
import { useForm } from '../../utils';
import API from '../../services';
import Config from 'react-native-config';
import Axios from 'axios';
const Login = ({navigation}) => {
  const dispatch = useDispatch(); 
  const [form, setForm] = useForm({
    username : '',
    password : ''
  })

  // cara merubah state global
  const showLoadingTemp = () => {
    dispatch({type:'SET_LOADING', value : true})
  }
  
  const actionLogin = () => {
    // console.log(form);
    // showMessage({
    //   message: "Simple message",
    //   type: "info",
    // });

    fetch('http://192.168.1.5:5000/product')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((error) => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      throw error;
    })

  }

  const actionSignup = () => {
    navigation.navigate('Signup')
  }

  return (
    <ImageBackground  style={styles.photo} source={image} resizeMode='cover'>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text style={styles.text} category='h1'>Selamat Datang</Text>
        </View>
        <Gap height={20} />
        <Input
          placeholder='Masukan Username Anda'
          value={form.username}
          onChangeText={value => setForm('username',value)}
        />
        <Gap height={20} />
        <Input
          placeholder='Masukan Password Anda'
          value={form.username}
          onChangeText={value => setForm('password',value)}
        />
        <Gap height={20} />
        <Button style={styles.button} status='primary' onPress={actionLogin} >
            Login
        </Button>
        <Gap height={20} />
        <Button style={styles.button} status='basic' onPress={actionSignup}>
          Signup
        </Button>
    </ImageBackground>
  );
};


const image =require('../../assets/Background/background-img.png');
// const StarIcon = (props) => (
//   <Icon {...props} name='star'/>
// );
export default Login;

const styles = StyleSheet.create({
  photo: {
      justifyContent: "center",
      flex: 1,
      backgroundColor: "#91001fa9",
      padding:20
    },
});
