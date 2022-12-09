import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { clientGetGames } from '../api/api'

import { GameCard } from '../components/Votes/GameCard'
import { Header } from '../components/Votes/Header'


export function VotesScreen() {
  const [ gamelist, setGameList] = useState([{}]);

  useEffect(() => {
    (async () => {
      const response = await clientGetGames();

      setGameList(response);
    })
  },[])

  return(
    <View style={styles.container}>
      <Header />

      <ScrollView>
        {gamelist.map(game => GameCard(game))}
      </ScrollView>
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});