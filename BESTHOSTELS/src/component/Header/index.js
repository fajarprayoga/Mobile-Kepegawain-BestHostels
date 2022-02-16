import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {faLongArrowAltLeft, faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import { Text } from '@ui-kitten/components';
import { colors } from '../../utils/colors';

const TopNav = (props) => {
  return (
    <View style={styles.base}>
         <TouchableOpacity style={styles.icon} onPress={() => props.navigation.navigate(props.to)}>
            <View style={styles.header}>
                <View style={styles.header}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} style={{color:'#0C5CBF', marginRight : 2}} size={ 27 } color = {props.focus === 'Home' ? '#1DA0E0' : ''} />
                    <Text style={styles.text} >Beranda</Text>                                           
                </View>
            </View>
            {/* <View style={{flexDirection:5}} > */}

            {/* </View> */}
        </TouchableOpacity>
    </View>
  );
};


const Header = (props) => {
    return (
        <View style={styles.base}>
            <View style={{paddingHorizontal : 10, paddingTop : 10,}} >
                <FontAwesomeIcon icon={faBars} size={20} color='#ffffff' />
            </View>
            <View style={{alignItems : 'center', padding : 20 }} >
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </View>
    )
}


export { 
    TopNav,
    Header
}

// export default Header;

const styles = StyleSheet.create({
    base : {
        // padding : 20,
         backgroundColor :colors.base
    },  
    header : {
        flexDirection:'row',
        alignItems : 'center'
    },
    text : {
        fontWeight : 'bold',
        color : 'white',
        marginTop:10,
        fontSize:15
    }
});
