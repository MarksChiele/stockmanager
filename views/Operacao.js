//https://www.nuvemshop.com.br/ferramentas/gerador-qrcode GERADOR DE QRCODE
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { css } from '../assets/Css/Css';
import React, { useState } from 'react';

export default function Operacao(props) {
    console.log(props);
    const [quantidade, setQuantidade] = useState('');

//acao do botão:
//const  reponse =   api.post("soma", {
 //id: props.route.params.idItem,
  //  quantidade: quantidade,
// });


var operacao = props.route.params.Op; // variavel para direcionar a operacao correta na API soma ou subt
// Verifica a operação e realiza o cálculo correspondente
switch (operacao) {
  case "soma":
   
  
    break;
  case "subt":


    break;

}
    return (
        <View style={css.containerOperacao}>
            <TextInput style={css.textInputQuantidade}
                value={quantidade}
                keyboardType='numeric'
                onChangeText={(quantidade) => setQuantidade(quantidade)}
                placeholder="Informe aqui a quantidade!"
            />
            <Text>Teste: {props.route.params.Op} {props.route.params.idItem}
                
            </Text>

            <TouchableOpacity style={css.botaoAtualizar} > 
                <Text style={css.titleAdd}>ATUALIZAR ESTOQUE</Text>
            </TouchableOpacity>
        </View>
    );
}
