import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Formulario from './components/Formulario';

export default function App() {
  const offKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => offKeyboard()}>
        <View style={styles.app}>
          <View style={styles.container}>
            <Formulario />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: '2.5%',
  },
});
