//https://www.nuvemshop.com.br/ferramentas/gerador-qrcode GERADOR DE QRCODE
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { css } from '../assets/Css/Css';
import React, { useState,useEffect  } from 'react';
import { api } from '../services/api';

export default function Operacao(props) {
    const [quantidade, setQuantidade] = useState('');
    const [data, setData] = useState(null);
   
    let getItem = props.route.params.idItem;


     useEffect(() => {
        api.get('produto/'+getItem)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    
  
 // const  reponse = await api.get("produto/" + getItem);
 // setProductData(reponse.data)
  //console.log("sucessoo.",productData.descricao)
 //  } catch {
  // console.log("Erro ao buscar o produto.",productData.descricao)
//}





    function capturaOp() {
        var operacao = props.route.params.Op;
        var escrever;
        switch (operacao) {
            case "soma":
                escrever = "Adicionando";
                return <Text style={css.titleOpSoma}>{escrever}</Text>

            case "subt":
                escrever = "Subtraindo";
                return <Text style={css.titleOpSub}>{escrever}</Text>

        }
    }

    



    async function realizaOperacao() {
        var operacao = props.route.params.Op; // variavel para direcionar a operacao correta na API soma ou subt
        // Verifica a operação e realiza o cálculo correspondente
        var metodo = operacao == "soma" ? "somar" : "subtrair"

        const reponse = await api.post(metodo, {
            id: props.route.params.idItem,
            quantidade: + quantidade,
        });

        if (reponse.data.success) {
            props.navigation.navigate('Final', {
                item: getItem,// leva o id do item para montar a quantidade em estoque na tela de sucesso.

            })
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
            <View style={css.containerTextOp}>
                <Text>{capturaOp()}</Text>
            </View>
            <TextInput style={css.textInputQuantidade}
                value={quantidade}
                keyboardType="numeric"
                returnKeyType='done'
                onChangeText={(quantidade) => setQuantidade(quantidade)}
                placeholder="Informe aqui a quantidade!"
                placeholderTextColor={'black'}

            />
            <View style={css.containerAoitem}>
        
                <Text style={css.textAoitem}>Ao item:</Text>
                <Text style={css.textitem}>{data ? data.descricao : 'Ao item...'} </Text>
            </View>

            <TouchableOpacity style={css.botaoAtualizar} onPress={realizaOperacao} >
                <Text style={css.titleAdd}>ATUALIZAR ESTOQUE</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}
