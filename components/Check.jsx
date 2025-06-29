import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Check = ({label}) => {
    const [toggleCheckBox, setToggleCheckbox] = useState(false);
  return (
    <View style={styles.checkBoxContainer}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckbox(newValue)}
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