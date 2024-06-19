import React from "react";
import { View, Text, FlatList } from "react-native";

import StackNavigatorScreen from "./navigation/StackNavigationScreen";
import { NavigationContainer } from "@react-navigation/native";


const App = () => {
  return (
    
  <NavigationContainer>

    <StackNavigatorScreen/>
  </NavigationContainer>


  )
}

export default App