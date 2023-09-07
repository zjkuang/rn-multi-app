/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={[
          styles.baseView,
          {backgroundColor: isDarkMode ? Colors.black : Colors.white},
        ]}>
        <Text style={{color: isDarkMode ? Colors.light : Colors.dark}}>
          App
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', // along primary axis
    alignItems: 'center', // along secondary axis
  },
});
