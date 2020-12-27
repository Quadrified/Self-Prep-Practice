import React from 'react';
import {} from 'react-native';
import Default from './apps/Default'; // => Entry point
import BgChanger from './apps/BgChanger/BgChanger'; // => App #1
import DiceRoller from './apps/DiceRoller/DiceRoller'; // => App #2
import SpanishNumber from './apps/SpanishNumber/SpanishNumber'; // => App #3
import CurrencyConverter from './apps/CurrencyApp/CurrencyConverter'; // => App #4
import ProfilePic from './apps/ProfilePic/ProfilePic'; // => App #5
import TicTacToe from './apps/TicTacToe/TicTacToe'; // => App #6

function App(props) {
  return (
    <>
      <Default />
    </>
  );
}

export default App;
