import React from 'react';
import {ScrollView, Text} from 'react-native';

// components
import Header from './Header';
import BrowsePro from './BrowsePro';
import JustLanuched from './JustLanuched';
import Category from './Category';
import Collection from './Collection';
import HomeWorkout from './HomeWorkout';
import BestSeller from './BestSeller';
import BottomText from './BottomText';

const Home = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#fff'}}>
      <Header navigation={navigation} />

      <BrowsePro navigation={navigation} />

      <JustLanuched navigation={navigation} />

      <Category navigation={navigation} />

      <Collection navigation={navigation} />

      <HomeWorkout navigation={navigation} />

      <BestSeller navigation={navigation} />

      <BottomText />
    </ScrollView>
  );
};

export default Home;
