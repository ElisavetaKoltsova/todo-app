import { FlatList, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import List from './components/List';
import { useState } from 'react';
import AddForm from './components/AddForm';

export default function App() {
  const [listOfToDo, setListOfToDo] = useState([
    {
      text: 'Buy ice cream',
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
    const copyListOfToDo = listOfToDo.filter((item) => item.id !== listElement.id);
    setListOfToDo([...copyListOfToDo]);
  };

  handlePressAddButton = (newListElement) => {
    setListOfToDo([
      ...listOfToDo,
      {
        text: newListElement,
        id: Math.round(Math.random() * 1000)
      }
    ]);
  }

  return (
    <View style={styles.main}>
      <Header />
      <AddForm onPress={handlePressAddButton}/>
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
