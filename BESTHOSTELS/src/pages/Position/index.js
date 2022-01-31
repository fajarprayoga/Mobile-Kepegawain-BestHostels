import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Box, Footer, Gap, Header, List } from '../../component';
import { colors } from '../../utils/colors';
import API from '../../services';
import { Message, useForm } from '../../utils';
import { useDispatch } from 'react-redux';
import { SET_LOADING } from '../../redux/action';
import { Button, Card, Input, Modal } from '@ui-kitten/components';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import { useIsFocused } from '@react-navigation/native';


const Position = ({navigation}) => {
  const isFocused = useIsFocused();
  const dispacth = useDispatch()
  const [visible, setVisible] = React.useState(false);
  const [visibleEdit, setVisibleEdit] = React.useState(false);
  const [position, setPosition] = useState(null);
  const [positionEdit, setPositionEdit] = useState({})
  const [tambahPosition, setTambahPosition] = useForm({
    name : ''
  })


  useEffect(() => {
    if(isFocused){
      let mounted = true;
      dispacth(SET_LOADING(true))
      API.position().then(res => {
        console.log('result',res);  
        setPosition(res);
      }).catch((err) => {
        Message('danger', err);
      }).finally((f) => {
        dispacth(SET_LOADING(false))
      })
      // console.log('focusedd',isFocused);
    }
    return () => mounted= false;
  }, [isFocused ])


  const actionAdd = () => {
    if(tambahPosition.name != ''){
      dispacth(SET_LOADING(true))
      API.addPosition(tambahPosition).then(res => {
        console.log(res);
        // navigation.replace('Position')
        setPosition(res.position)
        setVisible(false)
        Message('success', 'Kategori jabatan di tambahkan')
      }).catch(e => {
        console.log(e);
      }).finally((f) => {
        dispacth(SET_LOADING(false))
      })
    }else{
      Message('warning', 'Mohon nama Jabatan di isi')
    }
  }

  const actionDelete = (id) => {
    dispacth(SET_LOADING(true))
    API.deletePosition(id).then(res => {
      console.log(res);
      // navigation.replace('Position')
      setPosition(res.position)
      setVisible(false)
      Message('success', 'Kategori jabatan di dihapus')
    }).catch(e => {
      console.log(e);
    }).finally((f) => {
      dispacth(SET_LOADING(false))
    })
  }

  return (
      <>
        <View style={{borderRadius : 20}}>
          <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}>
            <Card disabled={true} style={{height : 200, width : 300, justifyContent : 'center'}}>
              <Text>Tambah Jabatan</Text>
              <Gap height={20} />
              <Input
                placeholder='Nama Jabatan'
                value={tambahPosition.name}
                onChangeText={value => setTambahPosition('name',value)}
              />
                <Gap height={20} />
              <Button onPress={actionAdd}>
                Tambah
              </Button>
            </Card>
          </Modal>
        </View>
    {/* Modal Create*/}
        <View style={{flex : 1, backgroundColor : '#ffffff'}}>
            <View style={{flex : 1}}>
                <Header title = 'Jabatan'/>
                <View style ={{padding : 20}}> 
                    <View style={{flexDirection : 'row', width : '100%', alignItems :'center'}} >
                        <TouchableOpacity style={{width : '80%'}}>
                          <Text style={{fontSize : 18}} >Search </Text>
                          <Input/>
                        </TouchableOpacity>
                        <Gap width={20} />
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faSearch} size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                  {position && position.map((item,index) => {
                    return(
                      <View key={index}>
                        <List  title={item.name} onPress={() => navigation.navigate('PositionEdit', {position : item}) } onPressDelete ={() => actionDelete(item.id)} />
                      </View>
                    )
                  })}

                </ScrollView>
            </View>
          <View>
              <View style={{alignItems:'center', marginBottom : 70}}>
                <TouchableOpacity style={styles.buttonAdd} onPress={() => setVisible(true)}>
                  <Text style={{textAlign:'center', fontSize : 30, color : '#ffffff'}}>+</Text>
                </TouchableOpacity>
              </View>
              <Footer navigation={navigation}/>
          </View>
        </View>
    </>
  )
};

export default Position;

const styles = StyleSheet.create({
  buttonAdd : {
    borderWidth : 1, width : 50, height : 50, justifyContent :'center', borderRadius : 100, borderColor : colors.base, backgroundColor : colors.base, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
