import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Formulario from './components/Formulario';

export default function App() {
  return (
    <>
      <View style={styles.app}>
        <View style={styles.container}>
          <Formulario />
        </View>
      </View>
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
