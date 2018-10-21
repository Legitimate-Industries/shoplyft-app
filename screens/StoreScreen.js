import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class StoreScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.nearestStoresText}>Nearest Stores</Text>
            <View style={styles.nearestStoresContainer}>
              <Text style={styles.getStartedText}>Based on your current location</Text>
            </View>
          </View>

          <View style={styles.listStoresContainer}>
            <View style={styles.listStoresContainer}>
              <Text style={styles.storeNameFont}>
              <Image source = {require('../assets/images/hdLogo.jpg')} style = {styles.logoImage}/>
              The Home Depot
              </Text>
              <Text style={styles.storeDetailsFont}>1200 Barbara Jordan Blvd Suite 100, Austin, TX 78723</Text>
              <Text style={styles.storeDetailsFont}>(512) 703-4110</Text>
            </View>
            <View style={styles.listStoresContainer}>
              <Text style={styles.storeNameFont}>
              <Image source = {require('../assets/images/hdLogo.jpg')} style = {styles.logoImage}/>
              The Home Depot
              </Text>
              <Text style={styles.storeDetailsFont}>3600 S IH 35 Frontage Rd, Austin, TX 78704</Text>
              <Text style={styles.storeDetailsFont}>(512) 693-9811</Text>
            </View>
            <View style={styles.listStoresContainer}>
              <Text style={styles.storeNameFont}>
              <Image source = {require('../assets/images/hdLogo.jpg')} style = {styles.logoImage}/>
              The Home Depot
              </Text>
              <Text style={styles.storeDetailsFont}>1200 Home Depot Blvd, Sunset Valley, TX 78745</Text>
              <Text style={styles.storeDetailsFont}>(512) 892-3035</Text> 
            </View>
          </View>




        </ScrollView>
      </View>
    );
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
    backgroundColor: '#fff',
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
  listStoresContainer: {
      alignItems: 'flex-start',
      marginTop: 10,
      marginHorizontal: 15,
  },
  storeNameFont: {
    fontSize: 30,
    color:'rgba(96, 96, 96, 1)',
    lineHeight: 30,
    textAlign: 'left',
  },
  storeDetailsFont: {
    fontSize: 20,
    color:'rgba(96, 96, 96, 1)',
    lineHeight: 20,
    textAlign: 'left',
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -30,
    marginHorizontal: 30,
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
    marginHorizontal: 30,
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
  nearestStoresText: {
    fontSize: 50,
    color:'rgba(96, 96, 96, 1)',
    lineHeight: 50,
    textAlign: 'center',
  },
  nearestStoresContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  getStartedText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
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
});
