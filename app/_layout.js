import { Stack } from "expo-router";
import { useState, useEffect } from "react";
import { initDatabase } from "../db/database";
import {View, Text} from "react-native"

export default function RootLayout() {
    const [dbready, setDBReady] = useState(false)

    useEffect(() => {
        initDatabase()
        .then(() => setDBReady(true))
        .catch((err) => console.error("Database initialization failed", err))
    }, [])

    if(!dbready){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Loading...</Text>
            </View>
        )
    }
    
    return <Stack screenOptions={{headerShown : false}}></Stack>
}