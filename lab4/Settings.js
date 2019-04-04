import React from "react";
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Button from "./Button";

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  }

  constructor(props) {
    super(props);
    this.state = {
      fahrenheit: '',
      celsius: '',
      temp: '',
    };
  }


  setMetric(fahrenheit) {
    this.setState({ fahrenheit });
  }

  f2c(){
    const intTemperature = parseInt(this.state.temp, 10);
    var c = String(Math.round(((intTemperature * 9 / 5) + 32)));
    return c;
    this.setState({c});
    console.log(celsius);
  }

  converter = (fahrenheit) => {
    const intTemperature = parseInt(this.state.temp, 10);
    if (fahrenheit) {
      var celsius = String(Math.round(((intTemperature * 9 / 5) + 32)));
      return celsius;
      console.log(celsius);
    }
    return String(Math.round(intTemperature - 273.15));
  }

  render() {
    const { fahrenheit } = this.state;
    const { celsius } = this.state;


    return (
      <ScrollView>
        <View style={styles.row}>
          <Text style={styles.header}>Temperature measured in:</Text>
        </View>

        <View style={styles.row}>
          <Button
          label="Celsius"
          onPress={() => {this.f2c(celsius);}}
          />
        </View>

        <View style={styles.row}>
          <Button
          label="Fahrenheit"
          onPress={() => {this.setMetric(fahrenheit);}}
          fahrenheit={fahrenheit}
          />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  header: {
    fontSize:20,
    fontWeight:"500",
  }
});

export default Settings;
