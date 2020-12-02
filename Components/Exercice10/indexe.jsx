import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import Bouton from './Bouton'

class Exerice10 extends React.Component {

    render() {

        return(
            <View >
                <Bouton />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex: 1, 
        backgroundColor: 'skyblue',
        height: 100, 
        width: 100,
    }
    
})

export default Exerice10