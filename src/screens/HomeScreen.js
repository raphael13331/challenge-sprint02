import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MotivaContext } from '../context/MotivaContext';

export default function HomeScreen({ navigation }) {
  const { trechos } = useContext(MotivaContext);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Controlado': return '#4CAF50';
      case 'Atenção': return '#FFC107';
      case 'Crítico': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('Detalhes', { trecho: item })}
    >
      <Text style={styles.title}>{item.rodovia} - {item.trecho}</Text>
      <View style={styles.statusContainer}>
        <View style={[styles.badge, { backgroundColor: getStatusColor(item.statusVegetacao) }]} />
        <Text style={styles.statusText}>Status: {item.statusVegetacao}</Text>
      </View>
      <Text style={styles.info}>Última Inspeção: {item.ultimaInspecao}</Text>
      <Text style={styles.info}>Ocorrências ativas: {item.ocorrencias.length}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Monitoramento de Vegetação</Text>
      <FlatList
        data={trechos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 16, color: '#333' },
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 8, marginBottom: 12, elevation: 2 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#2E7D32', marginBottom: 8 },
  statusContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  badge: { width: 12, height: 12, borderRadius: 6, marginRight: 8 },
  statusText: { fontSize: 14, fontWeight: '600', color: '#555' },
  info: { fontSize: 12, color: '#777', marginTop: 4 }
});