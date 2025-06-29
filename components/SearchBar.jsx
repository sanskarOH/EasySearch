import React , {useState} from 'react';
import {Text, 
        View,
        TextInput,
        StyleSheet
        
      } from 'react-native';


const SearchBar = () => {
  const [text, setText] = useState("")
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Type here to Search</Text>
      <TextInput
            placeholder='Type Here...'
            style={styles.input}
            onChangeText={newText => setText(newText)}
            placeholderTextColor= "#666"
            
       />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 380,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "D1D5DB",
    borderWidth: 1,
    fontFamily: "monospace",
    alignSelf: "center"
  },
  label:{
    color: "4B5563",
    fontSize: 14,
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
    backgroundColor: "F3F4F6",
    shadowColor: "#000",
    shadowOffset: {width: 0 , height:1},
    shadowOpacity: 0.05,
    shadowRadius: 2,

  }


})
export default SearchBar;