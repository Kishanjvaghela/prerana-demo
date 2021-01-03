import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Header = ({ text }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: "bold",
    color: '#673AB7'
  },
  titleContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'flex-start',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  }
});

export default Header;


// .dark-primary-color    { background: #512DA8; }
// .default-primary-color { background: #673AB7; }
// .light-primary-color   { background: #D1C4E9; }
// .text-primary-color    { color: #FFFFFF; }
// .accent-color          { background: #FFC107; }
// .primary-text-color    { color: #212121; }
// .secondary-text-color  { color: #757575; }
// .divider-color         { border-color: #BDBDBD; }

