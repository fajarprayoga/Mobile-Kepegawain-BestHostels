import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const Box = (props) => {
  const { navigation } = props;
  return (
    <TouchableOpacity style={styles.box(props)} onPress={props.onPress}>
      <FontAwesomeIcon icon={props.icon} size={40} color={props.iconColor}/>
      <Text category='h6' style={styles.boxText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Box;

const styles = StyleSheet.create({
    box : (props) => [
      {
        backgroundColor : props.color,
        borderRadius : 5,
        width : 160,
        alignItems : 'center',
        justifyContent : 'center',
        height : 180,
        marginHorizontal : 3,
        borderRadius : 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
      }
    ],
   
    boxText : {
      color : '#ffffff',
    }
});
