import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Footer, Gap, Header } from '../../component';
import API from '../../services';
import { Message } from "../../utils";
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOADING } from "../../redux/action";
import { colors } from '../../utils/colors';
import { Rupiah } from '../../utils/rupiah/rupiah';
import { Button, Text } from '@ui-kitten/components';

const List = (props) => {
  const salary = props.salary;
  return (
    <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', borderBottomWidth : 1, borderBottomColor : 'grey', paddingBottom :10}}>
        <View>
          <Text style={{fontSize : 20}} >{salary.username.toLocaleUpperCase()}</Text>
          <Gap height={4}/>
          <Text style={{padding : 5, color : colors.dark, borderRadius : 5 }} >{Rupiah(salary.salary)}</Text>
        </View>
        <View>
          <Button size='small' onPress={props.onPress} >Detail</Button> 
        </View>
    </View>
  )
}

const Salary = ({navigation}) => {
  const dispatch = useDispatch();
  const [totalSalary, setTotalSalary] = useState(0)
  const [salary, setSalary] = useState(null)
  useEffect(() => {
      let mounted = true;

      if(mounted){
            dispatch(SET_LOADING(true))
            API.salary().then(res => {
                // console.log(res);
                setTotalSalary(res.totalSalary)
                setSalary(res.salary)
            }).catch((err) => {
                Message('warning', err)
            }).finally((f) => {
                dispatch(SET_LOADING(false))
            })
      }

      return () => mounted = false;
  }, [])

  return (
    <View style={{flex : 1, backgroundColor:'white'}} >
      <View style={{flex : 1}} >
        <Header title = 'List Gaji'/>
        <View style={{backgroundColor : '#709775', padding : 20,}} >
            <Text category='h5' style={{color : 'white'}}>Total gaji yang harus di bayar</Text>
            <Gap height={20} />
            <Text category='h6' style={{color : 'white'}}>{Rupiah(totalSalary)}</Text>
        </View>
        <View style={{padding : 20}}>
            {salary && salary.map((item, index) => {
              return (
                  <View key={index}>
                    <List salary = {item} onPress={() => navigation.navigate('DetailSalary', {salary : item})}/>
                    <Gap height={10} />
                  </View>
              )
            })}
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Salary;

const styles = StyleSheet.create({});
