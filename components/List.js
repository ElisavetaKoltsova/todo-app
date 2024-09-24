import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function List({listElement, onPress}) {
  if (listElement) {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>{listElement.text}</Text>
        <TouchableOpacity onPress={() => onPress(listElement)}>
          <Text style={styles.button}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return '';
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 2,
    borderBlockColor: 'black',
    borderRadius: 25,
    width: '80%',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginTop: 10
  },
  text: {
    textAlign: 'justify',
    fontSize: 15,
    marginLeft: 15
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 25,
    marginRight: 15,
    width: 20,
    textAlign: 'center'
  }
});
