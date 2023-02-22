import React from 'react'
import {View, FlatList, Text} from 'react-native'

const products = [
    {id: 1, name: 'product1', price: 999},
    {id: 2, name: 'product2', price: 111},
    {id: 3, name: 'product3', price: 2222},
    {id: 4, name: 'product4', price: 933},
    {id: 5, name: 'product5', price: 889}
]

export default props => {
   return(
        <View>
            <FlatList 
            data={products} 
            keyExtractor={i =>  `${i.id}`}
            renderItem={({item}) => {
                return <Text>{item.id} - {item.name}  </Text>
            }}/>
        </View>

    )
}