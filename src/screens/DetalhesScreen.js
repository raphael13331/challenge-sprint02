import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MotivaContext } from '../context/MotivaContext';

export default function DetalhesScreen({ route, navigation }) {
  const { trecho } = route.params;
  const { trechos } = useContext(MotivaContext);
  
  const trechoAtualizado = trechos.find(t => t.id === trecho.id);

  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <Text style={styles.title}>{trechoAtualizado.rodovia} - {trechoAtualizado.trecho}</Text>
        <Text style={styles.info}>Status: {trechoAtualizado.statusVegetacao}</Text>
        <Text style={styles.info}>Inspeção: {trechoAtualizado.ultimaInspecao}</Text>
      </View>

      <Text style={styles.sectionTitle}>Ocorrências Registradas</Text>
      
      {trechoAtualizado.ocorrencias.length === 0 ? (
        <Text style={styles.empty}>Nenhuma ocorrência neste trecho.</Text>
      ) : (
        <FlatList
          data={trechoAtualizado.ocorrencias}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.ocorrenciaCard}>
              <Text style={styles.ocorrenciaTitle}>{item.tipo}</Text>
              <Text style={styles.ocorrenciaDesc}>{item.descricao}</Text>
              <Text style={styles.ocorrenciaData}>{item.data}</Text>
              {item.coords && (
                <Text style={styles.ocorrenciaGps}>GPS: {item.coords.lat.toFixed(4)}, {item.coords.lng.toFixed(4)}</Text>
              )}
            </View>
          )}
        />
      )}

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Reportar', { trechoId: trecho.id })}
      >
        <Text style={styles.buttonText}>+ Registrar Nova Ocorrência</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  headerCard: { backgroundColor: '#E8F5E9', padding: 16, borderRadius: 8, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#2E7D32', marginBottom: 8 },
  info: { fontSize: 14, color: '#333', marginBottom: 4 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12, color: '#333' },
  empty: { fontStyle: 'italic', color: '#777', textAlign: 'center', marginTop: 20 },
  ocorrenciaCard: { backgroundColor: '#FFF', padding: 12, borderRadius: 6, marginBottom: 10, borderLeftWidth: 4, borderLeftColor: '#F44336' },
  ocorrenciaTitle: { fontWeight: 'bold', fontSize: 14 },
  ocorrenciaDesc: { color: '#555', marginTop: 4, fontSize: 13 },
  ocorrenciaData: { color: '#999', marginTop: 8, fontSize: 11 },
  ocorrenciaGps: { color: '#2196F3', marginTop: 4, fontSize: 11, fontWeight: 'bold' },
  button: { backgroundColor: '#2E7D32', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 16 },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});