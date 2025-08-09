import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Standard = () => {
  const [Darktheme, setDarktheme] = useState(false);
  const [result, setresult] = useState('sjfhsknjj');
  const colors = {
    dark: "#22252D",
    dark1: "#292B36",
    dark2: "#272B33",
    light: "#FFF",
    light1: "#F1F1F1",
    light2: "#F7F7F7"
  }
const calculate=(title)=>{
   if(title=="C"){
    setresult("")
   }else if(title=="DL"){
    setresult(result.substring(0,result.length-1))
   }else if(title=="="){
    const ans= Number(eval(result).toFixed(3)).toString()
    setresult(ans)
   }else setresult(result + title);
   
}

  const Btn = ({ title, type }) => (
    <TouchableOpacity 
    onPress={()=>calculate(title)}
    style={{
      padding: 10,
       borderRadius: 10,
      elevation: 2, 
      backgroundColor: Darktheme ? colors.light1 : colors.dark2,
      height: 70,
       width: 70, 
       margin: 10,
      

    }}>
      <Text style={{ fontSize: 40, color: 'black', textAlign: "center", textAlignVertical: "center",
      color:getbtncolor(type)
        
      }}>{title}</Text>
    </TouchableOpacity>
  )

  const getbtncolor=(type)=>{
   if(type=="top"){
   return '#35FBD6'
   }else if(type=="right"){
return '#EB6363'
   }else{
   return Darktheme?colors.dark:colors.light
   }
  }
  return (
    <View
      style={{
        width: "100%",
        height: '100%',
        paddingVertical: "20px",
        backgroundColor: Darktheme ? colors.light2 : colors.dark,
        alignItems: "center",
        paddingRight: "20px",

      }}
    >
      <Switch
        value={Darktheme}
        onValueChange={() => setDarktheme(!Darktheme)}
        thumbColor={Darktheme ? colors.dark : colors.light}
        trackColor={{ true: colors.dark1, false: colors.light1 }}
        style={{ alignSelf: "flex-end" }}
      />
      <Text style={{
        fontSize: 40,
        color: Darktheme ? colors.dark : colors.light,
        width: "100%",
        textAlign: "right",
        marginTop: 160,
        paddingBottom: 20
      }}>{result}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", backgroundColor: Darktheme ? colors.light1 : colors.dark1, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />
        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="-" type="right" />
        <Btn title="1" type="number" />
        <Btn title="2" type="number" />
        <Btn title="3" type="number" />
        <Btn title="+" type="right" />
        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number" />
        <Btn title="=" type="right" />
      </View>

    </View>
  )
}

export default Standard