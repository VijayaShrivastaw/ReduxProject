import React from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import Header from "./Header";
import Product from "./Product";


const phones = [
  {
    id: 1,
    date: "21-06-2017",
    name: "Moto Z2",
    price: "3999 SEK",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41ddMNyQe6L.jpg"
  },
  {
    id: 2,
    date: "01-05-2018",
    name: "Iphone X",
    price: "12999 SEK",
    imageUrl: "https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/space-gray/Apple-iPhoneX-SpaceGray-1-3x.jpg",

  },
  {
    id: 3,
    date: "12-08-2018",
    name: "Samsung s9",
    price: "11999 SEK",
    imageUrl: "https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/samsung-galaxy-s9-plus/lilac-purple/Samsung-Galaxy-S9-Plus-Lilac-Purple-2-3x.jpg",

  },
  {
    id: 4,
    date: "11-01-2017",
    name: "Nokia 6",
    price: "5999 SEK",
    imageUrl: "https://static.toiimg.com/photo/56420863/Nokia-6.jpg",

  },
  {
    id: 5,
    date: "11-08-2017",
    name: "Lenovo P2",
    price: "8999 SEK",
    imageUrl: "https://www.91-img.com/pictures/lenovo-p2-3gb-ram-mobile-phone-large-1.jpg",

  },
  {
    id: 6,
    date: "10-08-2018",
    name: "OnePlus 6T",
    price: "8999 SEK",
    imageUrl: "https://www.91-img.com/pictures/lenovo-p2-3gb-ram-mobile-phone-large-1.jpg",

  }
]

const Home = ({navigation}) => {

  return (
    <View style={{ marginBottom: 40 }}>
      <Button title="onpress" onPress={()=> navigation.navigate('UserList')}/>

      <Header navigation={navigation} />
      <FlatList
        data={phones}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>


          <Product item={item}     />


        }
        keyExtractor={item => item.id.toString()}
      />
      {/* {
        phones.map((item) => (<Product item={item}/>))
      } */}

    </View>
  )
}

export default Home