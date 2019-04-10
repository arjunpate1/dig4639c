import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Detail extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const passedImage = this.props.navigation.getParam("bunnyImage", "defaultValue");
    const passedTitle = this.props.navigation.getParam("bunnyTitle", "defaultValue");
    const passedAuthor = this.props.navigation.getParam("bunnyAuthor", "defaultValue");
    return (
      <View style={styles.container}>
        <Image source={passedImage} style={{width:"90%",height:"60%"}}/>
        <Text style={styles.imageTitle}>{passedTitle}</Text>
        <Text style={styles.imageAuthor}>{passedAuthor}</Text>
        <Button title="Back" onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
   }
  }

const styles = StyleSheet.create({
  imageTitle: {
    fontSize: 30,
  },
  imageAuthor: {
    paddingBottom: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#dee8eb',
    alignItems:'center',
    justifyContent:'center',
    alignItems: 'center',
    //marginHorizontal: 10,
  },
});
