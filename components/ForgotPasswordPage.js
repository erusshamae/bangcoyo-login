import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const ForgotPasswordPage = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    navigation.navigate('Login');
  };

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://scontent.fcgm1-1.fna.fbcdn.net/v/t1.15752-9/401100233_1006655657065234_2642955934926024551_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEP6Jkd1_12-TVs45_1YI7a1A0bQNZdEvDUDRtA1l0S8PWDi6j3YgzYsQry54tKcS-TtwyGrKSRPToZ3ezaJwcs&_nc_ohc=BXpXRFY3U-gAX-0_THB&_nc_oc=AQlBy_GuHO7a-RPvBSXEZGhG8Y_PxVt5F1dkGz3yZnD16mo8TCTllrVsQ2OVPXArU4E&_nc_ht=scontent.fcgm1-1.fna&oh=03_AdTbEWPQjt0OgvccvkpXYu56p1dghYhxURqzdVBsxfbJ1w&oe=658D6C83' }}
      style={styles.container}
    >
      <Text style={styles.title}>FORGOT PASSWORD PAGE</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backToLoginButton} onPress={handleBackToLogin}>
        <Text style={styles.backToLoginText}>Back to Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e021ba',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  resetButton: {
    backgroundColor: "#e021ba",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 16,
  },
  backToLoginButton: {
    backgroundColor: "#e021ba",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backToLoginText: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ForgotPasswordPage;
