import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA1 = [
  {
    id: '1',
    title: 'Take my breakfast',
  },
  {
    id: '2',
    title: 'Exercise',
  },
  {
    id: '3',
    title: 'Toothbrush',
  },
  {
    id: '4',
    title: 'Upload Content',
  },
  {
    id: '5',
    title: 'Eat my snacks',
  },
  {
    id: '6',
    title: 'Preparing for online meeting',
  },
  {
    id: '7',
    title: 'Time to eat',
  },
  {
    id: '8',
    title: 'Bed Time',
  },
];
const DATA2 = [
  {
    id: '9',
    title: 'Take myu afternnon snack',
  },
  {
    id: '10',
    title: 'Watching movies',
  },
  {
    id: '11',
    title: 'Playing soccer',
  },
  {
    id: '12',
    title: 'Upload short content',
  },
  {
    id: '13',
    title: 'Eat my snacks',
  },
  {
    id: '14',
    title: 'Time to sleep',
  },
  {
    id: '15',
    title: 'Shower',
  },
  {
    id: '16',
    title: 'Bed Time',
  },
];
const DATA3 = [
  {
    id: '17',
    title: 'Time to prepare for sleep',
  },
  {
    id: '18',
    title: 'Eating snacks',
  },
  {
    id: '19',
    title: 'Watching movies',
  },
  {
    id: '20',
    title: 'Creating content',
  },
  {
    id: '21',
    title: 'Playing tiktok',
  },
  {
    id: '22',
    title: 'Preparing for online meeting',
  },
  {
    id: '23',
    title: 'Time to eat',
  },
  {
    id: '24',
    title: 'Pray',
  },
  {
    id: '25',
    title: 'Bed Time',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
  <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text>Morning</Text>
      <FlatList
        data={DATA1}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text>Afternoon</Text>
      <FlatList
        data={DATA2}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text>Evening</Text>
      <FlatList
        data={DATA3}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
});

export default App;
