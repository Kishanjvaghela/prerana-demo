import * as React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Game"
        onPress={() => navigation.navigate('BalloonGame')}
      />
    </View>
  );
};

export default HomeScreen;
