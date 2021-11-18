import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Clima = ({ result }) => {
  const { name, main } = result;
  if (!name) return null;

  // grados kelvin a celcius
  const toCelcius = (temp) => parseInt(temp - 273.15);

  return (
    <>
      <View style={styles.clima}>
        <Text style={[styles.text, styles.current]}>
          {toCelcius(main.temp)}
          <Text style={styles.temp}>&#x2103;</Text>
          <Image
            style={{ width: 66, height: 60 }}
            source={{
              uri: `http://openweathermap.org/img/w/${result.weather[0].icon}.png`,
            }}
          />
        </Text>

        <View style={styles.temperatures}>
          <Text style={styles.text}>
            <Text style={styles.temp}>Min {toCelcius(main.temp_min)} &#x2103;</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.temp}>Max {toCelcius(main.temp_max)} &#x2103;</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  clima: {
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 20,
  },
  current: {
    fontSize: 80,
    marginRight: 0,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperatures: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Clima;
