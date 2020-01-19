import React from 'react';
import {ExpoConfigView} from '@expo/samples';
import Settings from "../mycomponent/SettingsClass";

export default function SettingsScreen() {
  return <Settings />;
}

SettingsScreen.navigationOptions = {
  header: null,
};

