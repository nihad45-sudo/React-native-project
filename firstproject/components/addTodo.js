import React , {useState} from 'react'
import { StyleSheet, View , TextInput , Button } from 'react-native';


export default function AddTodo ({submitHandler}) {
    const [text , setText] = useState('');
    const changeHandler = (val)=> {
       setText(val)
    }
   return (
    <View>
         <TextInput
         style={styles.input}
         placeholder='New Todo...'
         onChangeText={changeHandler} 
         />
         <Button onPress={()=> submitHandler(text)} 
         title='Add Todo' color={'#64113f'}/>
    </View>
   )
}

const styles = StyleSheet.create({
    input:{
      marginBottom:10,
      paddingHorizontal:8,
      paddingVertical:6,
      borderBottomWidth:1,
      borderBottomColor:'#ffe5ec'
    }
})
