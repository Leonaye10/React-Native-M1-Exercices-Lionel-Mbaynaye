import React from 'react';
import { StyleSheet, View } from 'react-native';
import Square from './Square'

class Exerice5 extends React.Component {

    render() {

        return(
            <View style={styles.container} >
                <Square nombre={1} color='#00008b' />
                <Square nombre={2} color='#006400' />
                <Square nombre={3} color='#8b0000'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between" ,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    }
})

export default Exerice5