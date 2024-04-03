import React , {useState} from 'react';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
import * as Font from 'expo-font';
import Navigator from './routes/homeStack'



//Load those fonts 
const getFonts = ()=>  Font.loadAsync({
  'nunito-regular': require('./assets/fonts/NunitoSans_7pt_Condensed-Regular.ttf'),
  'nunito-black' : require('./assets/fonts/NunitoSans_7pt_Expanded-Black.ttf')

})

export default function App() {
  // const [fontsLoaded , setFontsLoaded] = useState(false)
  // if(fontsLoaded) {
  //   return (
  //     <Home />
      
  //   );
  // } else {
  //   return (
  //     <AppLoading 
  //      startAsync={getFonts}
  //      onFinish = {()=> setFontsLoaded(true)}
  //   />
  //   )

  // }
  return (
    <Navigator/>
  )
 
}



