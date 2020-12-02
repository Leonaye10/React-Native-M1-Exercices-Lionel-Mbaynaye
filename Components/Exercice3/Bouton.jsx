import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Bouton extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            message: '',
            onPressStatus: false
        }
    }

    onPress = () => {
        this.setState({
            message: this.props.text,
            onPressStatus: true
        })
    }

    render() { 
        const { message, onPressStatus } = this.state

        return(
            <View style={style.container} >
               <TouchableOpacity 
                    style={style.button}
                    onPress={this.onPress}
               >
                   <Text>Bienvenue</Text>
               </TouchableOpacity>
               <View style={onPressStatus ? style.containerTextPress : style.containerText}>
                <Text>{message}</Text>
               </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : { 
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        
    },
    button: {
        alignItems: "center",
        backgroundColor: "red",
        justifyContent: "center",
        height: 50,
        width: 100,
        top: 20

    },
    containerText: {

    },
    containerTextPress: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        marginTop: 100,
        height: 50,
        width: 100,
        fontWeight: 'bold'
    }
    
})

export default Bouton