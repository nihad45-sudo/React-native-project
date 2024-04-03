import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';



const screens = {
   Home : {
    screen : Home
   },
   ReviewDetails : {
    screen:ReviewDetails, 
   } , 
   About : {
     screen : About
   }
}


const HomeStack = createStackNavigator (screens)

export default createAppContainer(HomeStack)
//This return a component that  we can render in the App.js and Home is the default Scren vas affiche r