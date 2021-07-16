import React,{useState} from 'react';
import { Text, Linking, View, Image,Dimensions, ImageBackground, Button, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth'; 
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';



function LoginScreen({navigation}){
    const windowWidth = Dimensions.get('window').width;
    const [show,setShow] =React.useState(false);
    const [visible,setVisible] =React.useState(true);

    function signin(){
        console.log("email=",email);
        auth()
        .signInWithEmailAndPassword(email.trim(), password)
        .then((ref) => {
          console.log(ref);
          
          
          console.log('User sign in successful');
          navigation.navigate("Profile");
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log(ref);
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.log(error);
        });
      }

      const [email, setEmail] = useState('');
    
      const [password, setPassword] = useState('');
        return(
            <View style={styles.container}>
                 <ImageBackground source={require('../assests/images/Background.png')}  style={styles.image}>
                 <Image style={{marginBottom:140}} source={require('../assests/images/Logo.png')} />
                 <Text style={{fontSize: 18, marginRight:187,fontWeight:'bold'}}>Welcome back!</Text>
             <Text style={{fontSize: 12, marginRight:210,marginBottom:25,color:'#797979'}}>Log In to Continue</Text>
                 <Text style={{fontSize: 16, marginRight:225,fontWeight:'bold'}}>Enter Email</Text>
          <TextInput
         
          placeholder='Enter your Email'
          value={email}
          style={{
            marginBottom:15,
            height: 40, borderColor: 'black',width:0.8*windowWidth, borderWidth: 1, borderRadius: 10, backgroundColor: 'transparent'
          }}
          onChangeText={text => setEmail(text)}
          value={email}
        />
    
      
         <Text style={{fontSize: 16, marginRight:195,fontWeight:'bold'}}>Enter Password</Text>
         <TextInput
         
         secureTextEntry={visible}
     
         right={<TextInput.Icon size={20} onPress={
          ()=>{
          setVisible(!visible)
          setShow(!show)

          }} 
          name={show==false ? 'eye-outline' : 'eye-off-outline'} />}
         placeholder='Enter your Password'
         value={password}
         style={{
          height: 40, borderColor: 'black', borderWidth: 1, width:0.8*windowWidth, borderRadius: 10, backgroundColor: 'transparent'
        }}
         onChangeText={text => setPassword(text)}
         value={password}
        />
        <Text style={{color: 'black',fontSize: 14, marginRight:190,fontWeight:'bold'}}
      onPress={() => Linking.openURL('https://hackrx2-health-app.herokuapp.com/auth/forgotpassword')}>
  Forgot Password?
</Text>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{backgroundColor:'transparent',padding:15,borderRadius:12,marginTop:120,marginRight:0.28*windowWidth}} onPress={() =>navigation.navigate('SignUp')}>
  <Text>SIGNUP</Text>
</TouchableOpacity>
<TouchableOpacity style={{backgroundColor:'#8176BF',padding:15,borderRadius:12,marginTop:120,}} onPress={() => signin()}>
  <Text>LOGIN</Text>
</TouchableOpacity>
    </View>
        
        
                 </ImageBackground>
                
            </View>
        );
    }
    
    
    const styles = StyleSheet.create({
        container: {
          flex: 2,
          
        },
        image: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        Button: {
    
          height:40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius:10,
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: 'yellow'
        },
      
      
     
    
        text: {
          color: "white",
          fontSize: 42,
          lineHeight: 84,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "#000000c0"
        }
      });
    
      export default LoginScreen;
