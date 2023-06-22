import { View, TouchableOpacity, Text,Image } from 'react-native';
import { css } from '../assets/Css/Css';

export default function Home(props) {
//source={require('../assets/home.png')}
  console.log(props);
  return (
//<Image>

//</Image>



    <View style={css.container}>
      
      <View style={css.containerTextPrincipal} >
        <Text style={css.textPrincipal}>STOCK MANAGER</Text>

      </View>
      <View style={css.imagemHomecontainer}>
      <Image source={require('../assets/home.png')} />
      </View>

     
      <TouchableOpacity style={css.buttonAdd} onPress={() => props.navigation.navigate('LeituraQrcode', {
        Opercao: 'soma',
      })}>
        <Text style={css.titleAdd}>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={css.buttonRemove} onPress={() => props.navigation.navigate('LeituraQrcode', {
        Opercao: 'subt',
      })}>
        <Text style={css.titleAdd}>Subtrair</Text>
        
      </TouchableOpacity>

    </View>
  );
}
