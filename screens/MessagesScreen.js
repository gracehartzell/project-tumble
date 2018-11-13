import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default class MessagesScreen extends React.Component {
  static navigationOptions = {
    title: 'Messages',
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputMessage}
          maxLength={180}
          multiline={true}
          placeholder="Enter text to send"
          onChangeText={(text) => this.setState({text})}
        />
        {/* <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word).join(' ')}
        </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightslategrey',
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  inputMessage: {
    display: 'flex',
    margin: 20,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderColor: 'black',
    width: '75%',
    borderWidth: 3,

  }

});