import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Footer, Gap, Header } from '../../component';
import { Button, Input } from '@ui-kitten/components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOADING } from '../../redux/action';
import { Message, useForm } from '../../utils';
import API from '../../services';

const DetailSalary = ({navigation, route}) => {

    const [salary, setSalary] = useState(route.params.salary);
    const User = useSelector(state => state.USER)
    const [form, setForm] = useForm({
        salary : route.params.salary.salary
    })
    const dispacth = useDispatch();

    // dispacth(SET_LOADING(false))
    const actionUpdateSalary = () => {
        if(form.salary != null){
            dispacth(SET_LOADING(true))
            API.updateSalary(form, salary.id).then((res) => {
                Message('success', 'Gaji di perbarui')
                navigation.navigate('Salary')
            }).catch((e) => {
                console.log(e);
            }).finally((f) => {
                // console.log(f);
                dispacth(SET_LOADING(false));
            })
        }else{
            Message('warning', 'Mohon sallary disiis')
        }
    }

  return (
        <View style={{flex : 1, backgroundColor : 'white'}} >
            <View style={{flex : 1}}>
                <Header title = 'Detail Gaji' />
                <View style={{padding : 20}} >
                    <Text>{salary.username}</Text>
                    <Gap height={10} />
                    <Input value={form.salary} onChangeText= {(value) => setForm('salary', value)}  />
                    <Gap height={10} />
                    <Button onPress={actionUpdateSalary} >Submit</Button>
                </View>
            </View>
            <Footer navigation={navigation} />
        </View>
  );
};

export default DetailSalary;

const styles = StyleSheet.create({});
