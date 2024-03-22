/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timeWrapper}>
          <Text style={styles.timer}>00:00:00</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={styles.button}
            underlayColor="gray"
            onPress={() => {}}>
            <Text>Start</Text>
          </TouchableHighlight>

          <TouchableHighlight 
            style={styles.button}
            underlayColor='gray'
            onPress={() => {}}>
            <Text>Lap</Text>
          </TouchableHighlight>

        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.lap}>
          <Text style={styles.lapText}>Lap#1</Text>
          <Text style={styles.lapText}>00:00:00</Text>
        </View>
        <View style={styles.lap}>
          <Text style={styles.lapText}>Lap#2</Text>
          <Text style={styles.lapText}>00:00:00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  timeWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 10,
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 60,
  },
  lapText: {
    fontSize: 30,
    color: 'black'
  },
});

export default App;
