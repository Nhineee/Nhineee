//=> Sửa file thành SignIn.tsx

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





function SignIn({ navigation }): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [modalVisible, setModalVisible] = useState(false);
    /////////// call api
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Login = () => {
        fetch(`http://192.168.1.4:8090/api/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return;
            })
            .then(response => {
                // Xử lý phản hồi thành công từ server
                Alert.alert('success', 'Login success');
            })
            .catch(error => {
                // Xử lý lỗi từ server
                console.log(error.message);
                // Hiển thị thông báo lỗi cho người dùng
                // Ví dụ:
                Alert.alert("Error", "An error occurred. Please try again later.");
            });
    };

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
                    <View >
                        <Text style={styles.logoText}>Sign In</Text>
                        <Text style={styles.textStyle}>Welcome back to Taskade</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.signInOption}><Text style={styles.textOption} > <Image
                            style={styles.ggLogo}
                            source={require('./Image/gglogo.png')}
                        />  Sign in with Google</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.signInOption}><Text style={styles.textOption}> <Image
                            style={styles.ggLogo}
                            source={require('./Image/faceLogo.png')}
                        />  Sign in with Facebook</Text></TouchableOpacity>

                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Username or email'
                            placeholderTextColor={'#92969C'}
                            value={username}
                            onChangeText={text => setUsername(text)}
                        ></TextInput>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Password'
                            placeholderTextColor={'#92969C'}
                            secureTextEntry
                            value={password}
                            onChangeText={text => setPassword(text)}
                        ></TextInput>
                    </View>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}



                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Image
                                style={styles.logo}
                                source={require('./Image/logo.png')}
                            />
                            <View style={styles.modalTextView}>
                                <Text style={[styles.modalText, { fontWeight: 'bold', fontSize: 25 }]}>Forgot Password ?</Text>
                                <Text style={[styles.modalText]}>Please enter the email your used when signing up to receive reset instrusctions</Text>
                                <TextInput style={[styles.inputStyle, { marginTop: 10 }]} placeholder='Email Address' placeholderTextColor={'#92969C'} ></TextInput>
                            </View>

                            <Pressable
                                style={styles.buttonReset}
                                onPress={() => setModalVisible(false)}>
                                <Text style={styles.poptextStyle}>Reset Password</Text>
                            </Pressable>
                        </View>
                    </View>


                </Modal>
                <Pressable onPress={() => setModalVisible(true)} style={{ marginTop: 10 }}>
                    <Text style={styles.textStyle}>Forgot Password?</Text>
                </Pressable></View>



            <View style={styles.loginButtonContainer}>
                <View>
                    <TouchableOpacity style={styles.button} onPress={(Login) => navigation.navigate('home')}><Text style={{ color: 'white' }}>Sign In</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={styles.textStyle}> Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signUp')}><Text style={styles.textStyleSU}> Sign Up</Text></TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1F22',

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
        marginBottom: 10,
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
        alignSelf: 'center'
    },
    textInput: {
        color: '#94989E',
    },
    ggLogo: {
        height: 15,
        width: 15,
    },
    signInOption: {
        width: 320,
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
        width: 320,
        height: 40,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#1C1F22',
        color: 'white'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#1D1F22',
        borderRadius: 20,
        padding: 35,
        elevation: 10,


    },
    modalTextView: {
        marginTop: 20,
    },

    buttonReset: {
        marginTop: 15,
        borderRadius: 5,
        width: 320,
        height: 40,
        backgroundColor: '#EA4463',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,

    },
    poptextStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    modalText: {
        marginBottom: 10,
        color: 'white'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 22,


    },
});


export default SignIn;