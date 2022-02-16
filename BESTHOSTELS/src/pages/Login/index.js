import { Button, Input, Text } from '@ui-kitten/components';
import React from 'react';
import { useEffect } from 'react';
import { BackHandler, ImageBackground, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Gap } from '../../component';
import { SET_LOADING, SET_USER } from '../../redux/action';
import API from '../../services';
import { Message, useForm } from '../../utils';
import { StackActions } from '@react-navigation/native';

const Login = ({navigation}) => {
  const stateGlobal = useSelector(state => state.LOADING);
  const dispatch = useDispatch(); 
  const [login, setLogin] = useForm({
    username : '',
    password : ''
  })
  
  const actionLogin = () => {
    console.log('login',login);
      if(login.username != '' && login.password !=''){
        dispatch(SET_LOADING(true))
        API.login(login).then(res => {
            // console.log(res);
            if(res.code == 200){
              // setLogin('reset');
              dispatch(SET_USER(res.user));
              navigation.replace('MainApp');
              // console.log(navigation);
            }else{
              Message('warning',res.message);
            }
        }).catch(err => {
          Message('danger',err );
          console.log('error', err);
        }).finally(fin => {
              dispatch(SET_LOADING(false))
        })
      }else{
        Message('danger','Username dan password harus diisi' );
      }
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
          value={login.username}
          onChangeText={value => setLogin('username',value)}
        />
        <Gap height={20} />
        <Input
          placeholder='Masukan Password Anda'
          value={login.password}
          secureTextEntry={true}
          onChangeText={value => setLogin('password',value)}
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
