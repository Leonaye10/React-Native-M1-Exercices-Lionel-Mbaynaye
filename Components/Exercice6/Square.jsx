import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Square extends React.Component {

    render() {

        return(
            <View style={style.container}>
                <Text style={style.children}>
                    Square {this.props.nombre} 
                </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : { 
        width: 100,
        height: 100,
        justifyContent: "center",
        backgroundColor: "skyblue",
        margin: 10
    },
    children: {
        textAlign: 'center'
    }
    
})

export default Square