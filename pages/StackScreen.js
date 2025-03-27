import React from 'react';
import { Button, View,} from 'react-native';

export default function StackScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Button title='navegar para stack' onPress={() => navigation.navigate("stack 2")} color="#ddd"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});