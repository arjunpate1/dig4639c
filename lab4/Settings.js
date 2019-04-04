import React from "react";
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Button from "./Button";

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
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
