# 🌿 Motiva App - Monitoramento de Vegetação em Rodovias

> **Status do Projeto:** Entregue (Sprint 2) 🚀

Aplicativo mobile desenvolvido em **React Native (Expo)** para a gestão e monitoramento inteligente do status de vegetação em trechos rodoviários. Este repositório contém a entrega referente à **Sprint 2** do projeto acadêmico.

## 🎯 Objetivos da Sprint 2
- Desenvolvimento de 3 telas funcionais com navegação (`react-navigation`).
- Implementação de fluxos principais utilizando dados mockados (sem dependência de APIs externas).
- Validação da experiência do usuário e atualização de estados na interface.
- Utilização de recursos nativos do dispositivo (GPS).

---

## 📱 Funcionalidades Implementadas

1. **Painel de Controle (Home):**
   - Listagem de trechos rodoviários.
   - Indicadores visuais de risco (Verde: Controlado, Amarelo: Atenção, Vermelho: Crítico).
2. **Detalhes do Trecho:**
   - Visualização do histórico de inspeções.
   - Lista detalhada de ocorrências ativas naquele trecho.
3. **Registro de Ocorrências (Com GPS):**
   - Formulário de reporte de problemas (ex: Mato alto, Risco de incêndio, Queda de árvore).
   - Captura automática das coordenadas geográficas (**Lat/Lng**) utilizando o recurso nativo de geolocalização do dispositivo.
   - Atualização dinâmica de estado: Ao registrar uma ocorrência, o status do trecho muda automaticamente para "Crítico" em toda a aplicação.

---

## 🛠️ Tecnologias Utilizadas

- **React Native** (Framework principal)
- **Expo** (Ambiente de desenvolvimento e build)
- **React Navigation** (Navegação em pilha - Stack Navigation)
- **React Context API** (Gerenciamento de estado global e Mock de Dados)
- **Expo Location** (Acesso nativo ao GPS do dispositivo)

---

## 💾 Estrutura de Mock de Dados (Context API)

Conforme os requisitos da Sprint 2, a integração com APIs reais ocorrerá nas próximas etapas. Atualmente, os dados estão sendo mockados localmente de forma realista utilizando a `Context API` do React.

- **Localização:** `src/context/MotivaContext.js`
- **Funcionamento:** O Context provê um payload em formato JSON contendo identificadores de trecho, rodovia, status calculados e um array de ocorrências. A função `adicionarOcorrencia` simula o método POST de uma API, atualizando o estado global do app em tempo real.

---

## 🚀 Como Executar o Projeto Localmente

Siga as instruções abaixo para rodar o projeto no seu ambiente local (necessário possuir o [Node.js](https://nodejs.org/) instalado).

**1. Clone o repositório:**
```bash
git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
