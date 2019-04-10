import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { Detail } from '../screens/Detail';
import { createStackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _gotoScreen = (key) => {
    console.log("Going to " + key);
}

  render() {
     const {navigate} = this.props.navigation;
     return (
       <ImageBackground source={require('../assets/images/bg.jpg')} imageStyle={{resizeMode: 'cover'}} style={styles.backgroundImg}>
       <View style={styles.container}>
         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
           <View style={styles.getStartedContainer}>
             <Text style={styles.getStartedText}>Increment</Text>
             <FlatList
              data={[{key: 'adidasnmd',
                      image: require('../assets/images/adidas.jpg'),
                      title: 'NMD Runner',
                      author:'by Adidas'},
                     {key:'nikeaf1',
                      image: require('../assets/images/nike.jpg'),
                      title:'Air Force 1',
                      author:'by Nike'},
                      {key: 'ctconverse',
                       image: require('../assets/images/converse.jpg'),
                       title:'Chuck Taylors',
                       author:'by Converse'},
                       {key: 'yeezy',
                        image: require('../assets/images/yeezy.jpg'),
                        title:'Yeezy Boost 350',
                        author:'by Adidas & Kanye West'}
                    ]}
              keyExtractor={this._keyExtractor}
               renderItem={({item}) => <TouchableOpacity onPress={() => navigate("Detail",{ image:item.key, image:item.image, image:item.title, image:item.author })}>
                 <Image source={item.image} style={{width:200,height:200}} />
                 <Text style={styles.imageTitle}>{item.title}</Text>
                 <Text style={styles.imageAuthor}>{item.author}</Text>
               </TouchableOpacity>}
             />
           </View>
         </ScrollView>
       </View>
       </ImageBackground>
     );
   }


  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageTitle:{
    textAlign: 'center',
    fontSize: 16,
    paddingTop:5,
  },
  imageAuthor:{
    textAlign: 'center',
    marginBottom: 20,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    paddingBottom:15,
    paddingTop:15,
    marginTop: 50,
    marginBottom:50,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
  },
});
