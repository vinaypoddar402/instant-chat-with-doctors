import * as React from 'react';
import { Button, View , Image} from 'react-native';
import ImageSlider from 'react-native-image-slider';


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <View style={{height:50,width:50,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../assests/photo.jpg')}
        height='50%'
        width='50%'
         />
        </View>
        
      </View>
    );
  }

  export default HomeScreen;