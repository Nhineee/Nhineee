/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
// Import vector icons
import Icon from 'react-native-vector-icons/Feather';
// import {FaBell} from 'react-icons/fa'
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




function Noti(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [modalMarkVisible, setModalMarkVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <TouchableOpacity >
                    <Icon name='menu' style={styles.options} />
                </TouchableOpacity>
                <Text style={[styles.fontStyle]}>Activity</Text>
                <TouchableOpacity>
                    <Icon name='check' style={styles.options} onPress={() => setModalMarkVisible(true)} />
                </TouchableOpacity>
            </View>
            <View style={styles.Middle}>
                <ScrollView>
                    {/* Option 1 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle, {flexWrap:'wrap'}]}>Getting started in Workspace has been updated.</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 2 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 3 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 4 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 5 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 6 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 7 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 8 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 9 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 10 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 11 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Option 12 */}
                    <TouchableOpacity style={styles.project}>
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>
                        <View style={styles.projectTitle}>
                            <Text style={[styles.pTitle]}>Getting started</Text>
                            <Text style={styles.miniText}>9 days ago</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
            <View style={styles.Bottom}>
                <TouchableOpacity>
                    <Icon name="search" style={styles.options} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="plus" style={[styles.options, { fontSize: 28 }]} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="bell" style={styles.options} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="settings" style={styles.options} />
                </TouchableOpacity>
            </View>

            {/* Modal Check Button */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalMarkVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalMarkVisible(!modalMarkVisible);
                }}
            >
                <View style={styles.centerView}>
                    <View style={styles.modalView}>
                        <View style={styles.wrapContent}>
                            <Text style={[styles.pTitle]}>Mark all as read</Text>
                            <Text style={[styles.pTitle,{fontWeight:'300', color:'#9D9D9D'}]}>Are you sure you want to mark all as read?</Text>
                        </View>
                        <View style={styles.wrapBTN}>
                            <TouchableOpacity style={[styles.btnStyle, {borderColor:'#E74646', borderWidth:2}]}>
                                <Text style={[styles.pTitle, {color:'#E74646'}]}>Mark all as read</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnStyle, {backgroundColor:'#E74646'}]} onPress={()=>setModalMarkVisible(false)}>
                                <Text style={[styles.pTitle]}>Cancel</Text>
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
    Top: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    Middle: {
        flex: 1,
    },
   
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        flexDirection:'column'
    },
    Bottom: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#7F8487'
    },
    wrapContent: {
        alignItems:'center',
        justifyContent:'center',
        marginBottom:30
    },
    wrapBTN:{
        gap: 10
    },

    btnStyle:{
        // backgroundColor: '#E74646',
        width: 300,
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        borderRadius: 5
    },
    fontStyle: {
        fontSize: 18,
        color: '#EAEAEA'
    },
    options: {
        fontSize: 25,
        color: 'white'
    },
    project: {
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'grey',


    },
    projectTitle:{
        marginRight:40,
        paddingHorizontal: 10
    },

    iconW: {
        width: 35,
        height: 35,
        borderColor: 'pink',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 18,
        color: '#EAEAEA',

    },
    miniText: {
        color: 'white',
        fontWeight:'300'
    },
    noteText: {
        alignSelf: 'center',
        color: '#EAEAEA',
        fontWeight: 'bold',
        fontSize: 15
    },
    pTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },

});
export default Noti
