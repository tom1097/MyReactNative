import React, {Component} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native'

class PickerExample extends Component {
    state = {user: 'Choose a person'}
    updateUser = (user) => {
        this.setState({user: user})
    }

    render() {
        return (
            <View style={styles.container}>
                <Picker selectedValue={this.state.user} onValueChange={this.updateUser} >
                    <Picker.Item label="Choose a person" value="Choose a person"  />
                    <Picker.Item label="Steve" value="1"/>
                    <Picker.Item label="Ellen" value="2"/>
                    <Picker.Item label="Maria" value="3"/>
                </Picker>
                <Text style={styles.text}>{this.state.user}</Text>
            </View>
        )
    }
}

export default PickerExample

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    },
    container: {
        paddingTop: 50,
    }
})