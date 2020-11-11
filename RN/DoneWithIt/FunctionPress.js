import React from 'react';
import {View, Text} from 'react-native';
import AppButton from './app/components/AppButton';
import Screen from './app/components/Screen';
import AppText from './app/components/AppText';

/**
 * Normal functions aka Named functions do not work in Functional conponents
 * They always use arrow functions
 */
// normalFunctionPress () {
//     console.log('Normal function press!');
// };

export default function FunctionPress() {
  namedFunctionPress = () => {
    console.log('Normal function press!');
  };

  const functionExpression = (name) => {
    console.log(`Function Expression press! with ${name}`);
    setTimeout(() => {
      console.clear();
    }, 1000);
  };

  return (
    <Screen>
      <AppText> Functional Component </AppText>

      {/* 
            Cannot directly pass the name of arrow fn as a reference.
            <AppButton title="Function Press 1" onPress={normalFunctionPress} />  
        */}

      {/* This works. Calling a function by assigning it to () => fn */}
      <AppButton
        title="Named Function Press"
        onPress={() => namedFunctionPress()}
      />

      {/* 
        "this" keyword call gives undefined 
        <AppButton
        title="Function Press 3"
        onPress={this.normalFunctionPress()}
      /> */}

      {/* 
        This direct invocation of the function causes the function to call as soon as the the component loads
        <AppButton title="Function Press" onPress={normalFunctionPress()} /> 
      */}

      {/*  */}
      <AppButton
        title="Function Expression Press"
        onPress={() => functionExpression()}
      />

      <AppButton title="Function Press" onPress={() => {}} />

      <AppButton title="Function Press" onPress={() => {}} />

      <AppButton title="Function Press" onPress={() => {}} />

      <AppButton title="Function Press" onPress={() => {}} />
    </Screen>
  );
}
