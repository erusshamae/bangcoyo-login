import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://scontent.fcgm1-1.fna.fbcdn.net/v/t1.15752-9/401100233_1006655657065234_2642955934926024551_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEP6Jkd1_12-TVs45_1YI7a1A0bQNZdEvDUDRtA1l0S8PWDi6j3YgzYsQry54tKcS-TtwyGrKSRPToZ3ezaJwcs&_nc_ohc=BXpXRFY3U-gAX-0_THB&_nc_oc=AQlBy_GuHO7a-RPvBSXEZGhG8Y_PxVt5F1dkGz3yZnD16mo8TCTllrVsQ2OVPXArU4E&_nc_ht=scontent.fcgm1-1.fna&oh=03_AdTbEWPQjt0OgvccvkpXYu56p1dghYhxURqzdVBsxfbJ1w&oe=658D6C83' }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Landing Page</Text>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {
              borderColor: '#e021ba',
              borderWidth: 1,
              width: 200,
              backgroundColor: '#e021ba',
            },
          ]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={[styles.buttonText, { color: '#fff' }]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {
              borderColor: '#e021ba',
              borderWidth: 1,
              width: 200,
              backgroundColor: '#e021ba',
            },
          ]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={[styles.buttonText, { color: '#fff' }]}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#e021ba',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default LandingPage;
