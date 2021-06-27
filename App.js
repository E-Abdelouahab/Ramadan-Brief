import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native'
import { StyleSheet, Text, View } from 'react-native';
import FindBreakfast from './app/breakfasts/screens/FindBreakfast'
import AddBreakfast from './app/breakfasts/screens/AddBreakfast'
import AddAssistance from './app/assistances/screens/AddAssistance'
import FindAssistance from './app/assistances/screens/FindAssistance'

export default function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/addBreakfest" component={AddBreakfast} />
        <Route exact path="/findBreakfest" component={FindBreakfast} />
        <Route exact path="/" component={AddAssistance} />
        <Route exact path="/findAssistance" component={FindAssistance} />
      </Switch>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  
});
