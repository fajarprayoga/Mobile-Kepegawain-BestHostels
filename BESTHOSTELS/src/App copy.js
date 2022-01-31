import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider, useSelector } from 'react-redux';
import Loading from './component/Loading';
import store from './redux/store';
import Router from './router';

const MainApp = () => {
  const stateLOADING = useSelector(state => state.LOADING);
  // mengambil sate global
  console.log('state loading',  stateLOADING);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Router/>
        </NavigationContainer>
      </ApplicationProvider>
      <FlashMessage position="top" /> 
      {stateLOADING && <Loading/>}
    </>
  );
};

const App =() => {
  return (
    <Provider store={store} >
      <MainApp/>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({});
