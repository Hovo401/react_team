
import {useState} from 'react'
import {StyleSheet, Text, View ,TextInput,Button,Br} from 'react-native';

export const Text_test=()=> {

  const[input,SetInput]=useState("");
  const[text,setText]=useState([]);

  const setTextAdd=(info)=>{
    let newText=[]
    newText=[...text];
    newText.push(info)
    setText(newText)
  }

    return (
      <View >
        <Text style={stylesr.text}>Es mer developer branch-y 🎉</Text>
        <Text style={stylesr.text}>{"menak horquri gancin push chaneq )"}</Text>
        <Text style={stylesr.text}>input testing </Text>
        <TextInput key={"fwefewfwe"} style={stylesr.Input} value={input} onChange={(e)=>{SetInput(e.target.value)}}/>
        <Button title ="button" onPress={()=>{setTextAdd(input);SetInput("") ;}}/> 
        
        {  
          text.map((element,index)=>{
          return (
            <View key={"rgre"+85*index} style={stylesr.elemtnts_text}>
              <Text key={"f"+index} style={stylesr.text}> {element}</Text>
            </View>
          )
        })
        
        }

      </View>
    );
  }
  
  const stylesr = StyleSheet.create({
    text:{
      color:'#fff',
      textShadowColor:"#fff"
    },
    Input:{
      color:"#fff",
      border:0,
      backgroundColor:"#777",
      marginTop:10,
      marginBottom:10,
        },
    elemtnts_text:{
      backgroundColor:"#888",
      marginTop:10,
    }
  });