import React, {Component} from 'react';

import Screen1 from './Screens/Stack1';
import Screen2 from './Screens/Stack2';
import Screen3 from './Screens/Stack3';
import Tab1 from './Screens/Tab1';
import Tab2 from './Screens/Tab2';
import Tab3 from './Screens/Tab3';
import Feed from './Screens/Feed';
import Details from './Screens/Details';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

class Navigator extends Component {
  createMainStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          title: 'My Feed',
          headerStyle: {
            backgroundColor: 'salmon',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'My Feed',
          headerStyle: {
            backgroundColor: 'navy',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Bottom Tabs"
        children={this.createBottomTabs}
        options={{
          title: 'My Feed',
          headerStyle: {
            backgroundColor: 'salmon',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Top Tabs"
        children={this.createTopTabs}
        options={{
          title: 'My Feed',
          headerStyle: {
            backgroundColor: 'salmon',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );

  createTopTabs = (props) => {
    console.log(props);
    return (
      <TopTab.Navigator>
        <TopTab.Screen
          name="Tab 1"
          component={Tab1}
          options={{
            title: 'Hello',
          }}
        />
        <TopTab.Screen name="Tab 2" component={Tab2} />
        <TopTab.Screen name="Tab 3" component={Tab3} />
      </TopTab.Navigator>
    );
  };

  createBottomTabs = () => {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Tab 1"
          component={Tab1}
          options={{
            title: 'Feed',
            tabBarColor: 'red',
          }}
        />
        <BottomTab.Screen name="Tab 2" component={Tab2} />
        <BottomTab.Screen name="Tab 3" component={Tab3} />
      </BottomTab.Navigator>
    );
  };
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={this.createMainStack} />
          <Drawer.Screen name="Contacts" component={Screen1} />
          <Drawer.Screen name="Favourites" component={Screen2} />
          <Drawer.Screen name="Settings" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
