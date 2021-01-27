import React, {useState} from 'react';
import {  View, Dimensions, ScrollView, Image, Text } from 'react-native';

const {width} = Dimensions.get("window")
const height = width * 0.6

export default function Porto({porto}) {
    const [listPorto, setPorto] = useState([
        'https://i.imgur.com/K1Vpnuo.png'
    ])
if(porto.length > 0){
    return (
        <View>
            <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                {
                    porto.map((porto, index) => (
                        <Image
                            key={index}
                            source={{uri: porto.link}}
                            style={{width, height, resizeMode: 'contain'}}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
} else {
    
    return (
        <View>
            <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                {
                    listPorto.map((porto, index) => (
                        <Image
                            key={index}
                            source={{uri: porto}}
                            style={{width, height, resizeMode: 'contain'}}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}
}