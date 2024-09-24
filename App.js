import { FlatList, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import List from './components/List';
import { useState } from 'react';

export default function App() {
  const [listOfToDo, setListOfToDo] = useState([
    {
      text: 'Bye ice cream',
      id: 0
    },
    {
      text: 'Do homework',
      id: 1
    },
    {
      text: 'Cook diner',
      id: 2
    },
    {
      text: 'Meet with friends',
      id: 3
    },
  ]);

  handlePressDeleteButton = (listElement) => {
    const copyListOfToDo = [...listOfToDo];
    delete copyListOfToDo[listElement.id];
    setListOfToDo(copyListOfToDo);
  };

  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.flatList}>
        <FlatList
          data={listOfToDo}
          renderItem={({item}) => (
            <List
              listElement={item}
              onPress={handlePressDeleteButton}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%'
  },
  flatList: {
    justifyContent: 'center'
  }
});
