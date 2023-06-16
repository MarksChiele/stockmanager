//https://www.nuvemshop.com.br/ferramentas/gerador-qrcode GERADOR DE QRCODE
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { css } from '../assets/Css/Css';
import React, { useState } from 'react';


export default function Operacao(props) {
    console.log(props);
    const [quantidade, setQuantidade] = useState('');

// acao do botão:
// const reponse = await api.post("soma", {
  //   id: 1,
  //   quantidade: 10
  // });


    return (
        <View style={css.containerOperacao}>
            <TextInput style={css.textInputQuantidade}
                value={quantidade}
                onChangeText={(quantidade) => setQuantidade(quantidade)}
                placeholder="Informe aqui a quantidade!"
            />

            <TouchableOpacity style={css.botaoAtualizar}>
                <Text style={css.titleAdd}>ATUALIZAR ESTOQUE</Text>
            </TouchableOpacity>
        </View>
    );
}
