import { View, Text, Vibration, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Moon, Sun1 } from 'iconsax-react-native';
import Entypo from 'react-native-vector-icons/Entypo'

const Bt9Component = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [currentNum, setCurrentNum] = useState('');
  const [lastNum, setLastNum] = useState('');

  const buttons = ["C", "DEL", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="];


  function calculator() {
    let lastArr = currentNum[currentNum.length - 1];
    if (lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === ".") {
      setCurrentNum(currentNum)
      return
    }
    else {
      let result = eval(currentNum).toString();
      setCurrentNum(result);
      return
    }
  }

  function hanldeInput(buttonPressed) {
    if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/') {
      Vibration.vibrate(35)
      setCurrentNum(currentNum + buttonPressed)
      return
    }
    else if (buttonPressed === '1' || buttonPressed === '2' || buttonPressed === '3' || buttonPressed === '4' || buttonPressed === '5' || buttonPressed === '6' || buttonPressed === '7' || buttonPressed === '8' || buttonPressed === '9' || buttonPressed === '0' || buttonPressed === '.') {
      Vibration.vibrate(35)
    }

    switch (buttonPressed) {
      case 'DEL':
        Vibration.vibrate(35)
        setCurrentNum(currentNum.substring(0, (currentNum.length - 1)))
        return
      case 'C':
        Vibration.vibrate(35)
        setLastNum('')
        setCurrentNum('')
        return
      case '=':
        Vibration.vibrate(35)
        setLastNum(currentNum + '=')
        calculator()
        return
    }
    setCurrentNum(currentNum + buttonPressed)

  }
  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
      maxWidth: '100%',
      minHeight: '35%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    resultText: {
      maxHeight: 45,
      color: '#00b9d6',
      margin: 15,
      fontSize: 35
    },
    historyText: {
      color: darkMode ? '#B5B7BB' : '#7c7c7c',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end'
    },
    themeButton: {
      alignSelf: 'flex-start',
      bottom: '5%',
      margin: 15,
      backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    buttons: {
      width: '100%',
      height: '35%',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    button: {
      borderColor: darkMode ? '#3f4d5b' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '24%',
      minHeight: '54%',
      flex: 2
    },
    textButton: {
      color: darkMode ? '#b5b7bb' : '#7c7c7c',
      fontSize: 28
    }
  })

  return (
    <View>
      <View
        style={styles.results}
      >
        <TouchableOpacity
          style={styles.themeButton}>
          <Entypo name={darkMode ? 'light-up' : 'moon'} size={24} color={darkMode ? 'white' : 'black'}
            onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)} />

        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNum}</Text>
        <Text style={styles.resultText}>{currentNum}</Text>
      </View>

      <View style={styles.buttons}>
        {buttons.map(button => button === '=' || button === '*' || button === '/' || button === '-'
          || button === '+' ? <TouchableOpacity
            key={button} style={[styles.button, {
              backgroundColor: '#00b9d6'
            }]} onPress={() => hanldeInput(button)}>
          <Text style={[styles.textButton, { color: 'white', fontSize: 28 }]}>{button}</Text>
        </TouchableOpacity> :
          button === '.' || button === 'DEL' ?
            <TouchableOpacity key={button} style={[styles.button, { backgroundColor: button === '.' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '37%' }]}
              onPress={() => hanldeInput(button)}>
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
            :
            button === 'C' ?
              <TouchableOpacity key={button} style={[styles.button, { backgroundColor: typeof (button) === 'number' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '36%' }]}
                onPress={() => hanldeInput(button)}>
                <Text style={[styles.textButton]}>{button}</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity key={button}
                style={[styles.button, { backgroundColor: typeof (button) === 'number' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed' }]} onPress={() => hanldeInput(button)}>
                <Text style={styles.textButton}>{button}</Text>
              </TouchableOpacity>
        )}
      </View>
    </View >
  )
}

export default Bt9Component