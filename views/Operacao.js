//https://www.nuvemshop.com.br/ferramentas/gerador-qrcode GERADOR DE QRCODE
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { css } from '../assets/Css/Css';
import React, { useState } from 'react';
import { api } from '../services/api';

export default function Operacao(props) {
    console.log(props);
    const [quantidade, setQuantidade] = useState('');

    //acao do botão:
    //const  reponse =   api.post("soma", {
    //id: props.route.params.idItem,
    //  quantidade: quantidade,
    // });

    async function realizaOperacao() {
        var operacao = props.route.params.Op; // variavel para direcionar a operacao correta na API soma ou subt
        // Verifica a operação e realiza o cálculo correspondente
        var metodo = operacao == "soma" ? "somar" : "subtrair"

        const reponse = await api.post(metodo, {
            id: props.route.params.idItem,
            quantidade: + quantidade,
        });

        if (reponse.data.success) {
            // joga pra tela de sucesso
           // props.navigation.navigate ('Sucesso')
        }
    }
    return (
        <KeyboardAvoidingView
            enabled={Platform.OS === "ios"}
            behavior="padding"
            style={css.containerOperacao}
        >


            <View style={css.containerTextPrincipal} >
                <Text style={css.textPrincipal}>STOCK MANAGER</Text>
            </View>
            <TextInput style={css.textInputQuantidade}
                value={quantidade}
                keyboardType="numeric"
                returnKeyType='done'
                onChangeText={(quantidade) => setQuantidade(quantidade)}
                placeholder="Informe aqui a quantidade!"
                placeholderTextColor={'black'}
            />
      

            <TouchableOpacity style={css.botaoAtualizar} onPress={realizaOperacao} >
                <Text style={css.titleAdd}>ATUALIZAR ESTOQUE</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}
