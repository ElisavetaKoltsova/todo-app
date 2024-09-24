import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>ToDo List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
        width: '100%',
        position: 'static',
        backgroundColor: 'black',
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    }
});
