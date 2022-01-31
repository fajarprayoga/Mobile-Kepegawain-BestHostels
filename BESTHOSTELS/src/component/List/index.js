import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { colors } from '../../utils/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { faEllipsisH, faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Gap } from '..';
const List = (props) => {
    return (
        <View style={styles.list} onPress={props.navigation}>
            <View style={{flexDirection:'row', alignItems : 'center', borderBottomWidth : 1, borderBottomColor : colors.base, justifyContent : 'space-between', paddingHorizontal : 20}} >
                <View style={{width : '80%'}} >
                    <Text style={styles.textList}>{props.title}</Text>
                    <Text>{props.description}</Text>
                </View>
                <TouchableOpacity onPress={props.onPress}>
                    <FontAwesomeIcon icon={faPencilAlt} style={{color:'#0C5CBF'}} size={ 20 } />
                </TouchableOpacity>
                <Gap width ={30}/>
                <TouchableOpacity  onPress ={props.onPressDelete}>
                    <FontAwesomeIcon icon={faTimesCircle} style={{color:'#0C5CBF'}} size={ 20 } />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default List;

const styles = StyleSheet.create({
    list : {
        padding : 15,
        backgroundColor : '#ffffff',
    },
    textList : {
        fontSize : 15,
        color : colors.dark
    }
});
