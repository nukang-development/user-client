import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native'
import { Text} from 'native-base'
import {useSelector} from 'react-redux'

export default function Submit({navigation}) {
  const dataProf = useSelector(state => state.tukangReducer.profileUser)

 

  function toHome() {
    navigation.replace('Dashboard')
  }

  return (
    <>
    <View style={styles.container}>
      <Image source={{uri: "https://i.imgur.com/tnRDnTf.png" }} style={{
        width: 250, height: 250,
        marginTop: 20
      }}
      resizeMode={'cover'}
       />
    </View>
    <View style={{backgroundColor: '#682c0e', paddingBottom: 200, borderRadius: 30}}>
      <View style={{paddingLeft: 10, paddingTop: 10, backgroundColor: '#682c0e', borderRadius: 30}}>
        <Text style={{fontSize: 30, color: "#FFF", margin: 10}}>{dataProf.name} </Text>
        <Text style={{fontSize: 20, color: "#FFF", margin: 10}}>Terimakasih, </Text>
        <Text style={{fontSize: 20, justifyContent: 'center' ,color: "#FFF", margin: 10}}>Pesanan Anda sedang menunggu konfirmasi Tukang</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30, marginTop: 40}}>

          <Button  title="Kembali" color="#fc8621" onPress={toHome} ></Button>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150,
    paddingBottom: 150
  },
});