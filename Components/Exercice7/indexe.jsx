import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import SetTextInput from './TextInput'

class Exercice7 extends React.Component {

    render() {

        return(
            <View style={styles.container} >
                <Text style={styles.containerText} >What is your name ?</Text>
                <SetTextInput />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20
    },
    containerText: {
        fontWeight: "bold"
    }
})

export default Exercice7