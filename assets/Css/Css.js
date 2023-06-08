import { StyleSheet } from "react-native";


const css = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        margin:5,
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItens:'center',
        justifyContent:'space-around',
    },

titleAdd:{
    color:"#fff",
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10,
    alignContent:'center',
    

},


buttonAdd:{
   alignItems:'center',
    backgroundColor:'green',
    borderRadius:8,
    padding:15,
    justifyContent:'center',
    width:"35%",
    height:"10%",
        top:"150%",
},
buttonRemove:{
    alignItems:'center',
    backgroundColor:'red',
    borderRadius:8,
    padding:15,
    justifyContent:'center',
    width:"35%",
    height:"10%",
    top:"150%",

    
    
},




});

export{css};