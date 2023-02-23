import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
   return(
        <View style={style.flexV1}>
                <Quadrado/>
                <Quadrado/>
                <Quadrado/>
                <Quadrado/>
        </View>
    )
}

const style = StyleSheet.create({
    flexV1 : {
        backgroundColor:'#111',
        width:'100%',
        // justifyContent:'space-around',
         alignItems:'flex-end',
    }
})