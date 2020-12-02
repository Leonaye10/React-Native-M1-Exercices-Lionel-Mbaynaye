import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native'

import Data from './Data'

class Listes extends React.Component {
  
    RenderItem = (item) => {
        return(
            <View style={styles.listes}>
                <Text>{item.nom}</Text>
            </View>
        )
    }

    render() {
        return(
            <SafeAreaView style={styles.container} >
                <FlatList
                    data={Data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        this.RenderItem(item)
                      )}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listes: {
        padding: 30,
        borderBottomWidth: 5,
        alignItems: "center"
    }
})

export default Listes