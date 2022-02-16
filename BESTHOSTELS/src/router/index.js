import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from'../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Master from '../pages/Master';
import Position from '../pages/Position';
import PositionEdit from '../pages/Position/edit';
import Leave from '../pages/Leave';
import DetailLeave from '../pages/Leave/detail';
import Salary from '../pages/Salary';
import DetailSalary from '../pages/Salary/detail';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import DrawerCustom from '../component/Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
    return (
        <Drawer.Navigator  drawerContent={props => <DrawerCustom {...props} />}  screenOptions={{
            headerShown: false
          }}>
            <Drawer.Screen
                name="Home"
                component={Home}
                // options={{headerShown:false}}
            />
            <Drawer.Screen
                name="Position"
                component={Position}
                options={{headerShown:false}}
            />
            <Drawer.Screen
                name="Leave"
                component={Leave}
                options={{headerShown:false}}
            />
            <Drawer.Screen
                name="Salary"
                component={Salary}
                options={{headerShown:false}}
            />
        </Drawer.Navigator>
    );
  };
  

const Router = () =>{
    return(
            <>
                <Stack.Navigator initialRouteName="Login"  screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="MainApp"
                    component={MainApp}
                    
                />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />
                    {/* <Stack.Screen
                        name="Home"
                        component={Home}
                    /> */}
                    <Stack.Screen
                        name="Position"
                        component={Position}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={Signup}
                    />
                    <Stack.Screen
                        name="Master"
                        component={Master}
                    />

                    <Stack.Screen
                        name="PositionEdit"
                        component={PositionEdit}
                    />
                    <Stack.Screen
                        name="Leave"
                        component={Leave}
                    />
                    <Stack.Screen
                        name="DetailLeave"
                        component={DetailLeave}
                    />
                    <Stack.Screen
                        name="Salary"
                        component={Salary}
                    />
                    <Stack.Screen
                        name="DetailSalary"
                        component={DetailSalary}
                    />
                </Stack.Navigator>
            </>
        )
    }
    export default Router