import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeList from './homeListe'
import Exercice1 from './Exercice1/indexe'
import Exercice2 from './Exercice2/indexe'
import Exercice3 from './Exercice3/indexe'
import Exercice4 from './Exercice4/indexe'
import Exercice5 from './Exercice5/indexe'
import Exercice6 from './Exercice6/indexe'
import Exercice7 from './Exercice7/indexe'
import Exercice8 from './Exercice8/indexe'
import Exercice9 from './Exercice9/indexe'
import Exercice10 from './Exercice10/indexe'
import Exercice11 from './Exercice11/indexe'
import Exercice12 from './Exercice12/indexe'

const Stack = createStackNavigator();

class Indexe extends React.Component {

 render() {

    return(
        <Stack.Navigator>
            <Stack.Screen component={HomeList} name="Home" />
            <Stack.Screen component={Exercice1} name="Exercice1" />
            <Stack.Screen component={Exercice2} name="Exercice2" />
            <Stack.Screen component={Exercice3} name="Exercice3" />
            <Stack.Screen component={Exercice4} name="Exercice4" />
            <Stack.Screen component={Exercice5} name="Exercice5" />
            <Stack.Screen component={Exercice6} name="Exercice6" />
            <Stack.Screen component={Exercice7} name="Exercice7" />
            <Stack.Screen component={Exercice8} name="Exercice8" />
            <Stack.Screen component={Exercice9} name="Exercice9" />
            <Stack.Screen component={Exercice10} name="Exercice10" />
            <Stack.Screen component={Exercice11} name="Exercice11" />
            <Stack.Screen component={Exercice12} name="Exercice12" />
        </Stack.Navigator>
    )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
});

export default Indexe
