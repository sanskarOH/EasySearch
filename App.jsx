import React, {useState} from "react";
import {Text , View,  StyleSheet , StatusBar, Linking , TouchableOpacity, Alert} from 'react-native'
import SearchBar from "./components/SearchBar";
import { generateDork } from "./logic/generateDork";


const App = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedTypes, setSelectedTypes] = useState(/** @type {string[]} */ ([]));

    const toggleType= (type) => {
        setSelectedTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        )
    }

    const handleSearch = () =>{
        if(!searchText.trim() || !selectedTypes.length === 0){
            Alert.alert(
                'Missing Input',
                'Please enter search text and select at least on file type.',
                [{text: 'Ok', style: 'cancel'}]
            )
        }
        else{
            const dork = generateDork(searchText, selectedTypes);
            console.log(dork)
            const url = `https://www.google.com/search?q=${encodeURIComponent(dork)}`;
            Linking.openURL(url)
        }
        
    }

    return(
        <>
        <View style={styles.container}>
            <Text style={styles.text}>
                EasySearch
            </Text>
            <Text style={styles.textSmall}>
                Smart search using google dorks
            </Text>
            <SearchBar
                searchText={searchText}
                onTextChange={setSearchText}
                selectedTypes={selectedTypes}
                ontoggleType={toggleType}
             />
            <TouchableOpacity style={styles.buttonMain} onPress={handleSearch}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>

        </View>
        </>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        gap: 10,
        marginTop: StatusBar.currentHeight,
        paddingTop: 60
    },
    text:{
        alignSelf: "center",
        color: "#000",
        fontWeight: "bold",
        fontSize: 50,
        
        
    },
    textSmall: {
        alignSelf: "center",
        fontSize: 16,
        marginBottom: 20,
    },
    buttonMain:{
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        gap: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#181717',
        borderRadius: 5,
        marginTop: 10,
        cursor: 'pointer',
    },
    buttonText: {
        color: '#000',
        fontWeight: 700,
        fontSize: 20
    }
})

export default App