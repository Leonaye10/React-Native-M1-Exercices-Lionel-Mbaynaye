import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native'


class Listes extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=100&inc=name')
        .then((res) => res.json())
        .then(data => this.setState({data: data.results}))
        .catch(err => console.log(err))
    } 
  
    RenderItem = (item) => {
        return(
            <View style={styles.listes}>
                <Text>{item.name.title} {item.name.first} {item.name.last}</Text>
            </View>
        ) 
    }

    render() {
        const { data } = this.state
        return(
            <SafeAreaView style={styles.container} >
                <FlatList
                    data={data}
                    keyExtractor={item => item.name.last}
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