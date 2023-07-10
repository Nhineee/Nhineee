import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Task from './Task';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View style={styles.header}>
      <View style={styles.headerLogoSection}>
        <Image style={styles.headerLogo} source={require('./bear.png')} />
        <Image style={styles.headerLogo} source={require('./cat.png')} />
      </View>
      <View style={styles.headerButtonSection}>
        <TouchableOpacity style={styles.headerButton}>
          <Image
            style={styles.headerButtonImg}
            source={require('./menu.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MainScreen() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled">
              {/* Today's Tasks */}
              <Text style={styles.sectionTitle}>Today's tasks</Text>
              <View style={styles.tasksWrapper}>
                {/* This is where the tasks will go! */}
                {taskItems.map((item, index) => {
                  return <Task key={index} text={item} />;
                })}
              </View>
            </ScrollView>

            <View style={styles.writeTaskContainer}>
              <TextInput
                style={styles.input}
                placeholder={'Write a task'}
                value={task}
                onChangeText={setTask}
              />
              <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerTitle: LogoTitle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLogoSection: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerLogo: {width: 40, height: 40, marginRight: 10},
  headerButtonSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 40,
  },
  headerButton: {
    width: 30,
    height: 30,
  },
  headerButtonImg: {width: '100%', height: '100%'},

  safeArea: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },

  scrollContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasksWrapper: {marginTop: 30},

  writeTaskContainer: {
    flex: 0,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
  },

  input: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 15,
    marginRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 40,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 20,
  },
});
