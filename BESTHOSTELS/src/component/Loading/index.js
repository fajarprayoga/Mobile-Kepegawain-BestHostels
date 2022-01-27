import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';

const Loading = () => {
    return (
        <View style={styles.wrapper} >
        <ActivityIndicator size={'large'} color={colors.primary} />
          <Text>Loading</Text>
        </View>
      );
}

export default Loading;

const styles = StyleSheet.create({
    wrapper: {
        flex : 1,
        position : 'absolute',
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : '100%',
        backgroundColor : colors.LoadingBackground,
        zIndex:200
    }
})