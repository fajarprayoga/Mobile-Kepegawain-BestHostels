import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from'../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Master from '../pages/Master';
import Position from '../pages/Position';
import PositionEdit from '../pages/Position/edit';

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
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown:false}}
            />
              <Stack.Screen
                name="Master"
                component={Master}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Position"
                component={Position}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="PositionEdit"
                component={PositionEdit}
                options={{headerShown:false}}
            />
         
        </Stack.Navigator>
        )
    }
    export default Router