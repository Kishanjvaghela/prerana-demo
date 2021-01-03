import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from './Header';
import Card from './Card';
const {width} = Dimensions.get('window');

const Dashboard = ({text, containData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.background1}></View>
        <View style={styles.background2}></View>
      </View>
      <View>
        <Header text={text} />
        <ScrollView horizontal>
          <View style={styles.cardContainer}>
            {containData &&
              containData.map((item) => {
                return (
                  <Card
                    key={item.title}
                    title={item.title}
                    onPress={() => {}}
                  />
                );
              })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    // flexShrink:1
    marginTop: 20,
  },
  backgroundContainer: {
    flexDirection: 'column',
    position: 'absolute',
    // zIndex: 3,
  },
  background1: {
    width: width,
    height: 50,
    backgroundColor: '#D1C4E9',
  },
  background2: {
    width: width,
    height: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#D1C4E9',
  },
  cardContainer: {
    flexDirection: 'row',
  },
});

export default Dashboard;
