import React, { createContext, useState } from 'react';

export const MotivaContext = createContext();

const mockInicial = [
  {
    id: '1',
    rodovia: 'BR-116',
    trecho: 'Km 10 ao 20',
    statusVegetacao: 'Crítico',
    ultimaInspecao: '12/10/2023',
    ocorrencias: [
      { id: '101', tipo: 'Queda de Árvore', descricao: 'Árvore bloqueando acostamento.', data: '14/10/2023' }
    ]
  },
  {
    id: '2',
    rodovia: 'BR-116',
    trecho: 'Km 20 ao 30',
    statusVegetacao: 'Controlado',
    ultimaInspecao: '15/10/2023',
    ocorrencias: []
  },
  {
    id: '3',
    rodovia: 'BR-101',
    trecho: 'Km 50 ao 65',
    statusVegetacao: 'Atenção',
    ultimaInspecao: '10/10/2023',
    ocorrencias: [
      { id: '102', tipo: 'Mato Alto', descricao: 'Sinalização encoberta pela vegetação.', data: '16/10/2023' }
    ]
  }
];

export const MotivaProvider = ({ children }) => {
  const [trechos, setTrechos] = useState(mockInicial);

  const adicionarOcorrencia = (trechoId, novaOcorrencia) => {
    setTrechos(trechosAtuais => 
      trechosAtuais.map(trecho => {
        if (trecho.id === trechoId) {
          return {
            ...trecho,
            statusVegetacao: 'Crítico',
            ocorrencias: [...trecho.ocorrencias, novaOcorrencia]
          };
        }
        return trecho;
      })
    );
  };

  return (
    <MotivaContext.Provider value={{ trechos, adicionarOcorrencia }}>
      {children}
    </MotivaContext.Provider>
  );
};