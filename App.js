import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>SUPER CALCULADORA DO ALÊ</Text>
      <TextInput underlineColorAndroid="transparent" editable={false} style={styles.telinha}/>

      <View style={styles.numeros}>
        <View style={styles.botoes}>
          <Text>1</Text>
        </View>

        <View style={styles.botoes}>
          <Text>2</Text>
        </View>

        <View style={styles.botoes}>
          <Text>3</Text>
        </View>

        <View style={styles.botoes}>
          <Text>4</Text>
        </View>

        <View style={styles.botoes}>
          <Text>5</Text>
        </View>

        <View style={styles.botoes}>
          <Text>6</Text>
        </View>

        <View style={styles.botoes}>
          <Text>7</Text>
        </View>

        <View style={styles.botoes}>
          <Text>8</Text>
        </View>

        <View style={styles.botoes}>
          <Text>9</Text>
        </View>

        <View style={styles.botoes}>
          <Text>0</Text>
        </View>

        <View style={styles.operadores}>
          <Text style={styles.corOperador}>+</Text>
        </View>

        <View style={styles.operadores}>
          <Text style={styles.corOperador}>-</Text>
        </View>

        <View style={styles.operadores}>
          <Text style={styles.corOperador}>*</Text>
        </View>

        <View style={styles.operadores}>
          <Text style={styles.corOperador}>/</Text>
        </View>

      </View>

      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignContent: 'center'
  },
  titulo:{
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
  },
  telinha:{
    backgroundColor: 'white',
    height: 80,
    borderRadius:30,
    borderWidth: 2,
    fontSize:30,
    textAlign:'center'
  },
  botoes:{
    width: 80,
    height: 80,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 30,
    borderWidth: 1,
    margin: 1
  },
  numeros:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems:'center',
    marginTop:20
  },
  operadores:{
    width: 80,
    height: 80,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 30,
    borderWidth: 1,
    margin: 1
  },
  corOperador:{
    color: 'white',
  }
});
