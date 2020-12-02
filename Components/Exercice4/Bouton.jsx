import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Bouton extends React.Component {

    state = {
        count: 0
    }

    render() {
        const count = this.state.count

        return (
            <View style={styles.container} >
                <View style={styles.containerText} >
                    <Text>Vous avez appuyez sur le bouton: {count} fois</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({count: count+1})
                    }}
                >
                    <Text style={styles.clique} >Appuyez ici</Text>
                </TouchableOpacity>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        top: 20
    },
    clique: {
        color: "#0000ff",
        fontWeight: "bold",
        alignItems: "center",
        top: 20
    },
    containerText: {
        alignItems: "center"
    }
})

export default Bouton;