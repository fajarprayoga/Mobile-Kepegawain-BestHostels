import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, } from 'react';
import { Footer, Gap, Header } from '../../component';
import { Button, Input } from '@ui-kitten/components';
import { Message, useForm } from '../../utils';
import API from '../../services';
import { useDispatch } from 'react-redux';
import { SET_LOADING } from '../../redux/action';

const PositionEdit = ({navigation, route}) => {
  const [position, setPosition] = useForm(route.params.position)
  const dispacth = useDispatch()
  const actionUpdate = () => {
    // console.log(position);
    if(position.name != ''){
      API.updatePosition(position, position.id).then((res) => {
        dispacth(SET_LOADING(true))
        // setPosition(res)
        Message('success', 'Update Berhasil')
      }).catch((e) => {
        // console.log(e);
        Message('danger', 404)
      }).finally(f => {
        dispacth(SET_LOADING(false))
      })
    }else{
      Message('warning', 'Mohon isi jabatan')
    }
  }


  return (
    <View style={{flex : 1, backgroundColor : '#ffffff'}}>
        <View style={{flex : 1}}>
          <Header title = 'Edit Jabatan' />
          <View style={{alignItems : 'center', justifyContent :"center", padding : 20, flex : 1}}>
            <Text>Masukan Nama jabatan</Text>
            <Gap height = {20} />
            <Input value={position.name} onChangeText={(value) => setPosition('name',value)} />
            <Gap height = {20} />
            <Button onPress={actionUpdate} >Edit Jabatan</Button>
          </View>
        </View>
        <Footer/>
    </View>
  );
};

export default PositionEdit;

const styles = StyleSheet.create({});
