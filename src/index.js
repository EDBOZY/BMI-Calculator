import { Text,StyleSheet, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
// import {Constants} from 'expo-constants'

import {constants} from 'expo-constants'

const Bmicalculator = () => {
    const [weight,setWeigth]=useState('')
    const [height,setHeigth]=useState('')
    const [description,setDescription]=useState('')
    const [bmi,setBmi]=useState('')

    const calculate=()=>{
        const bmi=weight/((height/100)*(height/100))
        setBmi(bmi.toFixed(1))


        if(bmi<18.5){
            setDescription('UNDERWEIGHT!!!,eat more!!')   
        }
        else if(bmi>=18.5 && bmi<24.9){
            setDescription('ormal,Keep it up') 
        }
        else if(bmi>=24.9 && bmi<29.9){
            setDescription('OVERWEIGHT,Start working out')  
        }
        else if(bmi>29.9){
            setDescription('OBESE,Hit the freaking GYM MATE!!!!')
        }
    }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>BMI Calculator</Text>
      </View>
      <TextInput style={styles.input} value={weight} placeholder='Enter your Weight in Kg' onChangeText={(text)=>setWeigth(text)} keyboardType='numeric' >

      </TextInput>
      <TextInput style={styles.input} value={height} placeholder='Enter your Height in cm ' onChangeText={(text)=>setHeigth(text)} keyboardType='numeric' >

      </TextInput>
      <TouchableOpacity style={styles.btn} onPress={calculate} >
        <Text style={styles.btntext}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.ans}>
        <Text style={styles.anstext}>{bmi}</Text>
        <Text style={styles.anstext}>{description}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Bmicalculator;

const styles = StyleSheet.create({
    container: {
      flex: 1,
       paddingTop:80,
      backgroundColor:"#e0ecde",

      
    },
    title:{
        backgroundColor:"#2c6975",
        height:80,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    text:{
        fontSize:30,
        color:"white",
        fontWeight:"bold",
    },
    input:{
        height:55,
        margin:15,
        borderWidth:1/2,
        padding:10,
        borderRadius:5,
        backgroundColor:"#cde0c9",
        fontSize:18,
    },
    btn:{
        height:55,
        margin:15,
        borderWidth:1/2,
        // padding:10,
        borderRadius:5,
        backgroundColor:"#68b2a8",
        justifyContent:'center',
        alignItems:'center',

    },
    btntext:{
        fontSize:20,
        fontWeight:'bold',
        color:"white",
    },
    ans:{
        margin:15,
    },
    anstext:{
        fontSize:30,
        color:'#2c6975',
        fontWeight:'bold',
    }
    
  });