import React, { Component } from 'react';
import {
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.bgImage}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Stellar App</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('spacecraft');
            }}>
            <Text style={styles.routeText}>Space Crafts</Text>
            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('starmap');
            }}>
            <Text style={styles.routeText}>Star Map</Text>
            <Image
              source={require('../assets/star_map.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('dailypic');
            }}>
            <Text style={styles.routeText}>Daily Pictures</Text>
            <Image
              source={require('../assets/daily_pictures.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 50,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: 'left',
  },
  iconImage: {
    position: 'absolute',
    height: 80,
    width: 80,
    resizeMode: 'contain',
    right: -5,
    top: -10,
  },
});
