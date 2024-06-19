import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,removeFromCart } from "../redux/action";


const InfoScreen = () => {
    const cartItem = useSelector((state) => state.reducer)
    const [item, setItem] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        setItem(cartItem)
    }, [cartItem])
    const handleAddtoCart = (item) => {
        dispatch(addToCart(item))
    }
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
            <FlatList
                data={item}
                renderItem={({ item }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }} >
                        <View style={{}}>
                            <Text>{item.name}</Text>
                            <Text>{item.price}</Text>
                            <Text>{item.id}</Text>
                        </View>
                        <Image source={{ uri: item.imageUrl }} style={{ height: 200, width: 200, resizeMode: 'contain' }} />
                        <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                            <View>
                                <Button title="Add" onPress={()=> handleAddtoCart(item)} />
                            </View>
                            <Text>0</Text>
                            <View>
                                <Button title="Remove" />
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.4, width: '80%', borderColor: '#964B00' }}></View>


                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />

            {/* <Text style={{color:'#000'}}>{data[0].name}</Text> */}
        </View>
    )
}

export default InfoScreen