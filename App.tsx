import React from "react";
import {Text , View, TextInput, StyleSheet , StatusBar} from 'react-native'
import SearchBar from "./components/SearchBar";

const App = () => {

    return(
        <>
        <View style={styles.container}>
            <Text style={styles.text}>
                EasySearch
            </Text>
            <Text style={styles.textSmall}>
                Smart search using google dorks
            </Text>
            <SearchBar />

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