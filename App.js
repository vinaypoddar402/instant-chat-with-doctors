import * as React from 'react';
import { Button, View , Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ImageSlider from 'react-native-image-slider';
import HomeScreen from './screens/homescreen';
import ProfileScreen from './screens/profilescreen';
import NotificationsScreen from './screens/notificationscreen';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screens/signupscreen';
import LoginScreen from './screens/loginscreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => (
<Stack.Navigator initialRouteName='SignUp' >
  <Stack.Screen name='SignUp' component={SignUpScreen}
   options={{ header: () => null }}/>
    <Stack.Screen name='Login' component={LoginScreen} 
    options={{ header: () => null }}/>
     <Stack.Screen name='Home' component={HomeScreen} />
  <Stack.Screen name ='Notifications' component={NotificationsScreen} />
</Stack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        
        <Drawer.Screen name="Notification" component={NotificationsScreen}/>
        <Drawer.Screen name="Profile" component={ProfileScreen}/>
        <Drawer.Screen name="Home" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}