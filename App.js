import { FlatList, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import List from './components/List';
import { useState } from 'react';
import AddForm from './components/AddForm';

export default function App() {
  const [listOfToDo, setListOfToDo] = useState([
    {
      text: 'Bye ice cream',
    },
    {
      text: 'Do homework',
    },
    {
      text: 'Cook diner',
    },
    {
      text: 'Meet with friends',
    },
  ]);

  handlePressDeleteButton = (listElement) => {
    const copyListOfToDo = [...listOfToDo];
    delete copyListOfToDo[listElement.text];
    setListOfToDo(copyListOfToDo);
  };

  handlePressAddButton = (newListElement) => {
    setListOfToDo([
      ...listOfToDo,
      {
        text: newListElement
      }
    ]);
  }

  return (
    <View style={styles.main}>
      <Header />
      <AddForm onPress={handlePressAddButton}/>
      <View style={styles.flatList}>
        {console.log(listOfToDo.length)}
        {
          listOfToDo.length !== 0
          ?
          <FlatList
            data={listOfToDo}
            renderItem={({item}) => (
              <List
                listElement={item}
                onPress={handlePressDeleteButton}/>
            )}
          />
          : <Text>No one to do</Text>
        }
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
