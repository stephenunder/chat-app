import React, { Component } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { login } from "../store";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  render() {
    return (
      <View style={ styles.container } >
        <Text style={ styles.text } >Enter your name and password:</Text>
        <TextInput 
          onChangeText={ value => this.handleChange("name", value) }
          returnKeyType="next"
          autoCorrect={ false }
          onSubmitEditing={ () => this.passwordInput.focus() }
          style={ styles.input }
        />
        <TextInput 
          onChangeText={ value => this.handleChange("password", value) }
          secureTextEntry
          returnKeyType="go"
          autoCapitalize="none"
          style={ styles.input }
          ref={ input => this.passwordInput = input }
        />
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "powderblue",
    height: "100%",
    width: "100%"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    width: "90%",
    borderWidth: 0.5,
    backgroundColor: "#FFF",
    color: "#000",
    textAlign: "center",
    marginTop: 10
  }
});