import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Square extends React.Component {

    render() {

        return(
            <View style={[{backgroundColor:this.props.color},style.container]}>
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
        justifyContent: "center"
    },
    children: {
        textAlign: 'center'
    }
    
})

export default Square