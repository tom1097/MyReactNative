import React from 'react'
import {TouchableOpacity, Text, Button, View} from 'react-native'
import {Actions} from 'react-native-router-flux'

const About = () => {
    const goToHome = () => {
        Actions.home()
    }
    return (
        <TouchableOpacity style={{margin: 128}} onPress={goToHome}>
            <Text>This is ABOUT</Text>
            <Text>This is ABOUT</Text>
            <Text>This is ABOUT</Text>
            <Text>This is ABOUT</Text>
            <Text>This is ABOUT</Text>
            <Text>This is ABOUT</Text>
            <Button title={'Button nè'} type="outline" onPress={() => goToHome()}></Button>
        </TouchableOpacity>
    )
}
export default About