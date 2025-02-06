import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA1 = [
  {
    id: '1d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Take my breakfast',
  },
  {
    id: '2ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Exercise',
  },
  {
    id: '38694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Toothbrush',
  },
  {
    id: '48694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Upload Content',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Eat my snacks',
  },
  {
    id: '68694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Preparing for online meeting',
  },
  {
    id: '78694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Time to eat',
  },
  {
    id: '88694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Bed Time',
  },
];
const DATA2 = [
  {
    id: '9d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Take myu afternnon snack',
  },
  {
    id: '10ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Watching movies',
  },
  {
    id: '118694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Playing soccer',
  },
  {
    id: '128694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Upload short content',
  },
  {
    id: '138694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Eat my snacks',
  },
  {
    id: '148694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Time to sleep',
  },
  {
    id: '1558694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Shower',
  },
  {
    id: '1658694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Bed Time',
  },
];
const DATA3 = [
  {
    id: '17d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Time to prepare for sleep',
  },
  {
    id: '18ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Eating snacks',
  },
  {
    id: '19694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Watching movies',
  },
  {
    id: '20694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Creating content',
  },
  {
    id: '21694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Playing tiktok',
  },
  {
    id: '22694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Preparing for online meeting',
  },
  {
    id: '23694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Time to eat',
  },
  {
    id: '24694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pray',
  },
  {
    id: '25694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Bed Time',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
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
