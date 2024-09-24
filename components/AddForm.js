import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function AddForm({onPress}) {
  let todoText;

  handleChangeTextInput = (evt) => {
    todoText = evt.target.value;
  };

  return (
    <View style={styles.main}>
      <TextInput style={styles.textInput} onChange={handleChangeTextInput}/>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(todoText)}
      >
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: '10%'
  },
  textInput: {
    width: '80%',
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 40,
    height: 40,
    paddingLeft: 30,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 2,
    width: '40%'
  },
  text: {
    color: 'white',
  }
});
