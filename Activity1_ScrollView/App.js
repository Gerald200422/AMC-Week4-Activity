import React from 'react';
import {ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => (
  <ScrollView>
    <Text style={{fontSize: 96}}>This is scroll view</Text>
    <Text style={{fontSize: 96}}>This is scroll view</Text>
    <Text style={{fontSize: 96}}>This is scroll view</Text>
  </ScrollView>
);

export default App;
