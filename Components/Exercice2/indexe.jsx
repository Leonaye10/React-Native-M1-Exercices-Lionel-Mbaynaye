import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

class Exerice2 extends React.Component {

    render() {

        return(
            <View >
                <Button
                    title="Appuyez le bouton"
                    onPress={() => Alert.alert("Alert",'Bonjour!')}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : { 
        backgroundColor: 'skyblue',
        height: 100, 
        width: 100,
    }
    
})

export default Exerice2