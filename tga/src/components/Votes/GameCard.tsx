import React from "react";
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';

import { clientSendingVotes } from '../../api/api'
import { gameInterface } from "../../interfaces/gameInterface";


const sendingVote = (id: number) => {
  Alert.alert(
    "Vote Send",
    "Thanks for helping decide game of the year",
    [
      { text: 'OK', onPress:() => clientSendingVotes(id) }
    ]
  )
}

export function GameCard(props: gameInterface | any) {

  return(
    <View
    // style={ styles.Cardcontainer }
    >
      <View>
        <Image
          source={{uri: props.cover}}
          // style={styles.card}
        />
      </View>

      <View
        // style={styles.infoContainer}
      >
        <Text
          // style={styles.label}
          >{props.name}</Text>
          <Button
            onPress={() => sendingVote(props.id)}
            title='Vote'
            color='#ac33c'
          />

      </View>
    </View>
  )


}

const styles = StyleSheet.create({

})