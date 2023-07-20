//=> Sửa file thành Home.tsx

import React, { useState, useEffect, useRef } from 'react';
import type { PropsWithChildren } from 'react';

// import { FloatingAction } from "react-native-floating-action";
// import { useFloating, shift } from '@floating-ui/react-native';
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
    Image,
    KeyboardAvoidingView,
    Platform,

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


function Home({ navigation }): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [showModal, setShowModal] = useState(false);





    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [menuResponsive, setMenuResponsive] = useState(false);
    const [modalCreateW, setModalCreateW] = useState(false);
    const [modalDate, setModalDate] = useState(false);
    const [modalAssign, setModalAssign] = useState(false);
    const [modalTag, setModalTag] = useState(false);
    const [modalInvite, setModalInvite] = useState(false)

    
    const [taskname, setTaskname] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [due_date, setDue_date] = useState('');
    const [priority, setPriority] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const [projectname, setProjectname] = useState('');
    const [projectdes, setProjectdes] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');








    const [data, setData] = useState<Task[]>([]);
    const [modalEdit, setModalEdit] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Task | null>(null);
    const [modalTaskId, setModalTaskId] = useState(null);



    interface Task {
        taskid: number;
        taskname: string | null;
        status: string | null;
        description: string | null;
        due_date: string | null;
        priority: string | null;
        username: string | null;
        role: string | null;
        projectname: string | null;
        projectdes: string | null;
        start_date: string | null;
        end_date: string | null;
    }


    useEffect(() => {
        if (selectedItem) {
            setTaskname(selectedItem.taskname || '');
            setStatus(selectedItem.status || '');
            setDescription(selectedItem.description || '');
            setDue_date(selectedItem.due_date || '');
            setPriority(selectedItem.priority || '');
            setUsername(selectedItem.username || '');
            setRole(selectedItem.role || '');
            setProjectname(selectedItem.projectname || '');
            setProjectdes(selectedItem.projectdes || '');
            setStart_date(selectedItem.start_date || '');
            setEnd_date(selectedItem.end_date || '');

        }
    }, [selectedItem]);


    useEffect(() => {
        // Lấy dữ liệu từ API và cập nhật vào state
        fetch('http://192.168.1.4:8090/api/task')
            .then(response => response.json())
            .then(data => setData(data[0]))
            .catch(error => console.error(error));


    }, []);

    function fetchData() {
        // Lấy dữ liệu từ API và cập nhật vào state
        fetch('http://192.168.1.4:8090/api/task')
            .then(response => response.json())
            .then(data => setData(data[0]))
            .catch(error => console.error(error));
    };

    


    const updateTask = () => {
        fetch(`http://192.168.1.4:8090/api/task/${modalTaskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "taskname": taskname,
                "status": status,
                "description": description,
                "due_date": due_date,
                "priority": priority,
                "username": username,
                "role": role,
                "projectname": projectname,
                "projectdes": projectdes,
                "start_date": start_date,
                "end_date": end_date,

            }),
        })
            .then(response => {
                if (response.ok) {
                    // Yêu cầu thành công
                    Alert.alert('Update success');
                    fetchData();
                } else {
                    // Yêu cầu không thành công
                    Alert.alert('Update failed');
                }
            })
            .catch(error => {
                // Xảy ra lỗi trong quá trình gửi yêu cầu
                console.error(error);
            });
    };

    const delTask = () => {
        fetch(`http:/192.168.1.4:8090/api/task/${modalTaskId}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response.ok) {
                    // Yêu cầu thành công
                    Alert.alert('Delete success');
                    fetchData();
                } else {
                    // Yêu cầu không thành công
                    Alert.alert('Delete failed');
                }
            })
            .catch(error => {
                // Xảy ra lỗi trong quá trình gửi yêu cầu
                console.error(error);
            });
    };


    const Add = () => {
        fetch(`http://192.168.1.4:8090/api/task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "taskname": taskname,
                "status": status,
                "description": description,
                "due_date": due_date,
                "priority": priority,
                "username": username,
                "role": role,
                "projectname": projectname,
                "projectdes": projectdes,
                "start_date": start_date,
                "end_date": end_date,
            })
        })
            .then(response => {
                if (!response.ok) {
                    Alert.alert('Add failed');
                } else {
                    Alert.alert('Successfully Add');
                    fetchData();

                }

            })
    }
    const handlePressEdit = (item: Task) => {
        setSelectedItem(item);
        setModalEdit(true);
    };

    // function handlePressEdit(item: Task) {
    //     throw new Error('Function not implemented.');
    // }

    return (
        <View style={styles.container} >
            <View style={styles.title}>
                <View style={styles.project}>
                    <TouchableOpacity onPress={() => setMenuResponsive(true)}>
                        <Icon name='menu' style={styles.options} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#EA4463' }}>Workspace</Text>
                </View>

                {/* Btn Invite  */}
                <TouchableOpacity onPress={() => setModalInvite(true)}>
                    <Icon name='user-plus' style={[styles.options, { color: '#EA4463' }]} />
                </TouchableOpacity>

            </View>
            <View style={styles.task}>
                <View style={styles.wrapContent}>
                    <View style={[styles.iconW, { backgroundColor: '#116D6E' }]}>
                        <Icon name='check-square' style={[styles.icon, { color: 'white' }]} />
                    </View>
                    <Text style={[styles.taskText, { fontSize: 18 }]}>Tasks</Text>
                </View>

                <Text style={[styles.taskText, { fontSize: 20 }]}>0</Text>
            </View>

            <View style={styles.WrapBigContent}>

                <Text style={styles.miniTitle}>MY TASKS</Text>

                <View style={styles.Projects}>
                    {/* Contain Project */}
                    <TouchableOpacity style={styles.project} onPress={() => navigation.navigate('App')}>
                    {/* <TouchableOpacity style={styles.project}> */}
                        <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                            <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                        </View>

                        <View style={styles.wrapContent}>
                            <Text style={styles.pTitle}>Getting started</Text>

                            {/* Contain Options */}
                            <View style={styles.note}>
                                {/* Btn Date */}
                                <TouchableOpacity style={styles.noteButton} onPress={() => setModalDate(true)}>
                                    <Icon name='calendar' style={styles.icon} />
                                    <Text style={styles.noteText}>Date</Text>
                                </TouchableOpacity>

                                {/* Btn Assign */}
                                <TouchableOpacity style={styles.noteButton} onPress={() => setModalAssign(true)}>
                                    <Icon name='user' style={styles.icon} />
                                    <Text style={styles.noteText}>Assign</Text>
                                </TouchableOpacity >

                                {/* Btn Tag */}
                                <TouchableOpacity style={styles.noteButton} onPress={() => setModalTag(true)}>
                                    <Icon name='tag' style={styles.icon} />
                                    <Text style={styles.noteText}>Tag</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </TouchableOpacity>

                <TouchableOpacity style={styles.project} onPress={() => navigation.navigate('App')}></TouchableOpacity>


                </View>
                <ScrollView >
                    {data.map((item) => (
                        <TouchableOpacity style={styles.viewText} onPress={() => { handlePressEdit(item); setModalTaskId(item.taskid) }}
                            key={item.taskid} >
                            <Text style={{ color: 'yellow', marginTop: 10, marginLeft: 10, marginBottom: 10, fontSize: 21, fontWeight: 'bold' }}>
                                <Text style={{ color: 'white', fontWeight: '900' }}>TASK:...</Text>{item.taskname}</Text>

                            <Text style={{ color: 'white', margin: 10, fontSize: 17, textDecorationLine: 'underline', fontWeight: 'bold' }}>
                                <Text style={{ color: '#EA4463', }}>Status:</Text> {item.status}</Text>
                            <Text style={{ color: 'white', margin: 5, fontSize: 17, fontWeight: 'bold', }}>
                                <Text style={{ color: '#EA4463', marginLeft: -10, fontWeight: 'bold' }}> Description:</Text> {item.description}</Text>
                            <Text style={{ color: 'white', margin: 10, fontSize: 17, marginBottom: 20, fontWeight: 'bold' }}>
                                <Text style={{ color: '#EA4463', marginLeft: 1, fontWeight: 'bold' }}>Due Date: </Text>{item.due_date}</Text>
                            <Text style={{ color: 'yellow', margin: 10, fontSize: 17, marginBottom: 20, fontWeight: 'bold' }}>
                                <Text style={{ color: 'white', marginLeft: 1, fontWeight: 'bold' }}>Priority: </Text>{item.priority}</Text>


                            <Text style={{ color: 'white', margin: 10, fontSize: 17, marginBottom: 5, textDecorationLine: 'underline', fontWeight: 'bold' }}>
                                <Text style={{ color: '#EA4463', fontWeight: 'bold' }}>Task for Assigmel: </Text> {item.taskname}</Text>
                            <Text style={{ color: 'yellow', margin: 10, fontSize: 17, marginBottom: 5, fontWeight: 'bold' }}>
                                <Text style={{ color: '#EA4463', fontWeight: 'bold' }}>Assigned to: </Text>{item.username}</Text>
                            <Text style={{ color: 'yellow', margin: 10, fontSize: 17, marginBottom: 20, fontWeight: 'bold' }}>
                                <Text style={{ color: 'white', marginLeft: 1, fontWeight: 'bold' }}>Role: </Text>{item.role}</Text>


                            <Text style={{ color: 'white', margin: 10, fontSize: 17, textDecorationLine: 'underline', fontWeight: 'bold' }}>
                                <Text style={{ color: '#EA4463', fontWeight: 'bold' }}>Project name: </Text>{item.projectname}</Text>
                            <Text style={{ color: 'white', margin: 10, fontSize: 17, fontWeight: 'bold' }}>
                                <Text style={{ color: '#EA4463', fontWeight: 'bold' }}>Project des: </Text>{item.projectdes}</Text>
                            <Text style={{ color: 'white', margin: 10, fontSize: 17, fontWeight: 'bold' }}>
                                <Text style={{ color: '#EA4463', fontWeight: 'bold' }}>Start date: </Text>{item.start_date}</Text>
                            <Text style={{ color: 'white', margin: 10, fontSize: 17, fontWeight: 'bold' }}>
                                <Text style={{ color: '#EA4463', fontWeight: 'bold' }}>End date: </Text>{item.end_date}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>



            </View>




            {/* Here is the Date Modal for Btn Date */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalDate}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { backgroundColor: '#333538' }]}>

                        <View style={[styles.flex, { width: 350, marginBottom: 10, paddingBottom: 10 }]}>
                            <TouchableOpacity onPress={() => setModalDate(false)}>
                                <Text style={styles.textDate}>Close</Text>
                            </TouchableOpacity>

                            <Text style={[styles.textDate, { fontWeight: 'bold' }]}>Due Date</Text>
                            <TouchableOpacity>
                                <Text style={[styles.textDate, { color: '#EA4463' }]}>Save</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.endDate}>
                            <Text style={styles.textDate}>End Date</Text>
                            <TouchableOpacity style={styles.Calendar}>
                                <Text style={styles.textDate}>13 Jul 2023</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            {/* Here is the Assign Modal for Btn Assign */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalAssign}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { backgroundColor: '#2E3135' }]}>

                        <View style={[styles.flex, { width: 350, marginBottom: 10, paddingBottom: 10 }]}>
                            <Text style={[styles.textDate, { fontWeight: '300' }]}>ASSIGN TO</Text>
                            <TouchableOpacity style={{}} onPress={() => setModalAssign(!modalAssign)}>
                                <Icon name='x' style={[styles.options, { color: 'white' }]} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.UserContainer}>
                            <TouchableOpacity style={styles.Infor}>
                                <View style={styles.avt}>
                                    {/* Contain User'Avatar */}
                                    <Image source={{ uri: "" }} />
                                </View>
                                {/* Contain User'Name */}
                                <Text style={styles.textDate}>Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Infor}>
                                <View style={styles.avt}>
                                    {/* Contain User'Avatar */}
                                    <Image source={{ uri: "" }} />
                                </View>
                                {/* Contain User'Name */}
                                <Text style={styles.textDate}>Name</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            {/* Here is the Tag Modal for Btn Tag */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalTag}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { backgroundColor: '#2E3135' }]}>

                        <View style={[styles.flex, { width: 350, marginBottom: 10, paddingBottom: 10 }]}>
                            <Text style={[styles.textDate, { fontWeight: '300' }]}>TAGS</Text>
                            <TouchableOpacity style={{}} onPress={() => setModalTag(!modalTag)}>
                                <Icon name='x' style={[styles.options, { color: 'white' }]} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.UserContainer}>
                            <TouchableOpacity style={styles.Infor}>
                                <Icon name='tag' style={[styles.icon, { color: '#FD7171' }]} />
                                {/* Contain Tag'Name */}
                                <Text style={styles.textDate}>Critial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Infor}>
                                <Icon name='tag' style={[styles.icon, { color: '#FE3737' }]} />
                                {/* Contain Tag'Name */}
                                <Text style={styles.textDate}>High</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Infor}>
                                <Icon name='tag' style={[styles.icon, { color: '#EE7925' }]} />
                                {/* Contain Tag'Name */}
                                <Text style={styles.textDate}>In Progress</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Infor}>
                                <Icon name='tag' style={[styles.icon, { color: '#FDCD26' }]} />
                                {/* Contain Tag'Name */}
                                <Text style={styles.textDate}>Medium</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Infor}>
                                <Icon name='tag' style={[styles.icon, { color: '#31C23F' }]} />
                                {/* Contain Tag'Name */}
                                <Text style={styles.textDate}>Low</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            <View style={styles.HorNav}>

                {/* Button Tìm kiếm */}
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Icon name="search" style={styles.options} />
                </TouchableOpacity>
                {/* <TouchableOpacity >
          <Text style={{color:'white',fontSize:30}}>+</Text>
           <Icon name="plus" style={[styles.options, { fontSize: 28 }]} onPress={HandPress} />
        </TouchableOpacity> */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalEdit}
                    onRequestClose={() => setModalEdit(false)}
                >

                    <View style={[styles.centeredViewAdd, { borderRadius: 40, borderColor: 'white' }]}>

                        <View style={styles.warpContainer}>
                            <ScrollView>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={[styles.textStyleAdd, { fontWeight: 'bold' }]}>Edit</Text>
                                    <TouchableOpacity onPress={() => setModalEdit(false)} ><Text style={styles.textStyleAdd}>Cancel</Text></TouchableOpacity>
                                </View>

                                <View style={[styles.inputStyle, { height: 580, borderRadius: 40, borderColor: 'white' }]}>
                                <KeyboardAvoidingView
                                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                        <TextInput
                                            style={{ color: 'white', margin: 10, fontSize: 20, fontWeight: 'bold' }}
                                            placeholder='Title...'
                                            placeholderTextColor={'#92969C'}
                                            value={selectedItem?.taskname ?? ''}
                                            onChangeText={(text) =>
                                                setSelectedItem((prevState) => ({
                                                    ...prevState,
                                                    taskname: text,
                                                }))
                                            }
                                        />
                                        <TextInput
                                            style={{ color: 'white', margin: 5, fontSize: 17, fontWeight: 'bold' }}
                                            value={selectedItem?.status ?? ''}
                                            placeholder='Status...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={(text) =>
                                                setSelectedItem((prevState) => ({
                                                    ...prevState,
                                                    status: text,
                                                }))
                                            }
                                        />
                                        <TextInput
                                            style={{ color: 'white', margin: 5, fontSize: 17, fontWeight: 'bold' }}
                                            value={selectedItem?.description ?? ''}
                                            placeholder='Description...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={(text) =>
                                                setSelectedItem((prevState) => ({
                                                    ...prevState,
                                                    description: text,
                                                }))
                                            }
                                        />
                                        <TextInput
                                            style={{ color: 'white', margin: 5, fontSize: 17, fontWeight: 'bold' }}
                                            value={selectedItem?.due_date ?? ''}
                                            placeholder='Due Date...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={(text) =>
                                                setSelectedItem((prevState) => ({
                                                    ...prevState,
                                                    due_date: text,
                                                }))
                                            }
                                        />
                                        <TextInput
                                            style={{ color: 'white', margin: 5, fontSize: 17, fontWeight: 'bold' }}
                                            value={selectedItem?.priority ?? ''}
                                            placeholder='Critial /High /In Progress /Medium /Low'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={(text) =>
                                                setSelectedItem((prevState) => ({
                                                    ...prevState,
                                                    priority: text,
                                                }))
                                            }
                                        />
                                        <TextInput
                                            style={{ color: 'white', margin: 5, fontSize: 17, fontWeight: 'bold' }}
                                            value={selectedItem?.username ?? ''}
                                            placeholder='Assigmel...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={(text) =>
                                                setSelectedItem((prevState) => ({
                                                    ...prevState,
                                                    username: text,
                                                }))
                                            }
                                        /><TextInput
                                            style={{ color: 'white', margin: 5, fontSize: 17, fontWeight: 'bold' }}
                                            value={selectedItem?.role ?? ''}
                                            placeholder='Role: Employee / Manager'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={(text) =>
                                                setSelectedItem((prevState) => ({
                                                    ...prevState,
                                                    role: text,
                                                }))
                                            }
                                        /><TextInput
                                            style={{ color: 'white', margin: 5, fontSize: 17, fontWeight: 'bold' }}
                                            value={selectedItem?.projectname ?? ''}
                                            placeholder='Project name...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={(text) =>
                                                setSelectedItem((prevState) => ({
                                                    ...prevState,
                                                    projectname: text,
                                                }))
                                            }
                                        /><TextInput
                                            style={{ color: 'white', margin: 5, fontSize: 17, fontWeight: 'bold' }}
                                            value={selectedItem?.projectdes ?? ''}
                                            placeholder='Project description...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={(text) =>
                                                setSelectedItem((prevState) => ({
                                                    ...prevState,
                                                    projectdes: text,
                                                }))
                                            }
                                        /><TextInput
                                            style={{ color: 'white', margin: 5, fontSize: 17, fontWeight: 'bold' }}
                                            value={selectedItem?.start_date ?? ''}
                                            placeholder='Start date: DD / MM / YYYY'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={(text) =>
                                                setSelectedItem((prevState) => ({
                                                    ...prevState,
                                                    start_date: text,
                                                }))
                                            }
                                        /><TextInput
                                            style={{ color: 'white', margin: 5, fontSize: 17, fontWeight: 'bold' }}
                                            value={selectedItem?.end_date ?? ''}
                                            placeholder='End date: DD / MM / YYYY'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={(text) =>
                                                setSelectedItem((prevState) => ({
                                                    ...prevState,
                                                    end_date: text,
                                                }))
                                            }
                                        />


                                    </KeyboardAvoidingView>


                                </View>



                                <TouchableOpacity style={styles.AddButton} onPress={() => { updateTask(), setModalEdit(false) }} >
                                    <Text style={{ color: '#EA4463'}} >Save to project</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.AddButton} onPress={() => { delTask(), setModalEdit(false) }} >
                                    <Text style={{ color: '#EA4463' }} >Delete from project</Text></TouchableOpacity>
                                <View style={styles.childStyle} >

                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible3}
                                    >

                                    </Modal>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible2}

                                    >
                                        <View style={styles.centeredViewAdd}>
                                            <View style={styles.modalViewAdd}>
                                                <View>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <Text style={styles.modalTextAdd}>CHOOSE PROJECT</Text>
                                                        <TouchableOpacity

                                                            onPress={() => setModalVisible2(false)}>
                                                            <Text style={styles.poptextStyle}>X</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </Modal>


                                </View>
                            </ScrollView>

                        </View>

                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalAdd}>
                    <View style={styles.centeredViewAdd}>

                        <View style={[styles.warpContainer, { borderRadius: 40, borderColor: 'white' }]}>
                            <ScrollView>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={[styles.textStyleAdd, { fontWeight: 'bold' }]}>QUICK TASK</Text>
                                    <TouchableOpacity onPress={() => setModalAdd(false)} ><Text style={styles.textStyleAdd}>Cancel</Text></TouchableOpacity>
                                </View>

                                <View style={[styles.inputStyle, { height: 220 }]}>
                                    <KeyboardAvoidingView
                                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                        <TextInput style={{ color: 'white' }}
                                            placeholder='Title...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setTaskname(text)}
                                            value={taskname}>
                                        </TextInput>

                                        <TextInput style={{ color: 'white' }}
                                            placeholder='Description...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setDescription(text)}
                                            value={description}>
                                        </TextInput>

                                        <TextInput style={{ color: 'white' }}
                                            placeholder='Status...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setStatus(text)}
                                            value={status}>
                                        </TextInput>

                                        <TextInput style={{ color: 'white' }}
                                            placeholder='Date: ĐD:MM:YYYY'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setDue_date(text)}
                                            value={due_date}>
                                        </TextInput>

                                        <TextInput style={{ color: 'white' }}
                                            placeholder='Priority: Critial / High / In Progress / Medium / Low'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setPriority(text)}
                                            value={priority}>
                                        </TextInput>

                                    </KeyboardAvoidingView>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={[styles.textStyleAdd, { fontWeight: 'bold' }]}>WORKSPACE</Text>
                                </View>

                                <View style={[styles.inputStyle, { height: 120 }]}>
                                    <KeyboardAvoidingView
                                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                        <TextInput style={{ color: 'white' }}
                                            placeholder='Taskname...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setTaskname(text)}
                                            value={taskname}>
                                        </TextInput>

                                        <TextInput style={{ color: 'white' }}
                                            placeholder='Assigmer...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setUsername(text)}
                                            value={username}>
                                        </TextInput>

                                        <TextInput style={{ color: 'white' }}
                                            placeholder='Role: Employee / Manager'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setRole(text)}
                                            value={role}>
                                        </TextInput>
                                    </KeyboardAvoidingView>

                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={[styles.textStyleAdd, { fontWeight: 'bold' }]}>QUICK PROJECT</Text>
                                </View>

                                <View style={[styles.inputStyle, { height: 220 }]}>
                                    <KeyboardAvoidingView
                                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                        <TextInput style={{ color: 'white' }}
                                            placeholder='Projectname...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setProjectname(text)}
                                            value={projectname}>
                                        </TextInput>

                                        <TextInput style={{ color: 'white' }}
                                            placeholder='Projectdes...'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setProjectdes(text)}
                                            value={projectdes}>
                                        </TextInput>

                                        <TextInput style={{ color: 'white' }}
                                            placeholder='StartDate: ĐD:MM:YYYY'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setStart_date(text)}
                                            value={start_date}>
                                        </TextInput>

                                        <TextInput style={{ color: 'white' }}
                                            placeholder='EndDate: ĐD:MM:YYYY'
                                            placeholderTextColor={'#92969C'}
                                            onChangeText={text => setEnd_date(text)}
                                            value={end_date}>
                                        </TextInput>
                                    </KeyboardAvoidingView>

                                </View>
                            </ScrollView>



                            <TouchableOpacity style={styles.AddButton}>
                                <Text style={{ color: '#EA4463' }} onPress={Add}>Add to project</Text>
                            </TouchableOpacity>




                        </View>

                    </View>
                </Modal>

                {/* Button Tạo Project */}
                <TouchableOpacity onPress={() => setModalAdd(true)}>
                    <Icon name="plus" style={[styles.options, { fontSize: 28 }]} />
                </TouchableOpacity>

                {/* Button Thông báo */}
                <TouchableOpacity onPress={() => navigation.navigate('noti')}>

                {/* <TouchableOpacity> */}
                    <Icon name="bell" style={styles.options} />
                </TouchableOpacity>

                {/* Button Account */}
                <TouchableOpacity onPress={() => navigation.navigate('noti')}>

                {/* <TouchableOpacity> */}
                    <Icon name="settings" style={styles.options} />
                </TouchableOpacity>
            </View >


            {/* Modal Search */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { alignItems: 'center' }]}>

                        <View style={[styles.flex, { width: 350, marginBottom: 10, paddingBottom: 10 }]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white" }}>Quick Search</Text>
                            <TouchableOpacity style={{}} onPress={() => setModalVisible(!modalVisible)}>
                                <Icon name='x' style={[styles.options, { color: 'white' }]} />
                            </TouchableOpacity>
                        </View>


                        <TextInput style={styles.Input} placeholder='Search' placeholderTextColor={'#BABABA'}></TextInput>
                        <View style={styles.searchContent}>
                            <ScrollView style={styles.searchScrollView}>
                                {/* Vung hien thi thong tin tim kiem */}
                                {/* <TouchableOpacity style={styles.project} onPress={HandPress}>
                  <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                    <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                  </View>
                  <View style={[styles.wrapContent, { alignSelf: 'center' }]}>
                    <Text style={styles.pTitle}>Getting started</Text>
                  </View>
                </TouchableOpacity> */}
                            </ScrollView>

                            {/* Noi dung hien thi khi chua co tim kiem */}
                            <View style={styles.blankContent}>
                                <Icon name="search" style={[styles.options, { color: '#B3B3B3', alignSelf: 'center', alignContent: 'center' }]} />
                                <Text style={styles.textDate}>Search all projects, comments and workspaces</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>


            {/* Modal for Btn Invite */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalInvite}
                onRequestClose={(e) => {
                    Alert.alert('Modal has been closed.');
                    setModalInvite(!modalInvite);

                }}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { backgroundColor: '#333538' }]}>

                        <View style={[styles.flex, { width: 350, marginBottom: 10 }]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Invite to Workspace</Text>
                            <TouchableOpacity onPress={() => setModalInvite(!modalInvite)}>
                                <Icon name='x' style={[styles.options, { color: 'white' }]} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.invite}>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                {/* Khi nhấn btn, thì thông tin của user sẽ được hiện ở phần invite */}
                                <TouchableOpacity style={{ backgroundColor: '#DDDDDD', width: 40, height: 40, borderRadius: 100, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon name='user-plus' size={20} />
                                </TouchableOpacity>
                                <TextInput placeholder='Search by e-mail or username' placeholderTextColor={'#B3B3B3'} style={{ borderBottomWidth: 1, width: 300, borderBottomColor: '#B3B3B3' }} />
                            </View>

                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', paddingVertical: 10, gap: 10 }}>

                                {/* Số trong dấu ngoặc sẽ hiện số lượng user được mời */}
                                <Text style={styles.textDate}>Invite (2)</Text>

                                {/* Hiện tất cả user được mời */}
                                <View style={{ gap: 10 }}>
                                    <TouchableOpacity style={styles.Infor}>
                                        <View style={[styles.avt, { width: 40, height: 40 }]}>
                                            {/* Contain User'Avatar */}
                                            <Image source={{ uri: "" }} />
                                        </View>
                                        {/* Contain User'Name */}
                                        <Text style={styles.textDate}>Name</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.Infor}>
                                        <View style={[styles.avt, { width: 40, height: 40 }]}>
                                            {/* Contain User'Avatar */}
                                            <Image source={{ uri: "" }} />
                                        </View>
                                        {/* Contain User'Name */}
                                        <Text style={styles.textDate}>Name</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <TouchableOpacity style={{ backgroundColor: "#EA4463", borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center', width: 350, marginTop: 20 }} onPress={() => setModalInvite(!modalInvite)}>
                                <Text style={[styles.textDate, { fontSize: 15, fontWeight: 'bold' }]}>Invite</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            {/* Modal "Create a WorkSpace" */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalCreateW}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalCreateW(!modalCreateW);
                }}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { backgroundColor: '#333538' }]}>

                        <View style={[styles.flex, { width: 350, marginBottom: 10, paddingBottom: 10 }]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Create a Workspace</Text>
                            <TouchableOpacity style={{}} onPress={() => setModalCreateW(!modalCreateW)}>
                                <Icon name='x' style={[styles.options, { color: 'white' }]} />
                            </TouchableOpacity>
                        </View>

                        <TextInput style={styles.Input} placeholder='Ex.Acme or Acme Marketing' placeholderTextColor={'#BABABA'}></TextInput>
                        <View style={styles.invite}>
                            <Text style={[styles.textDate, { fontWeight: 'bold', marginTop: 10 }]}>Invite to Workspace</Text>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 10 }}>
                                <View style={{ backgroundColor: '#DDDDDD', width: 40, height: 40, borderRadius: 100, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon name='user-plus' size={20} />
                                </View>
                                <TextInput placeholder='Search by e-mail or username' placeholderTextColor={'#B3B3B3'} style={{ borderBottomWidth: 1, width: 300, borderBottomColor: '#B3B3B3' }} />
                            </View>
                            <TouchableOpacity style={{ backgroundColor: "#EA4463", borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center', width: 350, marginTop: 20 }}>
                                <Text style={[styles.textDate, { fontSize: 15, fontWeight: 'bold' }]}>Invite</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Menu Responsive */}

            <Modal
                animationType="none"
                transparent={true}
                visible={menuResponsive}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setMenuResponsive(!menuResponsive)
                }}
            >
                <View style={styles.leftView}>
                    <View style={styles.menuContent}>
                        <View style={styles.headMenu}>
                            {/* When click btn, app will navigate to the recent Workspace */}
                            <TouchableOpacity style={styles.spaceName} onPress={() => navigation.navigate('home')}>
                            {/* <TouchableOpacity style={styles.spaceName}> */}

                                {/* Hiển Thị tên WorkSpace hiện tại */}
                                <Text style={{ fontSize: 18, color: '#EA4463', fontWeight: 'bold' }}>Workspace</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMenuResponsive(!menuResponsive)}>
                                <Icon name='chevron-left' size={25} color={'#EA4463'} />
                            </TouchableOpacity>
                        </View>



                        <View style={styles.workSpacesContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                                <Text style={{ color: 'white' }}>WORKSPACES</Text>
                                <TouchableOpacity style={{ backgroundColor: '#616161', borderRadius: 10, padding: 5 }} onPress={() => setModalCreateW(true)}>
                                    <Icon name='plus' size={20} color={'white'} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.workSpaceWrapper}>
                                <TouchableOpacity style={{ padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center' }}>
                                    {/* Hiện thị logo của Work Space */}
                                    <View style={{ backgroundColor: '#EA4463', padding: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: 35 }}>
                                        <Text style={{ color: 'white', }}>S</Text>
                                    </View>
                                    {/* Hiện thị tên của Work Space */}
                                    <Text style={{ color: 'white' }}>SSD</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center' }}>
                                    {/* Hiện thị logo của Work Space */}
                                    <View style={{ backgroundColor: '#EA4463', padding: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: 35 }}>
                                        <Text style={{ color: 'white', }}>S</Text>
                                    </View>
                                    {/* Hiện thị tên của Work Space */}
                                    <Text style={{ color: 'white' }}>SSD</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center' }}>
                                    {/* Hiện thị logo của Work Space */}
                                    <View style={{ backgroundColor: '#EA4463', padding: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: 35 }}>
                                        <Text style={{ color: 'white', }}>S</Text>
                                    </View>
                                    {/* Hiện thị tên của Work Space */}
                                    <Text style={{ color: 'white' }}>SSD</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </Modal>



        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1F22'
    },
    flex: {
        // backgroundColor:'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'


    },
    // outWrap: {
    //   flexDirection: 'column',
    //   justifyContent: "flex-start",

    // },
    leftView: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        backgroundColor: '#2E3135',
        flexDirection: 'column',
        width: 300,
    },
    menuContent: {
        // margin: 20,
        // backgroundColor: 'white',
        // borderRadius: 10,
        padding: 10,
        // flexDirection:'row',
        // gap: 50

        // alignItems: 'center',
    },
    spaceName: {
        height: 50,
        justifyContent: 'center',

    },

    viewText: {
        fontWeight: 'bold',
        fontSize: 60,
        fontFamily: 'Tahoma',
        borderWidth: 1,
        flex: 1,
        borderColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        textAlign: 'right',
        height: 550
    },


    headMenu: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: '#4E4E4E',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    workSpacesContainer: {
        // marginTop:10,
        paddingVertical: 10
    },
    workSpaceWrapper: {
        // padding:20
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    // MiddleWrap: {
    //   // marginTop: 10,
    //   // paddingVertical:20,
    //   flexDirection: 'column',
    //   gap: 20,
    //   backgroundColor: 'red'
    // },

    Projects: {
        flexDirection: 'column',
        gap: 20,
    },

    invite: {
        flexDirection: 'column',
        marginTop: 10,
        // paddingVertical: 20
        // justifyContent: 'center',
        // alignItems: 'flex-start',
    },

    task: {
        // height: 80,
        borderWidth: 1,
        // backgroundColor: '#FF6969',
        borderColor: "#4E4E4E",
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    taskText: {
        color: 'white',
        fontWeight: 'bold',
    },
    WrapBigContent: {
        marginTop: 10,
        flex: 5,
        padding: 10,
        flexDirection: 'column',
        gap: 10
    },

    project: {
        flexDirection: 'row',
        gap: 10
    },
    iconProject: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 30

    },
    icon: {
        fontSize: 18,
        color: '#EAEAEA',

    },
    iconW: {
        backgroundColor: 'pink',
        width: 35,
        height: 35,
        borderColor: 'pink',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapContent: {
        flexDirection: 'column',
        gap: 5
    },
    note: {
        flexDirection: 'row',
        gap: 5
    },
    noteButton: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderColor: '#7F8487',
        borderWidth: 1,
        borderRadius: 20
    },
    noteText: {
        alignSelf: 'center',
        color: '#EAEAEA',
        fontWeight: 'bold',
        fontSize: 15
    },

    miniTitle: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#EAEAEA',
        marginBottom: 5
    },
    pTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    newProject: {
        marginHorizontal: 10,
        borderColor: 'white',
        borderWidth: 2
    },
    newProjectText: {
        color: 'white'
    },
    HorNav: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#7F8487'
    },
    options: {
        fontSize: 25,
        color: 'white'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#2E3135',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        // justifyContent:'flex-start'
        // shadowColor: 'white',
        // shadowOffset: {
        //   width:0,
        //   height: 2,
        // },
        // shadowOpacity:1,
        // shadowRadius: 4,
        // elevation: 5,
        // width: 350
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },

    Input: {
        width: 350,
        padding: 10,
        backgroundColor: '#5B5B5B',
        borderRadius: 10,
        // borderWidth:1,
        // borderColor:'grey'
    },
    searchContent: {
        // backgroundColor: 'pink',
        height: 450,
        padding: 10

    },
    searchScrollView: {
        flexDirection: 'column',


    },
    blankContent: {
        flex: 3,
        flexDirection: 'column',
        paddingTop: 20,
        // backgroundColor:'red'
    },
    warpContainer: {
        flex: 0.5,
        backgroundColor: '#1D1F22',
        //justifyContent: 'flex-end',
        elevation: 15,
        padding: 25,
        borderRadius: 20,


    },
    textStyleAdd: {
        color: 'white',
        fontWeight: '400',



    },



    inputStyle: {
        borderWidth: 1,
        borderColor: '#2D3034',
        borderRadius: 10,
        width: 350,
        height: 170,
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#1C1F22',
        justifyContent: 'space-between'


    },

    DateButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        padding: 5,
        borderColor: '#7F8487',
        borderWidth: 0.6,
        borderRadius: 20,
        gap: 10

    },
    DateText: {
        alignSelf: 'center',
        color: '#EAEAEA',
        fontWeight: 'bold'
    },


    AddButton: {
        marginBottom: 10,
        borderRadius: 10,
        width: 350,
        height: 40,
        backgroundColor: '#612837',
        alignItems: 'center',
        justifyContent: 'center'
    },
    childButton: {
        height: 50,
        width: 350,
        backgroundColor: '#25282C',
        //borderRadius:
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: 10,

    },

    childStyle: {

        marginTop: 10,
        height: 200,
        borderRadius: 10

    },
    modalViewAdd: {
        //margin: 20,
        backgroundColor: '#1D1F22',
        borderRadius: 20,
        padding: 25,
        elevation: 10,



    },
    chooseProjectStyle: {
        borderTopWidth: 1,
        borderTopColor: '#626468'


    },
    poptextStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    modalTextAdd: {
        marginBottom: 10,
        color: 'white'
    },

    centeredViewAdd: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',



    },

    textDate: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'normal'
    },

    endDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        width: 350,
        backgroundColor: '#3E3E3E',
        borderRadius: 10
    },
    Calendar: {
        backgroundColor: '#5B5B5B',
        borderRadius: 10,
        padding: 10
    },
    UserContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 350,
        gap: 20
    },
    Infor: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10
    },
    avt: {
        backgroundColor: 'white',
        borderRadius: 100,
        width: 50,
        height: 50,
    }


});

export default Home;

