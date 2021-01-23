import React, {useState} from 'react';
import {  View, Dimensions, ScrollView, Image, Text, TouchableHighlight } from 'react-native';

const {width} = Dimensions.get("window")
const height = width * 0.6
const bangunan = require('../image/Tukang_Bangunan.png')
const listrik = require('../image/Tukang_Listrik.png')
const kebun = require('../image/Tukang_Kebun.png')

export default function Home ({navigation}) {

  const [typeTukang, setTypeTukang] = useState([
    // bangunan,
    // listrik,
    // kebun
    require('../image/Tukang_Bangunan.png'),
    require('../image/Tukang_Listrik.png'),
    require('../image/Tukang_Kebun.png')
  ])

  console.log(typeTukang, "<<<<typetukang")
		
  function toList(index){
    
    console.log(typeTukang[index], '<<<<jenis')
    navigation.navigate('ListTukang', {
      asal: typeTukang[index]
    })
	}

  return (
    <View>
      <Text style={{marginTop: 50, color: 'black', textAlign: 'center', fontSize: 30}}>Cari tukang apa hari ini ?</Text>
      <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 50}}>
        {
          typeTukang.map((jenis, index) => (		
            <TouchableHighlight onPress={() => toList(index)}>
              <Image
                key={index}
                source={jenis}
                style={{width, height, resizeMode: 'contain'}}
                
            />
            </TouchableHighlight>						
          ))
        }
      </ScrollView>
    </View>
  )
}