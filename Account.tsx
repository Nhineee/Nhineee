import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
// Import vector icons
// import Icon from 'react-native-vector-icons/Feather';
// // import {FaBell} from 'react-icons/fa'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    Modal,

} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Alert } from 'react-native';
import { TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { Image } from 'react-native';


function Account({ navigation }): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [modalSOVisible, setModalSOVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <Icon name='arrow-left' style={styles.icon} />
                </TouchableOpacity>

                <Text style={styles.title}>My Account</Text>
                <TouchableOpacity>
                    <Text style={[styles.title,{color:'#EA4463'}]}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Content}>
                <View style={[styles.wrap, { marginTop: 50 }]}>
                    <View style={styles.avatar}>
                        {/* When click btn, user can change their avatar */}
                        <TouchableOpacity>
                            <Image
                                style={styles.avatarImg}
                                source={{
                                    uri: 'https://img.freepik.com/free-vector/cute-bear-holding-honeycomb-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-7331.jpg?w=2000',
                                }}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.wrapForm}>
                    <View style={styles.inforWrap}>
                        <View style={styles.infor}>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Icon name='user' style={styles.icon} />
                                <TextInput placeholder='Username' placeholderTextColor={'white'} style={styles.textStyle} />
                            </View>

                            {/* When click btn, user can edit their name */}
                            <TouchableOpacity>
                                <Icon name='edit-3' style={styles.icon} />
                            </TouchableOpacity>

                        </View>

                        <View style={[styles.infor, { borderTopWidth: 1, borderColor: '#4E4E4E', gap: 10, justifyContent: 'flex-start' }]}>
                            <Icon name='mail' style={styles.icon} />
                            <Text style={styles.textStyle}>123@gmail.com</Text>

                        </View>
                    </View>
                </View>

                <View style={styles.wrap}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: '#EA4463', }]}>
                        <Text style={styles.title}>Change Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.wrap, { paddingVertical: 20, marginHorizontal: 20 }]}>
                    <TouchableOpacity style={[styles.btn, { borderColor: '#EA4463', borderWidth: 1 }]} onPress={() => setModalSOVisible(true)}>
                        <Text style={[styles.title, { color: '#EA4463' }]}>Sign Out</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {/* Modal cho Sign Out btn */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalSOVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalSOVisible(!modalSOVisible);
                }}
            >
                <View style={styles.centerView}>
                    <View style={[styles.modalView]}>
                        <View style={styles.wrapContent}>
                            <Text style={[styles.title]}>Sign Out</Text>
                            <Text style={[styles.title, { fontWeight: '300', color: '#9D9D9D' }]}>Are you sure you want to sign out?</Text>
                        </View>
                        <View style={styles.wrapBTN}>
                            <TouchableOpacity style={[styles.btn, { borderColor: '#EA4463', borderWidth: 2 }]}>
                                <Text style={[styles.title, { color: '#EA4463' }]}>Sign Out</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn, { backgroundColor: '#EA4463' }]} onPress={() => setModalSOVisible(false)}>
                                <Text style={[styles.title]}>Cancel</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1F22'
    },
    icon: {
        fontSize: 25,
        color: '#EAEAEA',

    },
    Top: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    textStyle: {
        color: 'white'
    },
    avatarImg: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    avatar: {
        width: 120,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrap: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    inforWrap: {
        // paddingHorizontal: 10,
        margin: 20
    },
    infor: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:'red',
        height: 70,
        justifyContent: 'space-between'

    },
    btn: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10
    },
    wrapContent: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    wrapBTN: {
        gap: 10
    },

    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: '#2E3135',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        flexDirection: 'column'
    },
})

export default Account;