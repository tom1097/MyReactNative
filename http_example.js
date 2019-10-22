import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

class HttpExample extends Component {
    state = {
        data: ''
    }
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View>
                <Text>{this.state.data.title}</Text>
            </View>
        )
    }
}

export default HttpExample

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    }
});