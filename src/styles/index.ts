import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardShadow: {
    shadowOffset: {
      width: 1,
      height: -1
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowColor: 'black',
    elevation: 10
  }
});

export default styles;