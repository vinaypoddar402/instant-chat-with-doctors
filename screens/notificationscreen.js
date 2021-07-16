import * as React from 'react';
import { Button, View , Image} from 'react-native';
import ImageSlider from 'react-native-image-slider';


function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{height:300,width:300,alignItems:'center',justifyContent:'center'}}>
        <ImageSlider images={[
         'http://placeimg.com/640/480/any',
         'https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg',
         'http://placeimg.com/640/480/any'
        ]}/> 
        </View>
      </View>
    );
  }

export default NotificationsScreen;