import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import AppButton from '../app/components/AppButton';
import Screen from '../app/components/Screen';
import AppText from '../app/components/AppText';

/**
 * All function calls in class components have to be called using 'this' keyword.
 * If a function call has to be made immediately we use this.functionCall();
 * If we want to execute only on an action we call it using arrow fn 
 * {() => this.functionCall()} or {this.functionCall()}
 */

globalFunction = () => {
  console.log('Global function');
};

export default class ClassPress extends Component {
  normalFunction() {
    console.log('Normal function executed immediately!');
  }
  normalFunctionWithArrowInvocation() {
    console.log('Normal function executed on press only!');
  }

  arrowFunction = () => console.log('Arrow function called!');

  render() {
    return (
      <Screen>
        <AppText>Class Component</AppText>
        <AppButton title="Clear" onPress={() => console.clear()} />

        {/* Global functions to be called without this keyword */}
        <AppButton
          title="Global Function Press"
          onPress={() => globalFunction()}
        />

        {/* The normal function has to be called using this keyword and executes as soon as component loads */}
        <AppButton
          title="Normal Function Press"
          onPress={this.normalFunction()}
        />

        {/* Works same as above */}
        <AppButton
          title="Arrow Function Arrow call 1"
          onPress={this.arrowFunction()}
        />

        {/* When called using () => {} syntax, the normal function is executed only on press of the button */}
        <AppButton
          title="Normal Function Arrow fn call"
          onPress={() => this.normalFunctionWithArrowInvocation()}
        />

        <AppButton
          title="Arrow Function Arrow call 2"
          onPress={() => this.arrowFunction()}
        />

        <AppButton
          title="Arrow Function Arrow call 3"
          onPress={this.arrowFunction}
        />

        {/* When called using () => {} syntax, the normal function is executed only on press of the button but returns undefined because of no 'this keyword reference'
         <AppButton
          title="Arrow Function Arrow call"
          onPress={() => arrowFunction()}
        /> */}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
