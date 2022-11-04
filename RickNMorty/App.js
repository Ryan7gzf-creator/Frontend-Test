import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./Components/Home";
import CharacterInfo from "./Components/CharacterInfo";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Character',
                        headerTitleAlign: 'left'
                    }}
                />
                <Stack.Screen name="Character"
                              component={CharacterInfo}
                              options={({route}) => ({title: route.params.name})}/>

            </Stack.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
