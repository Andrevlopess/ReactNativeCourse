import React from "react";
import { Button, Text, TextComponent, TextInput, View } from "react-native";

export default class Mega extends React.Component {

    state = {
        numbers: this.props.numbers,
        sortedNumbers: []
    }

    constructor(props) {
        super(props)

        this.state = {
            numbers: props.numbers
        }
    }

    alterNumberQuantity(quantity) {
        this.setState({numbers: +quantity}) 
    }

    generateNonCoutnerNumber(nums){
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.generateNonCoutnerNumber(nums) : novo
    }
    generateNumbers = () => {

        const sortedNumbers = Array(this.state.numbers)
        .fill()
        .reduce(nums => [...nums, this.generateNonCoutnerNumber(nums)], [])
        .sort((a, b) => a - b)

        this.setState({sortedNumbers})
    }

    render(){
        return(
            <View>
                <Text>
                    Gerador de mega-sena
                   
                </Text>
                <TextInput
                keyboardType={'numeric'}
                placeholder="Numbers quantity"
                value={this.state.numbers}
                onChangeText={number => this.alterNumberQuantity(number)}/>

                <Button 
                title="Generate Numbers"
                 onPress={this.generateNumbers}/>

                <Text>
                {this.state.sortedNumbers.join(',')}
                </Text>
            </View>
        )
    }
}