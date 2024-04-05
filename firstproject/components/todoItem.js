import React from 'react'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function TodoItem ({item , pressHandler}) {
   return(
    <TouchableOpacity onPress={()=> {pressHandler(item.key)}}>
        
        <View style={styles.itemContainer}>
                <Text  style={styles.task}>{item.text}</Text>
                <MaterialIcons  name='delete' size={18} color={'#64113f'}/>
        </View>
    </TouchableOpacity>
   )
}


const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:'#fff',
        paddingHorizontal:5,
        paddingVertical:10,
        marginVertical:5,
        borderRadius:10,
        borderColor:'#ffe5ec',
        borderWidth:2,
        flexDirection:'row',
        alignItems:'center'
    },
    task:{
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center',
        color:'#64113f',
        flex:1

    }

})