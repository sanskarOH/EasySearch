import React , {useState} from 'react';
import {Text, 
        View,
        TextInput,
        StyleSheet
        
      } from 'react-native';
import Check from './Check';
const list = ['Video', 'File', 'Song', 'Zip/Archive', 'Book']
const SearchBar = ({searchText, onTextChange, selectedTypes, ontoggleType}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label , {fontSize: 18}]}>Type here to Search:</Text>
      <TextInput
            placeholder='Type Here...'
            style={styles.input}
            onChangeText={onTextChange}
            value={searchText}
            placeholderTextColor= "#666"
            
       />
       <Text style={[styles.label, {fontSize: 16}]}>Select the type of file:</Text>
       {list.map((item) => <Check key={item} label={item} isSelected={selectedTypes.includes(item)} onToggle={()=> ontoggleType(item)}/>)}
    </View>
  );
  console.log(searchText)
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 380,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#D1D5DB",
    borderWidth: 1,
    fontFamily: "monospace",
    alignSelf: "center",
    gap: 10
  },
  label:{
    color: "#4B5563",
    // fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8

  },
  input:{
    fontSize: 14,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: "#D1D5DB",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
    shadowColor: "#000",
    shadowOffset: {width: 0 , height:1},
    shadowOpacity: 0.05,
    shadowRadius: 2,

  }


})
export default SearchBar;