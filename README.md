# Sistema de Monitoramento de Vegetação - Motiva

## Integrantes

* Nome Completo – RM XXXXXXX
* Nome Completo – RM XXXXXXX
* Nome Completo – RM XXXXXXX
* Nome Completo – RM XXXXXXX
* Nome Completo – RM XXXXXXX

## Descrição do Projeto

O Sistema de Monitoramento de Vegetação foi desenvolvido para auxiliar a Motiva no acompanhamento remoto de áreas de vegetação próximas às rodovias.

A solução permite visualizar trechos monitorados, consultar ocorrências registradas e acompanhar o status da vegetação em diferentes pontos da rodovia. O objetivo é contribuir para a prevenção de riscos como incêndios, queda de árvores e obstrução das vias, facilitando a tomada de decisão das equipes responsáveis pela manutenção.

## Tecnologias Utilizadas

* React Native
* Expo
* JavaScript
* React Navigation
* Context API
* StyleSheet

## Estrutura do Projeto

src/
├── screens/
│   ├── Home.js
│   ├── Monitoramento.js
│   └── Ocorrencias.js
│
├── data/
│   └── mockData.js
│
├── components/
│
├── context/
│
└── navigation/

## Instalação

1. Clone o repositório:

git clone URL_DO_REPOSITORIO

2. Entre na pasta do projeto:

cd nome-do-projeto

3. Instale as dependências:

npm install

4. Execute o projeto:

npx expo start

5. Abra o aplicativo utilizando:

* Expo Go no celular
* Emulador Android
* Simulador iOS

## Mocks Utilizados

Nesta Sprint foi utilizada uma camada de dados simulados (mock) para representar informações que futuramente serão obtidas por meio de APIs reais.

Os mocks estão armazenados no arquivo:

src/data/mockData.js

### Dados Simulados

#### Ocorrências

* Vegetação alta próxima à pista
* Árvore com risco de queda
* Possível foco de incêndio

#### Trechos Monitorados

* KM 120
* KM 135
* KM 150

#### Status da Vegetação

* Baixa
* Média
* Alta

## Fluxo Funcional Demonstrado

O aplicativo possui um fluxo completo utilizando dados mockados:

1. O usuário acessa a tela de Ocorrências.
2. Visualiza as ocorrências registradas.
3. Seleciona a opção "Resolver".
4. O status da ocorrência é atualizado para "Resolvido".
5. A interface é atualizada automaticamente, simulando o comportamento de uma aplicação conectada a uma API.

## Telas Implementadas

### Home

Tela inicial com apresentação da solução.

### Monitoramento

Exibe os trechos monitorados e o status atual da vegetação.

### Ocorrências

Lista as ocorrências registradas e permite atualizar seu status.

## Relação com o Problema da Motiva

A proposta busca auxiliar a Motiva no monitoramento preventivo da vegetação próxima às rodovias, permitindo identificar rapidamente situações de risco e registrar ocorrências de forma organizada.

Mesmo utilizando dados simulados nesta Sprint, a estrutura foi preparada para futura integração com APIs, possibilitando monitoramento em tempo real e maior eficiência operacional.

## Vídeo de Demonstração

O vídeo apresenta:

* Navegação entre as telas;
* Exibição dos dados mockados;
* Atualização de status das ocorrências;
* Funcionamento geral da solução proposta para a Motiva.
