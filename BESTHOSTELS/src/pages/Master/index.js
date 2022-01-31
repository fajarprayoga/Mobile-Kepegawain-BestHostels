import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Footer, Header } from '../../component';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';  
import { colors } from '../../utils/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faUserTie} from '@fortawesome/free-solid-svg-icons';
const List = (props) => {
    return (
        <TouchableOpacity style={styles.list} onPress={props.navigation}>
            <View style={{flexDirection:'row', alignItems : 'center'}} >
                <FontAwesomeIcon icon={props.icon} style={{color:'#0C5CBF'}} size={ 20 } />
                <View style={{marginLeft : 20}} >
                    <Text style={styles.textList}>{props.title}</Text>
                    <Text>{props.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const Master = ({navigation}) => {
  return (
    <View style={{flex : 1, backgroundColor : '#ffffff'}}>
        <View style={{flex : 1}}>
            <Header title = 'Master'/>
            <View style={{borderBottomWidth : 10, borderBottomColor:colors.light, width : '100%'}} />
            <ScrollView>
                <List title='Jabatan' description='Kelola Jabatan' icon = {faUserTie} navigation={()=>navigation.navigate('Position')}   />
            </ScrollView>
        </View>
      <Footer navigation={navigation}/>
    </View>
  );
};

export default Master;

const styles = StyleSheet.create({
    list : {
        padding : 15,
        backgroundColor : '#ffffff'
    },
    textList : {
        fontSize : 15,
        color : colors.dark
    }
});
