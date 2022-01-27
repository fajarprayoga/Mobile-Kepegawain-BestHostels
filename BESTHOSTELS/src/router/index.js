import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from'../pages/Login';
import Signup from '../pages/Signup';

const Stack = createStackNavigator();
const Router = () =>{
    return(
        <Stack.Navigator initialRoutName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
        )
    }
    export default Router