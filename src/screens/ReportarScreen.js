import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { MotivaContext } from '../context/MotivaContext';

export default function ReportarScreen({ route, navigation }) {
  const { trechoId } = route.params;
  const { adicionarOcorrencia } = useContext(MotivaContext);
  
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSalvar = async () => {
    if (!tipo || !descricao) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    setLoading(true);
    let coords = null;

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      coords = { lat: location.coords.latitude, lng: location.coords.longitude };
    }

    const novaOcorrencia = {
      id: Math.random().toString(),
      tipo,
      descricao,
      data: new Date().toLocaleDateString('pt-BR'),
      coords
    };

    adicionarOcorrencia(trechoId, novaOcorrencia);
    setLoading(false);
    
    Alert.alert('Sucesso', 'Ocorrência registrada com sucesso!', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de Ocorrência (Ex: Árvore caída, Risco de incêndio)</Text>
      <TextInput style={styles.input} value={tipo} onChangeText={setTipo} placeholder="Digite o tipo..." />

      <Text style={styles.label}>Descrição Detalhada</Text>
      <TextInput 
        style={[styles.input, styles.textArea]} 
        value={descricao} 
        onChangeText={setDescricao} 
        placeholder="Descreva a situação encontrada..."
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={handleSalvar} disabled={loading}>
        {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.buttonText}>Registrar com GPS e Salvar</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 8, marginTop: 12 },
  input: { borderWidth: 1, borderColor: '#CCC', borderRadius: 8, padding: 12, fontSize: 14 },
  textArea: { height: 100, textAlignVertical: 'top' },
  button: { backgroundColor: '#2E7D32', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 32 },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});