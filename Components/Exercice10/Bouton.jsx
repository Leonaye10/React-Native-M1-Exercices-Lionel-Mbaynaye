import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

class Bouton extends React.Component {

    render() {

        return(
            <View style={styles.container} >
                <Button
                    title="Say Hello!"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'skyblue',
        top: 20
    }
})

export default Bouton