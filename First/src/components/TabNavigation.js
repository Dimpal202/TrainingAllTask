import React from "react";
import { Image,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import VideoExample from './pages/VideoExample'
import Api from './pages/Api'
// import Bag from './pages/Bag'
import Manageprofile from './pages/Manageprofile'

const Tab = createBottomTabNavigator();
const TabNavigation = ({navigation}) => {
    
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel:false,
          }}    
          >
             <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon:({focused})=>(
                    <Image source={require('../assets/home.png')} 
                    style={{
                        tintColor: focused ? '#33EDA8' :'#000'
                    }}/>
                )
            }} />
              <Tab.Screen name="VideoExample" component={VideoExample} options={{
                tabBarIcon:({focused})=>(
                    <Image source={require('../assets/video.png')} 
                    style={{
                        tintColor: focused ? '#33EDA8' :'#000'
                    }}/>
                )
            }} />
               <Tab.Screen name="Api" component={Api} options={{
                tabBarIcon:({focused})=>(
                    <Image source={require('../assets/hand.png')} 
                    style={{
                        tintColor: focused ? '#33EDA8' :'#000'
                    }}/>
                )
            }} />
                  {/* <Tab.Screen name="Bag" component={Bag} options={{
                tabBarIcon:({focused})=>(
                    <Image source={require('../assets/bag.png')} 
                    style={{
                        tintColor: focused ? '#33EDA8' :'#000'
                    }}/>
                )
            }} /> */}
                  <Tab.Screen name="Manageprofile" component={Manageprofile} options={{
                tabBarIcon:({focused})=>(
                    <Image source={require('../assets/user.png')} 
                    style={{
                        tintColor: focused ? '#33EDA8' :'#000'
                    }}/>
                )
            }} />
        </Tab.Navigator>
    );
};
export default TabNavigation;