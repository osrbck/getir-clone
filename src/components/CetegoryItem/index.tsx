import React from 'react'
import { TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import { Category } from '../../models';


const {width , height} = Dimensions.get('window');
type categoryItemProps={
  item:Category
}

function index({item}:categoryItemProps) {
  return (
    <TouchableOpacity style={{width:width*0.25, height:height*0.20, flexDirection:'column', alignItems:'center',justifyContent:'space-between', padding:'5%'}}>
        <Image style={{width:width*0.20, height:height*0.125,borderRadius:8}} source={{uri:item.src}}/>
        <Text style={{fontSize:12,fontWeight:'500', color:'#616161'}}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default index