import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import { 
    AdMobBanner, 
    AdMobInterstitial, 
    PublisherBanner,
    AdMobRewarded
  } from 'react-native-admob'
  
class HomeScreen extends React.Component{
   
    render (){
        return(
            <View>

            <Text>Admob deneme</Text>
            <AdMobBanner
   adSize="smartBannerPortrait"
  adUnitID="ca-app-pub-3940256099942544/6300978111"
  testDevices={["EMULATOR"]}
  onAdFailedToLoad={error => console.error(error)}
/>
              </View>
        );
    }
}
export default HomeScreen;
