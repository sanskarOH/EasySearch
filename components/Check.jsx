import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Check = ({label, isSelected, onToggle}) => {
  return (
    <View style={styles.checkBoxContainer}>
      <CheckBox
        value={isSelected}
        onValueChange={onToggle}
        tintColors={{true:'#000'}}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
    checkBoxContainer: {
     flexDirection: 'row',
     alignItems: 'center'   
    },
    label: {
        fontSize: 16,
        color: '#000'
        

    }
})

export default Check;