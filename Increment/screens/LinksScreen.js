import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorite Quotes',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>"I'm on one"</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
