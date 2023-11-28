import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    navigation.navigate("Login");
  };

  const handleLoginLink = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={{ uri: 'https://scontent.fcgm1-1.fna.fbcdn.net/v/t1.15752-9/401100233_1006655657065234_2642955934926024551_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEP6Jkd1_12-TVs45_1YI7a1A0bQNZdEvDUDRtA1l0S8PWDi6j3YgzYsQry54tKcS-TtwyGrKSRPToZ3ezaJwcs&_nc_ohc=BXpXRFY3U-gAX-0_THB&_nc_oc=AQlBy_GuHO7a-RPvBSXEZGhG8Y_PxVt5F1dkGz3yZnD16mo8TCTllrVsQ2OVPXArU4E&_nc_ht=scontent.fcgm1-1.fna&oh=03_AdTbEWPQjt0OgvccvkpXYu56p1dghYhxURqzdVBsxfbJ1w&oe=658D6C83' }}
      style={styles.container}
    >
      <Text style={styles.title}>REGISTER</Text>
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
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={styles.showPasswordIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}> Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginLink}>
        <Text style={styles.loginLink}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  overlay: {
    backgroundColor: 'rgba(255, 182, 193, 0.7)', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#e021ba",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "85%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  showPasswordIcon: {
    padding: 10,
  },
  registerButton: {
    backgroundColor: "#e021ba",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  registerButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginLink: {
    color: "#fff",
    textDecorationLine: "underline",
    marginTop: 20,
  },
});

export default RegisterPage;
