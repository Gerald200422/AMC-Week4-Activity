import React from 'react'; 
import {StyleSheet, Text} from 'react-native'; 
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 

const App = () => ( 
<SafeAreaProvider> 
  <SafeAreaView style={styles.container}> 
    <Text style={styles.title}> 
    <Text style={styles.boldText}>GERALD</Text> 
    <Text style={styles.italicText}> BALETE</Text> 
    </Text> 
  </SafeAreaView> 
</SafeAreaProvider> 
); 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    padding: 24, 
    backgroundColor:'#eaeaea', 
  }, 

  title: {
    borderWidth: 4, 
    borderColor: '#20232a', 
    borderRadius: 6, 
    backgroundColor: 'lightgreen', 
    color: '#20232a', 
    textAlign: 'center', 
    fontSize: 38, 
    fontWeight: 'bold', 
  },

  boldText: { 
    fontWeight: 'bold', 
    }, 
  italicText: { 
    fontStyle: 'italic', 
    }
}); 

export default App;