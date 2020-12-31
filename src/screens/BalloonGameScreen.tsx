import * as React from 'react';
import {View, Text} from 'react-native';

interface Props {}

interface State {}

export default class BalloonGameScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>
        BalloonGameScreen
        </Text>
      </View>
    );
  }
}
