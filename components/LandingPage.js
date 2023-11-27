import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    backgroundColor: 'pink',
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
