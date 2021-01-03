import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ResumeCard from '../components/ResumeCard';
import Header from '../components/Header';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header text="Resume your learning"/>
      <ResumeCard title="Padkosh" onPress={() => {navigation.navigate('BalloonGame')}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1, backgroundColor: 'white'
  },
  card: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 14,
  }
});

export default HomeScreen;
