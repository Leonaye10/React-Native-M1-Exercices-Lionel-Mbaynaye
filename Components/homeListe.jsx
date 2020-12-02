import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

class HomeList extends React.Component {

    RenderItem = (item) => {
        return(
            <TouchableOpacity 
                key={item.id}
                onPress={() => {
                    this.props.navigation.navigate(item.composant)
                }}
                style={styles.listes}
            >
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return(
            <SafeAreaView style={styles.container} >
                <FlatList
                    data={listeExercices}
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

const listeExercices = [
    {
      id: 1,
      title: "Exercice 1",
      composant: "Exercice1"
    },
    {
      id: 2,
      title: "Exercice 2",
      composant: "Exercice2"
    },
    {
        id: 3,
        title: "Exercice 3",
        composant: "Exercice3"
    },
    {
        id: 4,
        title: "Exercice 4",
        composant: "Exercice4"
    },
    {
        id: 5,
        title: "Exercice 5",
        composant: "Exercice5"
    },
    {
        id: 6,
        title: "Exercice 6",
        composant: "Exercice6"
    },
    {
        id: 7,
        title: "Exercice 7",
        composant: "Exercice7"
    },
    {
        id: 8,
        title: "Exercice 8",
        composant: "Exercice8"
    },
    {
        id: 9,
        title: "Exercice 9",
        composant: "Exercice9"
    },
    {
        id: 10,
        title: "Exercice 10",
        composant: "Exercice10"
    },
    {
        id: 11,
        title: "Exercice 11",
        composant: "Exercice11"
    },
    {
        id: 12,
        title: "Exercice 12",
        composant: "Exercice12"
    }
  ]
  
export default HomeList;