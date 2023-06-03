import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function LeituraQrcode() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanning(false);
    setScannedData(data);
  };

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
      {scanning ? (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <View style={styles.dataContainer}>
          <Text style={styles.dataText}>{scannedData}</Text>
          <Button title="Escanear QR Code" onPress={startScan} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 20,
    marginBottom: 10,
  },
});
