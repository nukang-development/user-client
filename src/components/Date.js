import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker'
import {View, Platform, LogBox, Text, Button} from 'react-native';
import {Row} from 'native-base'

export default function DateOrder(props) {

  LogBox.ignoreAllLogs(true)
  
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    // const currentDate = selectedDate || date
    setShow(false)
    setDate(selectedDate);
    // console.log(date, 'date<<<<<<<')
    props.schdl(selectedDate)
    console.log(date.toISOString().substr(0, 10), 'selected<<<<<<<<')
    
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  
  return (
    <View>
      <Row style={{justifyContent: 'center'}}>
      <View style={{width: 130, alignSelf: 'center', padding:1}}>
        <Button onPress={showDatepicker} title="Pilih Tanggal" />
      </View>
      {show && (
        <DateTimePicker
        testID="dateTimePicker"
        value={date}
        display="default"
        mode={mode}
        is24Hour={true}
        minimumDate={new Date(2020, 1, 1)}
        maximumDate={new Date(2100, 12, 31)}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        placeHolderText="Select date"
        textStyle={{ color: "green" }}
        placeHolderTextStyle={{ color: "#16a085" }}
        onChange={onChange}
        disabled={false}
        />
      )}
      <Text style={{fontWeight: 'bold', alignSelf: 'center', marginLeft: 10}} >{date.toISOString().substr(0, 10)}</Text>
      </Row>
    </View>
  );
}