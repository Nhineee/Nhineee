
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




function Start({navigation}): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Image
                    style={styles.logo}
                    source={require('./Image/logo.png')}
                />
                <Text style={styles.logoText} > taskade</Text>
            </View>

            <View style={styles.logoContainer}>
                <Image
                    style={styles.signInImage}
                    source={require('./Image/signInImage.png')}
                />
            </View>

            <View style={styles.loginButtonContainer}>
                <View>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signIn')}>
                            <Text style={{ color: 'white' }}>Login</Text>
                        </TouchableOpacity>    
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={styles.textStyle}> Don't have an account?</Text>
                    <TouchableOpacity ><Text style={styles.textStyleSU} onPress={() => navigation.navigate('signUp')}> Sign Up</Text></TouchableOpacity>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flex: 2,
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
        width: 200,
        height: 40,
        backgroundColor: '#EA4463',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: '#999999'
    },
    textStyleSU: {
        color: '#D9405D'
    },
    logoText: {
        fontFamily: 'Comfortaa',
        color: 'white',
        fontSize: 40,
    },
    logo: {
        borderRadius: 180,
        width: 70,
        height: 70,
    },
    signInImage: {
        height: 310,
        width: 310
    }

});


export default Start;
