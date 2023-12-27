import React from 'react';
import { View } from 'react-native';
import Navigation from './components/navigation';
//import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
  );
};

export default App;
