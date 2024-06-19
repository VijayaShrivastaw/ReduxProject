import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screen/Home";
import InfoScreen from "../screen/InfoScreen";
import UserList from '../screen/UserList';
const Stack = createNativeStackNavigator();
const StackNavigatorScreen = () => {
    return(
        
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen  name="InfoScreen" component={InfoScreen}/>
                <Stack.Screen  name="UserList" component={UserList}/>

            </Stack.Navigator>
        
    )
}
export default StackNavigatorScreen