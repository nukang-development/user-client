import React, {useState} from 'react';
import {  View, Dimensions, ScrollView, Image, Text } from 'react-native';

const {width} = Dimensions.get("window")
const height = width * 0.6

export default function Porto () {

    const [listPorto, setPorto] = useState([
        'file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540mozartmongi%252Ftukang-client/ImagePicker/cf88cddf-470d-4710-800b-ad3baa731a23.jpg',
        'https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg',
        'https://cdn.pixabay.com/photo/2013/11/15/13/57/road-210913_960_720.jpg'
    ])

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