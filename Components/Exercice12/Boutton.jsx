import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class Boutton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }    
    }

    componentWillUnmount() {
        this.setState({
            count: 0
        })
    }

    render() {
        const {count} = this.state

        return (
            <View style={styles.container} >
                <View style={styles.containerText} >
                    <Text>Vous avez appuyez sur le bouton: {count} fois</Text>
                </View>
                <Button
                    title="Appuyez ici"
                    onPress={() => {
                        this.setState({count: count+1})
                    }}
                >
                </Button>                
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

export default Boutton;