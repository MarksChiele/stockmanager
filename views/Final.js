import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView,Image } from 'react-native';
import { css } from '../assets/Css/Css';
import React, { useState,useEffect  } from 'react';
import { api } from '../services/api';







export default function Final(props) {
    const [data, setData] = useState(null);



    let itemOp = props.route.params.item;

    console.log("ID DO PROD",itemOp);


    useEffect(() => {
        api.get('produto/'+itemOp)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);



    return (
        <KeyboardAvoidingView
            style={css.containerOperacao}
        >
               <Image source={require('../assets/sucesso.png')} />
            <View style={css.containerTextPrincipal} >
                <Text style={css.textPrincipal}>STOCK MANAGER</Text>
            </View>
            
            <Text style={css.textitem}>Estoque atual do item: {data ? data.qtde : 'Ao item...'} </Text>


            <TouchableOpacity style={css.botaoAtualizar} onPress={() => props.navigation.navigate('Home')} >
                <Text style={css.titleAdd}>NOVA OPERAÇÃO</Text>
            </TouchableOpacity>


        </KeyboardAvoidingView>

    );







}