import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux'

const Header = (props) => {
    
    const cartData = useSelector((state) => state.reducer)
    console.log(cartData,'8333')
    const [cartItem, setCartItem] = useState(0)
    useEffect(() => {
        setCartItem(cartData.length)
    }, [cartData])
  
    return (
        <View style={{ backgroundColor: 'orange', alignItems: 'flex-end', paddingVertical: 15, paddingHorizontal: 40 }}>
          <TouchableOpacity style={{backgroundColor:'#FFAE42',height:40,width:40,borderRadius:50,justifyContent:'center',alignItems:'center'}} onPress={()=> props.navigation.navigate('InfoScreen')}>
          <Text style={{ color: '#000', fontSize: 22 }}>{cartItem}</Text>
          </TouchableOpacity>
        </View>
    )
}
export default Header