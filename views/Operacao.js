//https://www.nuvemshop.com.br/ferramentas/gerador-qrcode GERADOR DE QRCODE
import { Text, View,TouchableOpacity,TextInput } from 'react-native';
import { css } from '../assets/Css/Css';



export default function Home(props) {
    console.log(props);
      return (
        <View style={css.containerOperacao}>
            <TextInput style={css.textInputQuantidade}
                    placeholder="Informe aqui a quantidade!"
            />
            <TouchableOpacity style={css.botaoAtualizar}>
        <Text style={css.titleAdd}>ATUALIZAR ESTOQUE</Text>
             </TouchableOpacity>
            
            
            
         </View>
        );
    }
    