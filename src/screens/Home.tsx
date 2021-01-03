import * as React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import ResumeCard from '../components/ResumeCard';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const gameLevels = [
  {
    title: 'Level 1',
  },
  {
    title: 'Level 2',
  },
  {
    title: 'Level 3',
  },
  {
    title: 'Level 4',
  },
];

const padKriyaLevels = [
  {
    title: 'Padkosh',
  },
  {
    title: 'PadParichaya',
  },
  {
    title: 'Atamanay padi',
  },
  {
    title: 'Parasmay padi',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header text="Resume your learning" />
        <ResumeCard
          title="Padkosh"
          onPress={() => {
            navigation.navigate('BalloonGame');
          }}
        />
        <Dashboard text="PadKrida" containData={padKriyaLevels} />
        <Dashboard text="Demo A" containData={gameLevels} />
        <Dashboard text="Demo B" containData={gameLevels} />
        <Dashboard text="Demo C" containData={gameLevels} />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 14,
  },
});

export default HomeScreen;
