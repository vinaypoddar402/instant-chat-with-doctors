import React,{useState} from 'react';
import { Text, View, Image,Dimensions, ImageBackground, Button, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth'; 
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';





function SignUpScreen({navigation}){
  const windowWidth = Dimensions.get('window').width;
  const [show,setShow] =React.useState(false);
  const [visible,setVisible] =React.useState(true);
  function pass(){
    console.log("signup email=",email);
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then((ref) => {
      console.log(ref);
      console.log('User account created & signed up!');
      navigation.navigate("Login");
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.log(error);
    });
  }
  const [email, setEmail] = useState('');
  const [fullname, setfullName] = useState('');
  const [password, setPassword] = useState('');
    return(
        <View style={styles.container}>
             <ImageBackground source={require('../assests/images/Background.png')}  style={styles.image}>
             <Image style={{marginBottom:130}} source={require('../assests/images/Logo.png')} />
             <Text style={{fontSize: 18, marginRight:160,fontWeight:'bold'}}>Create an Account</Text>
             <Text style={{fontSize: 12, marginRight:110,marginBottom:25,color:'#797979'}}>Ease your consultation hassle with us</Text>
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

      <Text style={{fontSize: 16, marginRight:198,fontWeight:'bold'}}>Enter Fullname</Text>
      <TextInput
      
      placeholder='Enter your Name'
      value={fullname}
      style={{
        marginBottom:15,
        height: 40, borderColor: 'black', borderWidth: 1, width:0.8*windowWidth, borderRadius: 10, backgroundColor:'transparent'
      }}
      onChangeText={text => setfullName(text)}
      value={fullname}
    />
     <Text style={{fontSize: 16, marginRight:194,fontWeight:'bold'}}>Enter Password</Text>
     <TextInput
     
     secureTextEntry={visible}
     
     right={<TextInput.Icon size={20} onPress={
       ()=>{
         setVisible(!visible)
         setShow(!show)

       }} name={show==false ? 'eye-outline' : 'eye-off-outline'} />}
     
     placeholder='Enter your Password'
     value={password}
     style={{
      height: 40, borderColor: 'black', borderWidth: 1,width:0.8*windowWidth,borderRadius: 10, backgroundColor: 'transparent'
    }}
     onChangeText={text => setPassword(text)}
     value={password}
    />
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{backgroundColor:'#8176BF',padding:15,borderRadius:12,marginTop:120,marginRight:0.28*windowWidth}} onPress={() => pass()}>
  <Text>SIGNUP</Text>
</TouchableOpacity>
<TouchableOpacity style={{backgroundColor:'transparent',padding:15,borderRadius:12,marginTop:120,}} onPress={() => navigation.navigate('Login')}>
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
      position: 'relative'
      
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

  export default SignUpScreen;