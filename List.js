import React, {Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

class List extends Component {
    state = {
        names: [
            {
                id: 0,
                name: 'Ben',
                age: 10,
            },
            {
                id: 1,
                name: 'Susan',
                age: 12,
            },
            {
                id: 2,
                name: 'Robert',
                age: 12,
            },
            {
                id: 3,
                name: 'Mary',
            }
        ]
    };
    alertItemName = (item) => {
        if (typeof item.age == 'undefined') {
            item.age = 'nul';
        }
        alert(item.name + ' - ' + item.age)
    };

    render() {
        return (
            <View>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.container}
                            onPress={() => this.alertItemName(item)}>
                            <Text style={styles.text}>
                                {item.name} {item.age ? ('got age: ' + item.age) : ''}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

export default List

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