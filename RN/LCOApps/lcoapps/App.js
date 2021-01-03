import React from 'react';
import { LogBox } from 'react-native';
import Default from './apps/Default'; // => Entry point
import BgChanger from './apps/BgChanger/BgChanger'; // => App #1
import DiceRoller from './apps/DiceRoller/DiceRoller'; // => App #2
import SpanishNumber from './apps/SpanishNumber/SpanishNumber'; // => App #3
import CurrencyConverter from './apps/CurrencyApp/CurrencyConverter'; // => App #4
import ProfilePic from './apps/ProfilePic/ProfilePic'; // => App #5
import TicTacToe from './apps/TicTacToe/TicTacToe'; // => App #6
// Difficult apps
import NetflixStore from './apps/NetflixStore/NetflixStore'; // => App #7
import UserAPI from './apps/UserAPI/UserAPI'; // => App #8
import ChuckAPI from './apps/UserAPI/ChuckAPI'; // => App #8(a)
import GithubAPI from './apps/UserAPI/GithubAPI'; // => App #8(b)
import ReduxApp from './apps/ReduxApp/src/ReduxApp'; // => App #9

// LogBox.ignoreAllLogs();

function App(props) {
  return (
    <>
      <ReduxApp />
    </>
  );
}

ex