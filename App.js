import React, {useEffect, useState} from 'react';
import {  View, Dimensions, ScrollView, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';

const {width} = Dimensions.get("window")
const height = width * 0.6

export default function Home ({navigation}) {
 
  const [typeTukang, setTypeTukang] = useState([
    {url: 'https://i.imgur.com/4f4kvB2.png', categoryTukang: "kebun"},
    {url: 'https://i.imgur.com/Q6PYGrI.png', categoryTukang: "listrik"},
    {url: 'https://i.imgur.com/JckbilZ.png', categoryTukang: "bangunan"}
  ])
  const [active, setActive] = useState(0)
  
  function toList(jenis){
    navigation.navigate('ListTukang', {
      type: jenis.url,
      category: jenis.categoryTukang
    })
  }

  function change ({nativeEvent}) {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if(slide !== active) {
      setActive(slide)
    }
  }
  

  return (
    <View style={{backgroundColor: '#DDD', paddingBottom: 155}}>
      <Text style={{marginTop: 50, color: '#fc8621', textAlign: 'center', fontSize: 30}}>Cari tukang apa hari ini ?</Text>
      <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 50}} onScroll={change} >

        {
          typeTukang.map((jenis, index) =>  (	
            <View key={index}>
              <TouchableHighlight onPress={() => toList(jenis)}
                activeOpacity={10}
                underlayColor='#DDD'
              >
                <Image
                  source={{uri: jenis.url}}
                  style={{width, height, resizeMode: 'contain', borderRadius: 35, shadowColor: '#000',
                  shadowOffset: {width:0, height: 4}, shadowOpacity: 0.30, shadowRadius:4.65
                  }}
                />
              </TouchableHighlight>
            </View>					
          ))
        }
      </ScrollView>
        <View style={{flexDirection: 'row', position: 'absolute', bottom:75, alignSelf: 'center' }}>
          {
            typeTukang.map((i,k) => (
              <Text key={k} style={k === active ? style.activePage : style.pagination } >⚫</Text>
            ))
          }

        </View>

    </View>
  )
}

const style = StyleSheet.create({
  activePage: {
    color: '#fc8621',
    margin: 3,
    fontSize: 20
  },
  pagination: {
    color: '#888',
    margin: 3,
    fontSize: 20
  }
})