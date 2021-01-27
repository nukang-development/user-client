import React, {useEffect, useState} from 'react';
import {  View, Dimensions, ScrollView, Image, Text, TouchableHighlight } from 'react-native';

const {width} = Dimensions.get("window")
const height = width * 0.6

export default function Home ({navigation}) {
 
  const [typeTukang, setTypeTukang] = useState([
    {url: 'https://i.imgur.com/4f4kvB2.png', categoryTukang: "kebun"},
    {url: 'https://i.imgur.com/Q6PYGrI.png', categoryTukang: "listrik"},
    {url: 'https://i.imgur.com/JckbilZ.png', categoryTukang: "bangunan"}
  ])
  
  function toList(jenis){
    navigation.navigate('ListTukang', {
      type: jenis.url,
      category: jenis.categoryTukang
    })
  }
  

  return (
    <View style={{backgroundColor: '#FFFF', paddingBottom: 125}}>
      <Text style={{marginTop: 50, color: '#fc8621', textAlign: 'center', fontSize: 30}}>Cari tukang apa hari ini ?</Text>
      <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 50}}>
        {
          typeTukang.map((jenis, index) =>  (	
            <View key={index}>
              <TouchableHighlight onPress={() => toList(jenis)}
                activeOpacity={10}
                underlayColor='#FFFF'
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
    </View>
  )
}