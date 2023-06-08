import { View,TouchableOpacity,Text } from 'react-native';
import { css } from '../assets/Css/Css';

export default function Home(props) {
  console.log(props);
    return (
     
    <View style={css.container}>
    <TouchableOpacity style={css.buttonAdd} onPress={()=>props.navigation.navigate ('LeituraQrcode',{
      OpId:1
    })}>
     <Text style={css.titleAdd}>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={css.buttonRemove} onPress={()=>props.navigation.navigate ('LeituraQrcode',{
      OpId:2
    })}>
     <Text style={css.titleAdd}>Subtrair</Text>
      </TouchableOpacity>

    </View>
  );
}
