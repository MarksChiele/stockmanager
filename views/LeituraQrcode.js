import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { css } from '../assets/Css/Css';
import { api } from '../services/api';

export default function LeituraQrcode(props) {
  //console.log(props);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [productData, setProductData] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanning(false);
    setScannedData(data);

    try {
     const reponse = await api.get("produto/" + data);
      setProductData(reponse.data)
    } catch {
      console.log("Erro ao buscar o produto.")
    }
  };


  
let getOp=props.route.params.Opercao;



  const startScan = () => {
    setScanning(true);
    setScannedData(null);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão de acesso à câmera...</Text>;
  }

  if (hasPermission === false) {
    return <Text>Acesso à câmera negado.</Text>;
  }
  return (
   

    
    <View style={styles.container}>
      <View style={css.containerTextPrincipal} >
            
            <Text style={css.textPrincipal}>STOCK MANAGER</Text>
        </View>
      {scanning ? (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        
        />
        

      ) : (
        

        <View style={styles.dataContainer}>
          <TouchableOpacity style={css.buttonProsseguir} onPress={() => props.navigation.navigate('Operacao',{
            Op:getOp,
            idItem:scannedData,

          })}>
            
            <Text style={css.titleAdd}>PROSSEGUIR</Text>
          </TouchableOpacity>
        
          <Text style={styles.dataText}>O ID do produto lido é: {scannedData}</Text>
          <Text style={styles.dataText}>Nome: {productData.descricao}</Text>
      
          <Button style={styles.button} title="Escanear QR Code" onPress={startScan} />
        </View>// scannedData e a variavel do conteudo do QRCode. Esta deve ser enviada junto na rota quando chamada a API
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  dataContainer: {
    height: "80%",
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin:1,
    backgroundColor: 'white',
    top: 90,
  },
  dataText: {
    fontSize: 20,
    marginBottom: 10,
  },

  button:{
    alignItems: 'center',
    top:30,
  },
});
