# Sistema de Monitoramento de Vegetação - Motiva

## Integrantes

* Raphael Talarico Nascimento Silva – RM 565219
* Leonardo Luster Gomes – RM 564448
* Nelson Troccoli Santos Neto – RM 562815
* Kauã da Silva Lazarim – RM 564625

## Descrição do Projeto

O Sistema de Monitoramento de Vegetação é uma aplicação mobile desenvolvida em React Native com o objetivo de auxiliar a Motiva na identificação, acompanhamento e gerenciamento de áreas de vegetação localizadas próximas às rodovias sob sua administração.

A vegetação excessiva nas margens das estradas pode representar diversos riscos operacionais e de segurança, como aumento da probabilidade de incêndios, queda de árvores sobre a pista, redução da visibilidade dos motoristas e dificuldades na realização de inspeções e manutenções preventivas. Diante desse cenário, o projeto foi concebido para fornecer uma ferramenta digital que centraliza informações sobre trechos monitorados e ocorrências registradas, facilitando a tomada de decisão das equipes responsáveis.

A aplicação permite visualizar diferentes trechos da rodovia, consultar o status da vegetação em cada localidade e acompanhar ocorrências relacionadas a possíveis riscos ambientais e operacionais. Além disso, o sistema oferece um fluxo funcional para atualização do status das ocorrências, simulando o processo que seria realizado pelas equipes de campo após uma inspeção ou intervenção.

Nesta Sprint, o aplicativo utiliza dados mockados para representar informações reais que futuramente serão obtidas por meio de APIs e serviços integrados. Os dados simulados incluem ocorrências, trechos monitorados, níveis de vegetação e registros de inspeção, permitindo validar a experiência do usuário, a navegação entre telas e o comportamento geral da solução sem depender de infraestrutura externa.

A arquitetura do projeto foi organizada de forma modular, separando telas, componentes, navegação e dados, garantindo maior legibilidade, facilidade de manutenção e escalabilidade para futuras implementações. Dessa forma, o sistema já está preparado para evoluir com a integração de recursos como geolocalização, notificações em tempo real, captura de imagens em campo e monitoramento automatizado por meio de APIs e sensores.

Com essa solução, busca-se contribuir para uma gestão mais eficiente da vegetação ao longo das rodovias, promovendo maior segurança para os usuários, redução de riscos operacionais e otimização dos processos de monitoramento e manutenção realizados pela Motiva.

## 🛠️ Tecnologias Utilizadas

- **React Native** (Framework principal)
- **Expo** (Ambiente de desenvolvimento e build)
- **React Navigation** (Navegação em pilha - Stack Navigation)
- **React Context API** (Gerenciamento de estado global e Mock de Dados)
- **Expo Location** (Acesso nativo ao GPS do dispositivo)

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

## 📱 Telas do Aplicativo

### Home — Dashboard Principal
![MENU](https://misleading-blush-vvrqo7lx.edgeone.app/Captura%20de%20tela%202026-06-15%20190953.png)


### Dashboard Do Trecho 1
![TRECHO 1](https://civic-violet-rmhbyei3.edgeone.app/Captura%20de%20tela%202026-06-15%20191540.png)

### Dashboard Do Trecho 2
![TRECHO 2](https://definite-red-hmgafckm.edgeone.app/Captura%20de%20tela%202026-06-15%20191836.png)

### Dashboard Do Trecho 3
![TRECHO 3](https://distinguished-peach-20rrpmfl.edgeone.app/Captura%20de%20tela%202026-06-15%20192327.png)
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
**[Acessar Video no YOUTUBE]()**
* Navegação entre as telas;
* Exibição dos dados mockados;
* Atualização de status das ocorrências;
* Funcionamento geral da solução proposta para a Motiva.
