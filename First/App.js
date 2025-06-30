
import React, { useEffect, useState } from 'react';
import { } from 'react-native';
import Splash from './src/components/Splash';
import Getstart from './src/components/Getstart'
import Login from './src/components/Login'
import Signup from './src/components/Signup'
import ForgotPassword from './src/components/ForgotPassword';
import TabNavigation from './src/components/TabNavigation'
import Wew from './src/components/Wew';
import Workout from './src/components/Workout';
import Intense from './src/components/Intense';
import Often from './src/components/Often';
import Apicall from './src/components/Apicall';
import Twoxweek from './src/components/Twoxweek';
import Syncapple from './src/components/Syncapple'
import Applehealthconnected from './src/components/Applehealthconnected';
import Getting from './src/components/Getting';
import Radio from './src/components/Radio';
import Discoverimg from './src/components/Discoverimg';
import Pickerimg from './src/components/Pickerimg';
import Pickerexe from './src/components/Pickerexe';
import DateTime from './src/components/DateTime';
import Dt from './src/components/Dt';
import SwitchExample from './src/components/SwitchExample';
import Basicpro from './src/components/Basicpro';
import Buttonexample from './src/components/Buttonexample';
import Contact from './src/components/Asyncstorage/Contact';
import CreateContact from './src/components/Asyncstorage/CreateContact';
import Asyncstorage from './src/components/Asyncstorage/Asyncstorage';
import Dublicateasync from './src/components/Asyncstorage/Dublicateasync';
import Audio from './src/components/Music/Audio';
import Animation from './src/components/Animation';
import Apiscreen from './src/components/Apiscreen.js';
import Editprofile from './src/components/Editprofile';
import Apiimagefatch from './src/components/Apiimagefatch';
import Createliveworkout from './src/components/Createliveworkout';
import Createliveworkdetails from './src/components/Createliveworkdetails';
import Testhe from './src/components/Testhe';
import Maps from './src/components/Maps';
import Map from './src/components/Map';
import Mapstwo from './src/components/Mapstwo';
import Mapsthree from './src/components/Mapsthree';
import Mapsfour from './src/components/Mapsfour';
import Multiplemap from './src/components/Multiplemap';
import Arraymaps from './src/components/Arraymaps';
import Test from './src/components/Test';
import Activityindicator from './src/components/Activityindicator';
import Imagebackground from './src/components/ImageBackground';
import Geolocationex from './src/components/Geolocationex';
import GeolocationExample from './src/components/GeolocationExample';
import Currentaddress from './src/components/Currentaddress';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Provider } from 'react-redux';
// import { Store } from './src/redux/store';


const Stack = createNativeStackNavigator();
function App() {
  const [issplace, Setissplace]= useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      Setissplace(false);
    },3000);   
  });

  return (
    // <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        initialRouteName:'Splash',
        headerShown: false
      }}>
        {issplace ? (<Stack.Screen name="Splash" component={Splash} />):null}
        <Stack.Screen name="Getstart" component={Getstart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Wew" component={Wew} />
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="Intense" component={Intense} />
        <Stack.Screen name="Often" component={Often} />
        <Stack.Screen name="Apicall" component={Apicall} />
        <Stack.Screen name="Twoxweek" component={Twoxweek} />
        <Stack.Screen name="Syncapple" component={Syncapple} />
        <Stack.Screen name="Applehealthconnected" component={Applehealthconnected} />
        <Stack.Screen name="Getting" component={Getting} />
        <Stack.Screen name="Radio" component={Radio} />
        <Stack.Screen name="Discoverimg" component={Discoverimg} />
        <Stack.Screen name="Pickerimg" component={Pickerimg} />
        <Stack.Screen name="Pickerexe" component={Pickerexe} />
        <Stack.Screen name="DateTime" component={DateTime} />
        <Stack.Screen name="Dt" component={Dt} />
        <Stack.Screen name="SwitchExample" component={SwitchExample} />
        <Stack.Screen name="Basicpro" component={Basicpro} />
        <Stack.Screen name="Buttonexample" component={Buttonexample} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="CreateContact" component={CreateContact} />
        <Stack.Screen name="Asyncstorage" component={Asyncstorage} />
        <Stack.Screen name="Dublicateasync" component={Dublicateasync} />
        <Stack.Screen name="Audio" component={Audio} />
        <Stack.Screen name="Animation" component={Animation} />
        <Stack.Screen name="Apiscreen" component={Apiscreen} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="Apiimagefatch" component={Apiimagefatch} />
        <Stack.Screen name="Createliveworkout" component={Createliveworkout} />
        <Stack.Screen name="Createliveworkdetails" component={Createliveworkdetails} />
        <Stack.Screen name="Testhe" component={Testhe} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Mapstwo" component={Mapstwo} />
        <Stack.Screen name="Mapsthree" component={Mapsthree} />
        <Stack.Screen name="Mapsfour" component={Mapsfour} />
        <Stack.Screen name="Multiplemap" component={Multiplemap} />
        <Stack.Screen name="Arraymaps" component={Arraymaps} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Activityindicator" component={Activityindicator} />
        <Stack.Screen name="Imagebackground" component={Imagebackground} />
        <Stack.Screen name="Geolocationex" component={Geolocationex} />
        <Stack.Screen name="GeolocationExample" component={GeolocationExample} />
        <Stack.Screen name="Currentaddress" component={Currentaddress} />
    
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}

export default App;
