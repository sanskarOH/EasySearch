import React, {useState} from "react";
import {Text , View,  StyleSheet , StatusBar, Linking , Button} from 'react-native'
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
        const dork = generateDork(searchText, selectedTypes);
        console.log(dork)
        const url = `https://www.google.com/search?q=${encodeURIComponent(dork)}`;
        Linking.openURL(url)
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
            <Button title="Search" onPress={handleSearch}/>

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

    }
})

export default App