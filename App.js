import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Formulario from './components/Formulario';

export default function App() {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });
  const [requestClima, setRequest] = useState(false);
  const [result, setResult] = useState({});
  const { city, country } = search;

  useEffect(() => {
    const getClima = async () => {
      if (requestClima) {
        const apiKey = 'a31b78ec419f860f5f24cdc2b0547483';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

        try {
          const req = await fetch(url);
          const result = await req.json();
          setResult(result);
          setRequest(false); // para que pueda realizar nuevamente una busqueda
        } catch (error) {
          showAlert();
        }
      }
    };

    getClima();
  }, [requestClima]);

  const showAlert = () => {
    Alert.alert('Error', 'Intenta con otra ciudad o pais', [{ text: 'Ok' }]);
  };

  const offKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => offKeyboard()}>
        <View style={styles.app}>
          <View style={styles.container}>
            <Formulario search={search} setSearch={setSearch} setRequest={setRequest} />
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
