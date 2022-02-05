import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
import React, {useEffect} from 'react';
import { Box, Footer, Header } from '../../component';
import { Layout, Text } from '@ui-kitten/components';
import {faUserTie, faCandyCane, faFileAlt, faUserCog, faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { colors } from '../../utils/colors';
const Home = ({navigation}) => {

  const User = useSelector(state => state.USER);

  return (
    <View style={{flex:1, backgroundColor : '#ffffff'}} >
        <View style={styles.header}>
            <View style={{flex : 3, justifyContent :'center',paddingHorizontal : 30}} >
                {/* <View>
                  <Text category='h3' style={{color : '#fdfcdc'}}>{User.username.toUpperCase()}</Text>
                  <Text  style={{color : '#fdfcdc'}}>{User.phone.toLocaleUpperCase()}</Text>
                </View> */}
            </View>
            <View style={{flex : 3, justifyContent :'center', paddingRight : 10}} >
                {/* <View>
                  <Text category='h5' style={{color : '#fdfcdc'}}>Bali BestHostels</Text>
                  <Text  style={{color : '#fdfcdc'}}>Selamat Datang</Text>
                </View> */}
            </View>
        </View>
        <View style={styles.contentGaji}>
            <View style={styles.gaji}>
              <Text>HALOO</Text>
            </View>
        </View>
        <View style={styles.baseMenu} >
            <Text category='h3'>Menu</Text>
            <ScrollView >
              <View style={styles.menu} >
                  <View style={styles.subMenu}>
                    <Box title='Jabatan'  color='#00afb9' icon ={faUserTie} iconColor='#fdfcdc' onPress= {() => navigation.navigate('Position')} />
                  </View>
                  <View style={styles.subMenu}>
                    <Box title='Cuti'  color='#0081a7' icon={faCandyCane} iconColor='#fdfcdc'onPress= {() => navigation.navigate('Leave')} />
                  </View>
                  <View style={styles.subMenu}>
                    <Box title='Absen'  color='#656d4a' icon={faFileAlt} iconColor='#fdfcdc'/>
                  </View>
                  <View style={styles.subMenu}>
                    <Box title='Pegawai'  color='#ff9f1c' icon={faUserCog} iconColor='#fdfcdc'/>
                  </View>
                  <View style={styles.subMenu}>
                    <Box title='Gaji'  color='#57cc99' icon={faFileInvoiceDollar} iconColor='#fdfcdc' onPress= {() => navigation.navigate('Salary')}/>
                  </View>
              </View>
            </ScrollView>

        </View>
    </View>
  ); 
};


const image =require('../../assets/Header.png');

export default Home;

const styles = StyleSheet.create({
  header :{
    height : '30%',
    backgroundColor : colors.base,
    borderBottomLeftRadius : 60,
    borderBottomRightRadius : 20,
    flexDirection : 'row'
  },
  baseMenu : {
    paddingHorizontal : 20,
    flex : 1,
    justifyContent :'center',
    marginTop : 40
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap : 'wrap',
  },
  menu : {
    flex : 1,
    flexDirection : 'row',
    flexWrap : 'wrap',
    marginTop : 20,
  },
  subMenu : {
    alignItems : 'center',
    marginHorizontal : 3,
    marginVertical : 6
  },
  contentGaji :{ position : 'absolute', top : 210, width : '100%', paddingHorizontal : 20, alignItems : 'center'},
  gaji : {
    width : '98%', 
    backgroundColor : '#ffffff', 
    height : 60, 
    borderRadius : 5, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    
    elevation: 14,  justifyContent : 'center',
  }
  
});
