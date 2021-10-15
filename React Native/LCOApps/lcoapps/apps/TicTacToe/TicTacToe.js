/**
 * 6th App
 * The TicTacToe app teaches to understand complex logics behind simple game like Tic tac toe.
 * Dives more into 3rd party libraries for UI.
 * Learning to create separate components.
 * UI library used => Native base :  https://github.com/GeekyAnts/NativeBase
 * UI library used => Native base :  https://github.com/GeekyAnts/NativeBase
 */

import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import Icons from './components/Icons';

import {
  Text,
  Container,
  Content,
  Header,
  Title,
  Body,
  Card,
  H1,
  H3,
  Button,
} from 'native-base';
import Snackbar from 'react-native-snackbar';

const itemArray = new Array(9).fill('empty');

function TicTacToe(props) {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: '#000',
        textColor: '#FFF',
      });
    }

    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: 'crimson',
        textColor: '#FFF',
      });
    }

    checkIsWinner();
  };

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  };

  const checkIsWinner = () => {
    //  checking winner of the game
    if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== 'empty' &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== 'empty' &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== 'empty' &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
  };

  return (
    <>
      <Container style={{ backgroundColor: '#333945' }}>
        <Header>
          <Body>
            <Title style={{ alignSelf: 'center' }}>Tic-Tac-Toe</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.grid}>
            {itemArray.map((item, index) => (
              <TouchableOpacity
                style={styles.box}
                key={index}
                onPress={() => changeItem(index)}>
                <Card style={styles.card}>
                  <Icons name={item} />
                </Card>
              </TouchableOpacity>
            ))}
          </View>
          {winMessage ? (
            <View>
              <H1 style={styles.message}>{winMessage}</H1>
              <Button onPress={reloadGame} primary block rounded>
                <Text>Reload Game</Text>
              </Button>
            </View>
          ) : (
            <H3 style={styles.message}>
              {isCross ? 'Cross' : 'Circle'}'s turn
            </H3>
          )}
        </Content>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '33%',
    marginBottom: 6,
  },
  card: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    marginTop: 20,
    backgroundColor: '#4652B3',
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default TicTacToe;
