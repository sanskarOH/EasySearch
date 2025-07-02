import React from 'react';
import { Text, View, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Made with 💓 by{' '}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://sanskardiwedi.in')}
        >
          Sanskar Diwedi
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  text: {
    color: '#333',
    fontSize: 14,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default Footer;
