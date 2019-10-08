import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TabScreen from './Tabs/TabScreen';
import GlobalStyles from './GlobalStyle';

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <TabScreen />
    </SafeAreaView>
  );
}

