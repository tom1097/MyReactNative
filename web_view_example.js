import React, { Component } from 'react'
import { View, WebView, StyleSheet }

    from 'react-native'
const WebViewExample = () => {
    return (
        <View style = {styles.container}>
            <WebView
                source = {{ uri:
                        'https://www.protocolover.com/' }}
            />
        </View>
    )
}
export default WebViewExample;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})