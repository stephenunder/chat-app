import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { connect } from "react-redux";

class Users extends Component {
  constructor() {
    super();
    this.openChat = this.openChat.bind(this);
  }

  openChat(receivingUser) {
    this.props.navigation.navigate("Chat", { receivingUser });
  }

  render() {
    return (
      <View style={ styles.container} >
        {
          this.props.users.map(user => (
            <View key={ user.id } style={ styles.userContainer } >
              <Text style={ styles.name }>{ user.name }</Text>
              <TouchableOpacity
                style={ styles.buttonContainer }
                onPress={ () => this.openChat(user) }
              >
                <Text style={ styles.buttonText }>Chat</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    );
  }
}

const mapState = state => ({
  users: state.users.filter(user => user.id !== state.user.id)
});

export default connect(mapState)(Users);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "steelblue",
    height: "100%",
    width: "100%"
  },
  userContainer: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#FFF",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  name: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20
  },
  buttonContainer: {
    borderRadius: 50,
    backgroundColor: "#FFF",
    paddingVertical: 15,
    width: "75%"
  },
  buttonText: {
    color: "steelblue",
    textAlign: "center"
  }
});