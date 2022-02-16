import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Footer, Gap, Header } from '../../component';
import { Input } from '@ui-kitten/components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOADING } from '../../redux/action';
import { Message } from '../../utils';
import API from '../../services';

const DetailSalary = ({navigation, route}) => {

    const [salary, setSalary] = useState(route.params.salary);
    const User = useSelector(state => state.USER)
    const dispacth = useDispatch();

    const actionUpdateSalary = () => {
        if(salary != null){
            dispacth(SET_LOADING(true))
            API.updateSalary({salary : salary}, salary.id).then((res) => {
                console.log(res);
            }).cath(err => {
                Message('warning', err)
            }).finally(f => {
                dispacth(SET_LOADING(false))
            })
        }else{
            Message('warning', 'Mohon isi Gaji dari pegawai')
        }
    }

  return (
        <View style={{flex : 1, backgroundColor : 'white'}} >
            <View style={{flex : 1}}>
                <Header title = 'Detail Gaji' />
                <View style={{padding : 20}} >
                    <Text>{salary.username}</Text>
                    <Gap height={10} />
                    <Input value={salary} onChangeText= {(value) => setSalary(value)}  />
                </View>
            </View>
            <Footer navigation={navigation} />
        </View>
  );
};

export default DetailSalary;

const styles = StyleSheet.create({});
