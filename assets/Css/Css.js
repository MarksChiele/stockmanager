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
buttonProsseguir:{
    alignItems:'center',
     backgroundColor:'green',
     borderRadius:8,
     padding:15,
     justifyContent:'center',
     width:"40%",
     height:"10%",
         top:"40%",
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


containerOperacao:{
    width:"120%",
    height:"30%",
    margin:5,
    flexDirection:'column',
    backgroundColor:'red',
    justifyContent:'flex-start',
    top:"3%",
},

botaoAtualizar:{
    alignItems:'center',
    backgroundColor:'green', 
    borderRadius:5,
    justifyContent:'center',
    width:"80%",
    height:"15%",
    top:"200%",
    alignContent:'flex-start',

},

textInputQuantidade:{
    height:40,
    alignItems:'center',
    backgroundColor:'grey',
    width:"80%",
    height:"10%",
    top:"120%",




},


});

export{css};