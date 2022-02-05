import { ScrollView, StyleSheet,View } from 'react-native';
import React, { useState } from 'react';
import { Footer, Gap, Header } from '../../component';
import { Button, Card, Layout, Text } from '@ui-kitten/components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useForm, Message } from '../../utils';
import API from '../../services';
import { useDispatch } from 'react-redux';
import { SET_LOADING } from '../../redux/action';

const HeaderCard = (props) => {
    const [leave, setLeave] = useState(props.leave)
    return(
        <View {...props}>
            <Text category='h6'>{leave.user.username}</Text>
            <Text category='s1'>{leave.status}</Text>
        </View>
    )
}

const FooterCard = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Button
        onPress={props.onPressRejected}
        style={styles.footerControl}
        size='small'
        status='danger'>
        Rejected
      </Button>
      <Button
        onPress={props.onPressApproved}
        style={styles.footerControl}
        size='small'>
        Approved
      </Button>
    </View>
)


const DetailLeave = ({navigation, route}) => {
    const [leave, setLeave] = useState(route.params.leave)
    const dispacth = useDispatch()
    const [formLeave, setFormLeave]= useForm({
      status : ''
    });

    const updateLeave = (status) => {
      dispacth(SET_LOADING(true))
      API.editLeave(status, leave.id).then((res) => {
        console.log('hasil', res);
        navigation.navigate('Leave')
        Message('success', 'Status pengajuan di perbarui')
      }).catch((err) => {
        console.log(err);
        Message('warning', err)
      }).finally((f) => {
        dispacth(SET_LOADING(false))
      })
    }

    const actionApproved = (status) => {
        if(status == 'approved'){
          updateLeave({status : status});
        }else{
          Message('danger', 'status ada kesalahan')
        }
    }

    const actionRejected = (status) => {
      if(status == 'rejected'){
        updateLeave({status: status});
      }else{
        Message('danger', 'status ada kesalahan')
      }
  }

  return (
    <View style={{flex : 1, backgroundColor : '#ffffff'}} >
        <View style={{flex : 1}}>
            <Header title = 'Detail Pengajuan Cuti ' />
              <ScrollView>
                  {/* <React.Fragment > */}
                      <Gap height={30} />
                      <Card style={styles.card} 
                        header={<HeaderCard leave ={leave} />}
                        footer={
                          leave.status == 'pending' ? <FooterCard onPressApproved={() => actionApproved('approved')} onPressRejected={() => actionRejected('rejected')} /> : null 
                        }>
                          <Text>Dari Tanggal {leave.fromDate}</Text>
                          <Text>Sampai Tanggal {leave.untilDate}</Text>
                          <Gap height={20} />
                          <Text category='label' >Deskripsi Pengajuan Cuti</Text>
                          <Text>
                            {leave.description}
                          </Text>
                      </Card>
                  {/* </React.Fragment> */}
              </ScrollView>
        </View>
        <Footer navigation={navigation}/>
    </View>
  );
};

export default DetailLeave;

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      card: {
        flex: 1,
        margin: 2,
        // backgroundColor : 'red',
      },
      footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      footerControl: {
        marginHorizontal: 2,
      },
});
