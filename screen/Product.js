import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { addToCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from 'react-redux'
const Product = (props) => {
    const item = props.item
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false)
    const handleAddtoCart = (item) => {
        dispatch(addToCart(item))
    }
    const handleRemoveFromCart = (item) => {

        dispatch(removeFromCart(item.name))
    }
    useEffect(() => {
        let result = cartItems.filter((element)=>{
            return element.name === item.name

        });
        if(result.length ){
            setIsAdded(true)
        }
        else{
            setIsAdded(false)
        }
        // if (cartItems && cartItems.length) {

        //     cartItems.forEach((element) => {
        //         if (element.name === item.name) {
        //             setIsAdded(true)
        //         }
        //     });
        // }
    }, [cartItems])
    return (
        <>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }} >
                <View style={{}}>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.id}</Text>
                </View>
                <Image source={{ uri: item.imageUrl }} style={{ height: 200, width: 200, resizeMode: 'contain' }} />

                {
                    isAdded ? <TouchableOpacity style={{ backgroundColor: 'darkblue', paddingHorizontal: 80, paddingVertical: 15, marginVertical: 20, borderRadius: 10 }} onPress={() => handleRemoveFromCart(item)}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '800' }}>Remove to Cart</Text>
                    </TouchableOpacity> :
                        <TouchableOpacity style={{ backgroundColor: 'darkblue', paddingHorizontal: 80, paddingVertical: 15, marginVertical: 20, borderRadius: 10 }} onPress={() => handleAddtoCart(item)}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '800' }}>Add to Cart</Text>
                        </TouchableOpacity>
                }



                <View style={{ borderBottomWidth: 0.4, width: '80%', borderColor: '#964B00' }}></View>



            </View>
        </>
    )
}
export default Product