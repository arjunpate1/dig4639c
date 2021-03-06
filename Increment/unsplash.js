import React from 'react';
import {
  View, ImageBackground, StatusBar, Platform, Text,
  TouchableOpacity, Linking, ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { PropTypes } from 'prop-types';
import styles from './UnSplashScreen.style';

export default class UnSplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoJson: {},
    };
  }

  componentWillMount() {
    const { clientId } = this.props;
    //axios.get(`https://api.unsplash.com/photos/random/?client_id=${clientId}&collections=162468`)
    axios.get(`https://api.unsplash.com/photos/random/?client_id=${clientId}&collections=4687121?orientation=portrait`)
      .then((photo) => {
        this.setState({
          photoJson: photo.data,
        });
      });
  }

  render() {
    const { photoJson } = this.state;
    const { logoText } = this.props;
    const { quoteText } = this.props;
    return (
      <View style={styles.imageContainer}>
        {photoJson.urls
          ? (
            <ImageBackground
              style={styles.image}
              source={{ uri: photoJson.urls.regular }}
            >
              <View style={styles.outerView}>
                <Text style={styles.textLogo}>Hi There, {logoText}</Text>

                <View style={styles.quoteView}>
                    <Text style={styles.quote}>{quoteText}</Text>
                </View>

                <View style={styles.creditsView}>

                  <TouchableOpacity
                    style={styles.creditsTouchable}
                    onPress={() => { Linking.openURL(`https://unsplash.com/${photoJson.user.username}?utm_source=splash_screen&utm_medium=referral`); }}
                  >
                    <Text style={styles.creditsText}>{photoJson.user.name}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity><Text style={styles.creditsText}>-</Text></TouchableOpacity>
                  <TouchableOpacity
                    style={styles.creditsTouchable}
                    onPress={() => { Linking.openURL('https://unsplash.com/?utm_source=splash_screen&utm_medium=referral'); }}
                  >
                    <Text style={styles.creditsText}>Unsplash</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          )
          : null }
      </View>
    );
  }
}

UnSplashScreen.propTypes = {
  clientId: PropTypes.string.isRequired,
  logoText: PropTypes.string,
};

UnSplashScreen.defaultProps = {
  logoText: 'MyApp',
};
