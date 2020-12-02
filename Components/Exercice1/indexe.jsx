import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Exerice1 extends React.Component {

    render() {

        return(
            <View style={style.container} >
                <Text style={style.children}>Hello World!</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : { 
        backgroundColor: 'skyblue',
        height: 100, 
        width: 100
    },
    children: {
        textAlign: 'center',
        top: 40
    }
    
})

export default Exerice1