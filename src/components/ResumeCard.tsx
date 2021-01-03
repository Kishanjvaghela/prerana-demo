import * as React from 'react';
import {View, Text, Button, StyleSheet, Pressable, Image} from 'react-native';
import globalStyles from '../styles';

const ResumeCard = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.card, globalStyles.cardShadow]}>
        <Image
          style={styles.image}
          source={require('../assets/images/placeholder-image.png')}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 14,
  },
  title: {
    textAlign: 'left',
    fontSize: 16,
    color: '#212121'
  },
  titleContainer: {
    backgroundColor: 'white',
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  }
});

export default ResumeCard;
