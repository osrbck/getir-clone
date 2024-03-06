import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from "./styles"
import {Entypo} from "@expo/vector-icons"
function index() {
  return (
    <View style = {styles.headerMain}>
        <View style = {styles.headerOne}>
            <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
            <View style = {styles.headerOneView}>
                <Text style={{fontWeight:'600', fontSize:13}}>Ev</Text>
                <Text style={{fontSize: 12, color:'#6E7480',marginLeft:8,marginRight:4}}>Akdeniz mah. Talat Göktepe cad. Süzerler Plaza A/12</Text>
                <Entypo name="chevron-right" size={24} color="#5D3EBD"/>
            </View>
            <View>
                <Text></Text>
                <Text></Text>
            </View>
        </View>

        
    </View>
  )
}

export default index