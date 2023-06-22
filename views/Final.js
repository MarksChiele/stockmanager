import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView,Image } from 'react-native';
import { css } from '../assets/Css/Css';








export default function Final(props) {







    return (
        <KeyboardAvoidingView
            style={css.containerOperacao}
        >
               <Image source={require('../assets/sucesso.png')} />
            <View style={css.containerTextPrincipal} >
                <Text style={css.textPrincipal}>STOCK MANAGER</Text>
            </View>

            <TouchableOpacity style={css.botaoAtualizar} onPress={() => props.navigation.navigate('Home')} >
                <Text style={css.titleAdd}>NOVA OPERAÇÃO</Text>
            </TouchableOpacity>


        </KeyboardAvoidingView>

    );







}