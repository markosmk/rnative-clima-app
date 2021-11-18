import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

export default function App() {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });
  const [requestClima, setRequest] = useState(false);
  const [result, setResult] = useState({});
  const [bgcolor, setBgcolor] = useState('rgb(71, 149, 212)');

  // destructuring state
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

          // modifica los colores de fondo segun el clima
          const { main } = result;
          const current = parseInt(main.temp - 273.15); // convert to celsius
          if (current < 10) {
            setBgcolor('rgb(105,108,149)');
          } else if (current >= 10 && current < 25) {
            setBgcolor('rgb(71,149,212)');
          } else {
            setBgcolor('rgb(178,28,61)');
          }
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

  const bgColorApp = {
    backgroundColor: bgcolor,
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => offKeyboard()}>
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.container}>
            <Clima result={result} />
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
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: '2.5%',
  },
});
