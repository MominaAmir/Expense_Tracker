import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons"

export default function TabLayout(){
    return(
        <Tabs screenOptions={{headerShown :true}}>
            <Tabs.Screen 
            name="index"
            options={{
                title : "Home",
                tabBarIcon : ({color , size}) => <Ionicons name="home" size={size} color={color}/>
            }}/>
            <Tabs.Screen 
            name = "add"
            options={
                {
                    title : 'Add Expense',
                    tabBarIcon : ({color, size}) => <Ionicons name="add-circle" size={size} color={color}/>
                }
            } />
            <Tabs.Screen 
            name="stats"
            options={{
                title : 'Stats',
                tabBarIcon : ({color, size}) => <Ionicons name="stats-circle" size={size} color={color}/>
            }}/>
        </Tabs>
    )

}