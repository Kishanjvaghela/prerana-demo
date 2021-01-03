import * as React from 'react';
import {View, Text, Button, StyleSheet, Pressable, Image} from 'react-native';
import globalStyles from '../styles';

const Card = ({title, onPress}) => {
  return (
    <Pressable style={{
      paddingLeft: 20,
      paddingRight: 20,
    }}onPress={onPress}>
      <View style={[styles.card, globalStyles.cardShadow2]}>
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
  image: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: 150,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 14
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
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  }
});

export default Card;
