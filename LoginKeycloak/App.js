/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { ReactNativeKeycloakProvider } from '@react-keycloak/native';

import keycloak from './keycloak';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ReactNativeKeycloakProvider
    authClient={keycloak}
    initOptions={{
      redirectUri: 'loginkeycloak://Homepage',
      // if you need to customize "react-native-inappbrowser-reborn" View you can use the following attribute
      inAppBrowserOptions: {
        // For iOS check: https://github.com/proyecto26/react-native-inappbrowser#ios-options
        // For Android check: https://github.com/proyecto26/react-native-inappbrowser#android-options
      },
    }}
  >
      <Button onPress={() => keycloak.login()} title="Login" />
      {!!keycloak.authenticated && (
        <Button onPress={() => keycloak.logout()} title="Logout" />
      )}
    </ReactNativeKeycloakProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
