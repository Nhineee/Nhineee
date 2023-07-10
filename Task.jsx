import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Task(props) {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <View
      style={{...styles.item, backgroundColor: isChecked ? '#d0d2d5' : '#FFF'}}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
          {isChecked ? (
            <Image style={styles.checkImg} source={require('./check.png')} />
          ) : (
            <View style={styles.uncheckedSquare} />
          )}
        </TouchableOpacity>
        <Text
          style={{
            ...styles.itemText,
            textDecorationLine: isChecked ? 'line-through' : 'none',
          }}>
          {props.text}
        </Text>
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <Image
          style={styles.deleteButtonImg}
          source={require('./delete.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  uncheckedSquare: {
    width: '100%',
    height: '100%',
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
  },
  checkImg: {
    width: '100%',
    height: '100%',
  },
  itemText: {
    maxWidth: '80%',
  },
  deleteButton: {
    width: 18,
    height: 18,
  },
  deleteButtonImg: {
    width: '100%',
    height: '100%',
  },
});

export default Task;
