import React from 'react';
import AppButton from '../app/components/AppButton';
import Screen from '../app/components/Screen';
import AppText from '../app/components/AppText';

/**
 * Normal functions aka Named functions do not work in Functional conponents until they are written explicitly with the keyword "function" i.e
 * You cannot have functionName() {...} because 'this' keyword doesn't apply globally.
 * But you can have - function MyFunction() {...}
 * They always use arrow functions for any function call
 */

export default function FunctionPress() {
  function normalFunctionPress() {
    console.log('Normal function press!');
  }

  arrowFunctionPress = () => {
    console.log('Arrow function press!');
  };

  functionExpression = (name) => {
    console.log(`Function Expression press! with ${name}`);
    setTimeout(() => {
      console.clear();
    }, 1000);
  };

  return (
    <Screen>
      <AppText> Functional Component </AppText>

      {/* This works. Calling a function by assigning it to () => fn */}
      <AppButton
        title="Normal Function Press"
        onPress={() => normalFunctionPress()}
      />
      
      <AppButton
        title="Normal Function Press"
        onPress={normalFunctionPress()}
      />

      <AppButton
        title="Arrow Function Press"
        onPress={() => arrowFunctionPress()}
      />

      {/* Arrow function and function expression work the same and with same function call */}
      <AppButton
        title="Function Expression Press"
        onPress={() => functionExpression('Omer')}
      />

      {/* 
            Cannot directly pass the name of arrow fn as a reference.
            <AppButton title="Function Press 1" onPress={normalFunctionPress} />  
        */}

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
    </Screen>
  );
}
