import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Square from './Square'

class Exerice5 extends React.Component {

    render() {

        return(
            <SafeAreaView  >
                <ScrollView >
                    <Square nombre={1}/>
                    <Square nombre={2}/>
                    <Square nombre={3}/>
                    <Square nombre={4}/>
                    <Square nombre={5}/>
                    <Square nombre={6}/>
                    <Square nombre={7}/>
                    <Square nombre={8}/>
                    <Square nombre={9}/>
                    <Square nombre={10}/>                  
                </ScrollView>
            </SafeAreaView>
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    containerScroll: {
       
    }
})

export default Exerice5