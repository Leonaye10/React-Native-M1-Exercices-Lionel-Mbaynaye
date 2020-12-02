import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Listes from './Listes'

class Exercice8 extends React.Component {

    render() {
        return(
            <View style={styles.container} >
                <Listes/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Exercice8