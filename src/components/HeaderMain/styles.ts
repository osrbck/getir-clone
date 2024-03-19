import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    headerMain:{
        height: height * 0.064,
        backgroundColor: '#F7D102',
        flexDirection:'row',

    },
    image:{
        width:30,
        height: 30
    },
    headerOne: {
        height: height * 0.064,
        width: '80%',
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:'3%',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
    },
   
    headerOneView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        paddingLeft: 8,
        borderLeftWidth: 3,
        borderLeftColor:'#F3F2FD'
    },
    headerTwoView:{
        // backgroundColor:'red',
        width:'20%',
        height: height * 0.064,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center'
    },

})

export default styles; 