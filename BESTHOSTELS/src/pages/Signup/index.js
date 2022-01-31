import { Button, Input, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import { Gap } from '../../component';
import { SET_LOADING } from '../../redux/action';
import API from '../../services';
import { Message, useForm } from '../../utils';
const Signup = () => {
    const dispatch = useDispatch();
     // logic
     const [signUp, setSignUp] = useForm({
        username : '',
        fullName : '',
        password : '',
        phone : '',
        address : '',
    });
    const [position, setPosition] = useState(null);
    const actionLogin = () => {
        console.log(signUp);
    }


    const actionSignup = () => {
        // console.log(signUp);
        if(signUp.username !='' && signUp.password !='' && signUp.fullName !='' && signUp.phone !=''){
            // console.log(signUp);
            dispatch(SET_LOADING(true))
            API.signUp(signUp).then((res) => {
                console.log(res);
                Message('success', res.message)
                setSignUp('reset')
            }).catch(err => {
                Message(err)
            }).finally(f => {
                dispatch(SET_LOADING(false))
            })
        }else{
            Message('warning', 'Mohon isi data dengan lengkap')
            
        }
    }

    useEffect(() => {
        dispatch(SET_LOADING(true))
        const unsubscribe = API.position().then(res => {
            console.log(res[0].name);
            setPosition(res)
        }).catch(err => {
            console.log(err);
            Message('danger',err)
        }).finally(f => {
            dispatch(SET_LOADING(false))
        })
        // return () => unsubscribe();
    },[])

    // VIew 
    return (
        <ImageBackground  style={styles.photo} source={image} resizeMode='cover'>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Text style={styles.text} category='h1'>Signup Pegawai</Text>
            </View>
            <Gap height={20} />
            <Input
                placeholder='Masukan Username Anda'
                value={signUp.username}
                onChangeText={value => setSignUp('username',value)}
            />
            <Gap height={20} />
        
            <Input
                placeholder='Masukan Nama Anda'
                value={signUp.fullName}
                onChangeText={value => setSignUp('fullName',value)}
            />
            <Gap height={20} />

            <Input
                placeholder='Masukan Password'
                value={signUp.password}
                secureTextEntry={true}
                onChangeText={value => setSignUp('password',value)}
            />
            <Gap height={20} />

            <Input
                placeholder='Masukan No Handphone'
                value={signUp.phone}
                onChangeText={value => setSignUp('phone',value)}
                keyboardType="phone-pad"
            />
            <Gap height={20} />
            <Input
                multiline={true}
                textStyle={{ minHeight: 64 }}
                placeholder='ALamat Anda'
                value={signUp.address}
                onChangeText={value => setSignUp('address', value)}
            />
            {/* <Picker
                style={{backgroundColor:'white', }}

                selectedValue={signUp.position}
                mode='dropdown'
                onValueChange={(itemValue) =>
                    setSignUp({position : itemValue})
                }>
                <Picker.Item label='Pilih Jabatan' value={null} />
                {position && position.map((item) => {
                    return (
                        <Picker.Item label={item.name} value={item.id} />
                    )
                })}
            </Picker> */}
            <Gap height={20} />
            
            <Button style={styles.button} status='primary' onPress={actionSignup}>
                Signup
            </Button>
            <Gap height={20} />
            <Button style={styles.button} status='basic' >
                Login
            </Button>
        </ImageBackground>
    );
};

export default Signup;

const image =require('../../assets/Background/background-img.png');

const styles = StyleSheet.create({
    photo: {
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#91001fa9",
        padding:20
    },
  });
