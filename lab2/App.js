import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button, Animated, ImageBackground } from 'react-native';
import FadeInView from './FadeInView';

// Define Variables
var greeting = 'Please enter your name to get started'; // Default Greeting Message
var timeOfDay = new Date(); // Get Current Date
var currentHour = timeOfDay.getHours(); // Get Current Hour
var welcomeText = 'WELCOME'; // Display Welcome Message
var letterSpaceOnly = /^[a-zA-Z\s]*$/; // Regex Variable
var userName; // Username variable to be used later

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: false,
      valid: false
    };

    this.onPress = this.onPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  // Live Validation
  onChange(event) {

    // Set Username Variable equal to user input
    userName = event;

    if (letterSpaceOnly.test(event) == false) {
      greeting = 'Name can only contain letters and spaces';
      this.setState({error:true});
    }
    else if (!event) {
      greeting = 'Please enter your name to get started';
      this.setState({error:false});
    }
    else {
      greeting = 'Looks Great!';
      this.setState({error:false});
    }

    // Force App To Update
    this.forceUpdate();
  }

  // Submission
  onPress() {
    if (this.state.valid) {
      greeting = 'Please enter your name to get started';
      this.setState({valid:false});
    }
    else if (!userName) {
      greeting = 'Name is required';
      this.setState({error:true});
    }
    else if (letterSpaceOnly.test(userName) == false) {
      greeting = 'Name can only contain letters and spaces';
      this.setState({error:true});
    }
    else {

      // Set Up the Greetings based on the time

      // Morning
      if (currentHour >= 4 && currentHour < 12) {
          welcomeText = 'Good Morning';
      }

      // Afternoon
      else if (currentHour >= 12 && currentHour < 17) {
          welcomeText = 'Good Afternoon';
      }

      // Evening
      else if (currentHour >= 17 && currentHour < 22) {
          welcomeText = 'Good Evening';
      }

      // Awkward Hours
      else {
          welcomeText = 'hello';
      }

      // Convert Text To Uppercase
      welcomeText = welcomeText.toUpperCase();
      userName = userName.toUpperCase();

      // Change State to Display Greeting
      this.setState({valid:true});
    }

    // Force App To Update
    this.forceUpdate();
  }

  // Render APP
  render() {
    // Display Error Styling or Default Styling
    const greetingStyle = this.state.error ? styles.instructionsError : styles.instructionsGood;
    const inputBorder = this.state.error ? styles.inputError : styles.inputGood;

    if (this.state.valid) {

      // Return Greeting Message
      return(
        <ImageBackground source={require('./assets/bg.jpg')} imageStyle={{resizeMode: 'cover'}} style={styles.backgroundImg}>
          <View style={styles.container}>
            <Text style={styles.title}>{welcomeText} <Text style={styles.spantitle}>{userName}</Text></Text>
            <Text style={[styles.instructions, greetingStyle]}>This app doesn't really do anything yet, but thanks for checking it out nonetheless.</Text>
            <TouchableOpacity onPress={this.onPress}>
              <Text style={styles.submit}>BACK</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    }

    // Return Name Form
    else {
      return(
        <ImageBackground source={require('./assets/bg.jpg')} imageStyle={{resizeMode: 'cover'}} style={styles.backgroundImg}>
          <FadeInView style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
              <Text style={styles.title}>REACT <Text style={styles.spantitle}>NATIVE</Text> APP</Text>
              <Text style={styles.subtitle}>DESIGNED BY ARJUN PATEL</Text>
              <Text style={[styles.instructions, greetingStyle]}>{greeting}</Text>

              <TextInput style={[styles.textInput, inputBorder]} onChangeText={this.onChange} placeholder="Jefferson Steelflex" placeholderTextColor="#999"></TextInput>

              <TouchableOpacity onPress={this.onPress}>
                <Text style={styles.submit}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </FadeInView>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
  },
  title: {
    textTransform: 'lowercase',
    letterSpacing: 3,
    marginBottom: 15,
    fontSize: 28,
    textAlign: 'center',
    marginRight: 30,
    marginLeft: 30,
  },
  spantitle: {
    fontWeight: 'bold',
    color: '#72BDA3',
  },
  subtitle: {
    letterSpacing: 6,
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  instructions: {
    letterSpacing: 1,
    marginBottom: 15,
    textAlign: 'center',
    marginRight: 30,
    marginLeft: 30,
    lineHeight: 25,
  },
  instructionsError: {
    letterSpacing: 1,
    marginBottom: 15,
    color: 'red',
  },
  textInput: {
    borderRadius: 8,
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 75,
    paddingLeft: 75,
    marginBottom: 25,
    textAlign: 'center',
  },
  inputGood: {
    borderColor: '#333',
  },
  inputError: {
    borderColor: 'red',
  },
  submit: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#72BDA3',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 40,
    paddingLeft: 40,
    fontSize: 11,
    letterSpacing: 1,
    backgroundColor: '#72BDA3',
    color: '#fff',
  },
});
