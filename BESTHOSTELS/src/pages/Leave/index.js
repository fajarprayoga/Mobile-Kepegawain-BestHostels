import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Footer, Gap, Header } from '../../component';
import { Button, Text, Modal, Card, Input, Datepicker } from '@ui-kitten/components';
import { Picker } from '@react-native-picker/picker';
import { colors } from '../../utils/colors';
import API from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOADING } from '../../redux/action';
import { useForm, Message } from '../../utils';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import formatDate from '../../utils/formatDate';
import { useIsFocused } from '@react-navigation/native';
const List = (props) => {
  const leave = props.data;
  const user = props.data.user;
  var statusColor = '';
  if(leave.status == 'approved'){
    statusColor = colors.success
  }else{
    statusColor = leave.status == 'rejected' ? colors.danger : colors.warning
  }

  return (
    <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', borderBottomWidth : 1, borderBottomColor : 'grey', paddingBottom :10}}>
        <View>
          <Text style={{fontSize : 20}} >{user.username.toLocaleUpperCase()}</Text>
          <Gap height={4}/>
          <Text style={{backgroundColor : statusColor, padding : 5, color : '#ffffff', borderRadius : 5 }} >{leave.status.toLocaleUpperCase()}</Text>
        </View>
        <View>
          <Button size='small' onPress={props.onPress} >Detail</Button> 
        </View>
    </View>
  )
}



const Leave = ({navigation}) => {

  const [filter, setFilter] = useState('all');
  const dispacth = useDispatch()
  const User = useSelector( (state)  => state.USER);
  const [dataLeave, setDataLeave] = useState(null)
  const isFocused = useIsFocused();
  const [visible, setVisible] = useState(false)
  const [formLeave, setFormLeave] = useForm({
    userId: User.id,
    fromDate: new Date(),
    untilDate: new Date(),
    description: 'saassaas'
  })
  useEffect(() => {
    let mounted = true
      if(mounted){
        dispacth(SET_LOADING(true))
        
        API.leave().then((res) => {
          setDataLeave(res.leave)
          // console.log(res);
        }).catch(err => {
          console.log(err);
          Message('warning', err)
        }).finally(f => {
          dispacth(SET_LOADING(false))
        })
      }

    return () => mounted = false;
  }, [])


  const actionAdd = () => {
      if(formLeave.fromDate !='' && formLeave.untilDate != '' && formLeave.userId !='' && formLeave.description !=''){
        dispacth(SET_LOADING(true))
        let data = {
          userId : User.id,
          fromDate: formatDate(formLeave.fromDate),
          untilDate : formatDate(formLeave.untilDate),
          description : formLeave.description
        };

        API.addLeave(data).then((res) => {
          // console.log(res);
          setDataLeave(res.leave)
          Message('success', 'Cuti Sudah di ajukan')
        }).catch((err) => {
          console.log(err);
        }).finally((f) => {
          // console.log(f);
          dispacth(SET_LOADING(false))
        })
        // console.log(data);
        

      }else{
        console.log(formLeave);
        Message('warning', 'Form pengajuan tidak boleh kosong')
      }
  }

  
  return (
    <>
    <View style={{borderRadius : 20}}>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true} style={{height : 'auto', width : 300, justifyContent : 'center', paddingVertical : 10}}>
          <Text>Pengajuan Cuti</Text>
          <Gap height={20} />
          <Datepicker
            label='Tanggal Cuti'
            caption='dari tanggal berapa cuti'
            placeholder='Pick Date'
            date={formLeave.fromDate}
            onSelect={value => setFormLeave('fromDate', value)}
          />
          <Gap height={20} />
          <Datepicker
            label='Sampai'
            caption='sampai tanggal berapa'
            placeholder='Pick Date'
            date={formLeave.untilDate}
            onSelect={value => setFormLeave('untilDate', value)}
          />
          <Gap height={20} />
          <Input
            label='Alasan cuti'
            multiline={true}
            textStyle={{ minHeight: 64 }}
            placeholder='Libur tahunan'
            onChangeText={value => setFormLeave('description',value)}
          />
          <Gap height={20} />
          <Button onPress={actionAdd}>
            Tambah
          </Button>
        </Card>
      </Modal>
    </View>
    <View style={{flex : 1, backgroundColor : '#ffffff'}}>
      <View style={{flex :1}}>
          <Header title = 'Pengajuan Cuti'/>
          <View style={{padding : 20}}>
              <View style={{flexDirection : 'row', borderWidth : 1, borderColor : 'grey', marginBottom : 30}}>
              <View style={{flex : 1}}>
                <Picker
                    selectedValue={filter}
                    onValueChange={(itemValue, itemIndex) =>
                      setFilter(itemValue)
                    }>
                    <Picker.Item label="All" value="all" />
                    <Picker.Item label="Pending" value="pending" />
                    <Picker.Item label="Approved" value="approved" />
                    <Picker.Item label="Rejected" value="rejected" />
                  </Picker>
              </View>
                <Button>Filter</Button>
              </View>
              <ScrollView>
                 {dataLeave && dataLeave.map((item,index) => {
                   return(
                     <View key={index}>
                      <List  data={item} onPress={() => navigation.navigate('DetailLeave', {leave : item})} />
                      <Gap height={10} />
                     </View>
                   )
                  })}
              </ScrollView>
          </View>
      </View>
      <View>
          <View style={{alignItems:'center', marginBottom : 70,}}>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => setVisible(true)}>
              <Text style={{textAlign:'center', fontSize : 30, color : '#ffffff'}}>+</Text>
            </TouchableOpacity>
          </View>
          <Footer navigation={navigation}/>
      </View>
    </View>
    </>
  );
};

export default Leave;

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
