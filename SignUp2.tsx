//Sửa file thành SignUp.tsx

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    Alert,
    Modal,
    Pressable,
    Touchable,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Image,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function SignUp({navigation}): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,


    };
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Register = () => {
        fetch(`http://192.168.1.4:8090/api/register`, {
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify ({
              "email": email,
              "username": username,
              "password": password
          })
        })
        .then(response => {
          if(!response.ok){
            Alert.alert('Sign up failed');
          } else {
            Alert.alert('Successfully registered');
          }
          
        })
      }



    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>

                <Image
                    style={styles.logo}
                    source={require('./Image/logo.png')}
                />




            </View>
            <View style={styles.logoContainer}>
                <View>
                    <View>
                        <Text style={styles.logoText}>Sign Up</Text>
                        <Text style={styles.textStyle}>Create your free account</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <TouchableOpacity style={styles.signInOption}><Text style={styles.textOption} > <Image
                            style={styles.ggLogo}
                            source={require('./Image/gglogo.png')}
                        />  Sign up with Google</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.signInOption}><Text style={styles.textOption}> <Image
                            style={styles.ggLogo}
                            source={require('./Image/faceLogo.png')}
                        />  Sign up with Facebook</Text></TouchableOpacity>
                    </View>


                </View>

                <View >
                <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <TextInput 
                            style={styles.inputStyle} 
                            placeholder='Email' 
                            placeholderTextColor={'#92969C'}
                            onChangeText={text => setEmail(text)}
                            ></TextInput>
                        <TextInput 
                            style={styles.inputStyle} 
                            placeholder='Username' 
                            placeholderTextColor={'#92969C'} 
                            onChangeText={text => setUsername(text)}
                            ></TextInput>
                        <TextInput 
                            style={styles.inputStyle} 
                            placeholder='Password' 
                            placeholderTextColor={'#92969C'} 
                            secureTextEntry
                            onChangeText={text => setPassword(text)}
                            ></TextInput>
                    </KeyboardAvoidingView>


                </View>


            </View>


            <View style={styles.loginButtonContainer}>
                <View>
                    <TouchableOpacity style={styles.button}><Text style={{ color: 'white' }}onPress={Register}>Sign Up</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={styles.textStyle}> Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signIn')}><Text style={styles.textStyleSU}> Sign In</Text></TouchableOpacity>

                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1F22'
    },
    nameContainer: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //marginHorizontal:20
    },
    loginButtonContainer: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 5,
        width: 220,
        height: 40,
        backgroundColor: '#EA4463',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        //marginTop:10,
        color: '#999999'
    },
    textStyleSU: {
        color: '#D9405D'
    },
    logoText: {
        fontFamily: 'Comfortaa',
        color: 'white',
        fontSize: 30,
    },
    logo: {
        borderRadius: 180,
        width: 120,
        height: 120,
        alignSelf:'center'
    },
    signInImage: {
        height: 300,
        width: 300
    },
    textInput: {

        color: '#94989E',


    },
    ggLogo: {
        height: 15,
        width: 15,

    },
    signInOption: {
        width: 300,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#2D3034',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#25282C'

    },
    textOption: {
        color: 'white'
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#2D3034',
        borderRadius: 8,
        width: 300,
        height: 40,
        marginTop: 10,
        backgroundColor: '#1C1F22',
        padding: 10
    },







});


export default SignUp;