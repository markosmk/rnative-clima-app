import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = () => {
  const [animaBtn] = useState(new Animated.Value(1));

  const animaIn = () => {
    // agregando animacion al hacer click
    Animated.spring(animaBtn, {
      toValue: 0.9,
    }).start();
  };
  const animaOut = () => {
    Animated.spring(animaBtn, {
      toValue: 1,
      friction: 4, // el rebote
      tension: 30,
    }).start();
  };

  const styleAnima = {
    transform: [{ scale: animaBtn }],
  };

  return (
    <>
      <View style={styles.form}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>
      </View>
      <View>
        <Picker itemStyle={{ height: 120, backgroundColor: '#fff' }}>
          <Picker.Item label="-- Seleccione un pais --" value="" />
          <Picker.Item label="Estados Unidos" value="US" />
          <Picker.Item label="Mexico" value="MX" />
          <Picker.Item label="Argentina" value="AR" />
          <Picker.Item label="Colombia" value="CO" />
          <Picker.Item label="España" value="ES" />
        </Picker>
      </View>
      <TouchableWithoutFeedback onPressIn={() => animaIn()} onPressOut={() => animaOut()}>
        <Animated.View style={[styles.btnSearch, styleAnima]}>
          <Text style={styles.btnText}>Buscar Clima</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 20,
    borderRadius: 10,
    textAlign: 'center',
  },
  btnSearch: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 15,
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Formulario;
