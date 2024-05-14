import React from 'react'
import { View,Text } from 'react-native'
import ProductItem from '../ProductItem'
import productGetir from '../../../assets/productsGetir'
function index() {
  return (
    <View>
        <View style={{flexDirection:'row'}}>
            {productGetir.slice(0,2).map((item) =>(
                <ProductItem key={item.id} item={item}/>
            ))}
        </View>


        <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,backgroundColor:'white'}}>
            {productGetir.slice(2).map((item)=>(
                <ProductItem key={item.id} item={item}/>
            ))}
        </View>
    </View>
)
}

export default index