import { FlatList, StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import List from './components/List';
import { useState } from 'react';

export default function App() {
  const [listOfToDo, setListOfToDo] = useState([
    {
      text: 'Bye ice cream',
      id: 1
    },
    {
      text: 'Do homework',
      id: 2
    },
    {
      text: 'Cook diner',
      id: 3
    },
    {
      text: 'Meet with friends',
      id: 4
    },
  ]);

  return (
    <View style={styles.main}>
      <Header />
      <View>
        <FlatList
          data={listOfToDo}
          renderItem={({item}) => (<List listElement={item} />)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%'
  }
});
