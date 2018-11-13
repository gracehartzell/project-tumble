import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.card}
        >
          <Image source={{ uri: 'https://scontent.faus1-1.fna.fbcdn.net/v/t31.0-8/12357156_10208452593851151_7537210987893060797_o.jpg?_nc_cat=106&_nc_oc=AWNWABj-MMq_1WkrtFQWrJK9lRzhYPxsIgxq9EE-TJKnw37wcilDgyIQs0K4L3kNLWG-Du80nswz6A&_nc_ht=scontent.faus1-1.fna&oh=77c14b8de59436c13eb261e6791465d9&oe=5C84E43D' }} style={styles.cardImage} />
          <View>
            <Text style={styles.textLeft}>Critter</Text>
            <Text style={styles.textRight}>Brainstormer</Text>
          </View>
        </View>
        <View>
        <Text style={styles.location}>Austin, TX</Text>          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'lightslategrey',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  card: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor: 'darkslategrey',
    width: 300,
    height: 300,
    margin: 20
  },
  cardImage: {
    height: 293,
  },
  textLeft: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 5,
    left: 0,
    top: 0
  },
  textRight: {
    position: 'absolute',
    paddingTop: 10,
    fontSize: 15,
    right: 0,
    top: 0
  }
});
