import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const Formulario = () => {
  return (
    <>
      <View style={styles.form}>
        <View>
          <TextInput placeholder="Ciudad" placeholderTextColor="#666" />
        </View>
        <Text>Desde el formulario</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
});

export default Formulario;
