import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, ActivityIndicator } from 'react-native';

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [responce, setResponce] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(
            (result) => {
          setResponce(result);
          setIsLoading(false);
        },
          (error) => {
            setIsLoading(false);
            setError(error);
          }
        )
  }, []);

const getContent = () => {
  if (isLoading){
    return <ActivityIndicator size={'large'} />;
  }
  if (error) {
    return <Text>{error}</Text>
  }

  console.log(responce);
  return <Text>Character (Name): {responce["results"][0].name}</Text>;
};

  return (
    <SafeAreaView style={styles.container}>
      {getContent()}
      <StatusBar style="auto" />
    </SafeAreaView>
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
