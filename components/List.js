import { StyleSheet, View, Text } from 'react-native';

export default function List({listElement}) {
  return (
    <View style={styles.container}>
      <Text>{listElement.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
