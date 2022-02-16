import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerView } from '@react-navigation/drawer';
import { Drawer, DrawerItem } from '@ui-kitten/components';

const DrawerCustom = (props) => {
  return (
    <SafeAreaView style={{flex:1}}>
       <View style={{flex:1}} >
        <DrawerContentScrollView {...props}>
              <View style={styles.drawerContent}>
                  <View style={styles.userInfoSection}>
                      <View style={{flexDirection:'row',marginTop: 15}}>
                          {/* <Avatar.Image 
                              source={{
                                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                              }}
                              size={50}
                          /> */}
                          <View style={{marginLeft:15, flexDirection:'column'}}>
                              {/* <Title style={styles.title}>John Doe</Title>
                              <Caption style={styles.caption}>@j_doe</Caption> */}
                              <Text>JOOE</Text>
                          </View>
                      </View>
                  </View>
              </View>
          </DrawerContentScrollView>
       <DrawerItem title='Sign Out' />
       </View>
    </SafeAreaView>
  );
};

export default DrawerCustom;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
});
