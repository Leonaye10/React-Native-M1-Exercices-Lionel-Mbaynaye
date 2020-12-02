import React from 'react'
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'

class SetTextInput extends React.Component {

    state = ({
        value: '',
        nom: ''
    })

    render() {
        const { value, nom } = {...this.state}

        return(
            <View style={styles.container} >
                <TextInput
                    style={styles.inputText} 
                    onChangeText={text => this.setState({value: text})}
                    value={value}
                    placeholder='Entrez votre nom'
                />
                <TouchableOpacity
                    onPress={() => {
                        this.setState({nom: 'Votre nom est ' + value})
                    }}
                >
                    <Text style={styles.clique} >Say hello</Text>
                </TouchableOpacity>
                <Text> {nom} </Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
        
    },
    inputText: {
        borderWidth: 1,
        borderRadius: 10 ,
        width: 300,
        height: 30,
        backgroundColor: "lightgray"
    },
    clique: {
        color: "darkblue",
        fontWeight: "bold",
        alignItems: "center",
    }
})

export default SetTextInput