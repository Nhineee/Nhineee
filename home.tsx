/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

          <TouchableOpacity style={styles.project} onPress={() => navigation.navigate('App')}>
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
        </View>
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
          visible={modalAdd}>
          <View style={styles.centeredViewAdd}>

            <View style={styles.warpContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.textStyleAdd, { fontWeight: 'bold' }]}>Quick Add</Text>
                <TouchableOpacity onPress={() => setModalAdd(false)} ><Text style={styles.textStyleAdd}>Cancel</Text></TouchableOpacity>
              </View>

              <View style={styles.inputStyle}>
                <TextInput style={{ color: 'white' }} placeholder='Add a new task...' placeholderTextColor={'#92969C'} ></TextInput>
                <TouchableOpacity style={styles.DateButton} onPress={() => setModalDate(true)}>
                  <Icon name='calendar' style={styles.icon} />
                  <Text style={styles.DateText}>Date</Text>
                </TouchableOpacity>

              </View>


              <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate('App')}><Text style={{ color: '#EA4463' }}>Add to project</Text></TouchableOpacity>

              <View style={styles.childStyle} >

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible3}
                >
                  <View style={styles.centeredViewAdd}>
                    <View style={styles.modalViewAdd}>
                      <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.modalTextAdd}>CHOOSE WORKSPACE</Text>
                          <TouchableOpacity

                            onPress={() => setModalVisible3(false)}>
                            <Text style={styles.poptextStyle}>X</Text>
                          </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={[styles.childButton, { borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 15 }]}>
                          <Text style={styles.textStyleAdd}>WorkSpaceA</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                          <Text style={styles.textStyleAdd}>WorkSpaceB</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                          <Text style={styles.textStyleAdd}>WorkSpaceC</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}>
                          <Text style={styles.textStyleAdd}>WorkSpaceD</Text>

                        </TouchableOpacity>
                      </View>


                    </View>
                  </View>


                </Modal>
                <TouchableOpacity onPress={() => setModalVisible3(true)} style={[styles.childButton, { borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}>
                  <Text style={styles.textStyleAdd}>Workspace</Text>
                </TouchableOpacity>

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

                        <TouchableOpacity style={[styles.childButton, { borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 15 }]}>
                          <Text style={styles.textStyleAdd}>ProjcectA</Text>


                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                          <Text style={styles.textStyleAdd}>ProjcectB</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                          <Text style={styles.textStyleAdd}>ProjcectC</Text>

                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.childButton, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopWidth: 1, borderTopColor: '#626468' }]}>
                          <Text style={styles.textStyleAdd}>ProjcectD</Text>

                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity onPress={() => setModalVisible2(true)} style={[styles.childButton, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopWidth: 1, borderTopColor: '#626468' }]}>
                  <Text style={styles.textStyleAdd}>Project</Text>
                </TouchableOpacity>

              </View>

            </View>

          </View>
        </Modal>

        {/* Button Tạo Project */}
        <TouchableOpacity onPress={() => setModalAdd(true)}>
          <Icon name="plus" style={[styles.options, { fontSize: 28 }]} />
        </TouchableOpacity>

        {/* Button Thông báo */}
        <TouchableOpacity onPress={() => navigation.navigate('noti')}>
          <Icon name="bell" style={styles.options} />
        </TouchableOpacity>

        {/* Button Account */}
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
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


