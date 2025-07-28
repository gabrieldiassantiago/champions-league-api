# Champions League API

Uma API REST para gerenciamento de jogadores de futebol da Champions League, desenvolvida em TypeScript com Express.js seguindo princípios de Programação Orientada a Objetos (POO).

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
- [Modelos de Dados](#modelos-de-dados)
- [Arquitetura](#arquitetura)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuição](#contribuição)

## 🎯 Sobre o Projeto

Esta API permite gerenciar informações de jogadores de futebol, incluindo dados pessoais, clube, posição e estatísticas detalhadas. O projeto foi desenvolvido como um estudo de caso para aplicação de conceitos de POO em TypeScript.

### Funcionalidades

- ✅ Listar todos os jogadores
- ✅ Buscar jogador por ID
- ✅ Criar novo jogador
- ✅ Atualizar estatísticas de jogador
- ✅ Deletar jogador

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Express.js** - Framework web para Node.js
- **TSX** - TypeScript execution environment
- **TSUp** - Build tool para TypeScript

### Dependências de Desenvolvimento

```json
{
  "@types/express": "^5.0.3",
  "tsup": "^8.5.0",
  "tsx": "^4.20.3",
  "typescript": "^5.8.3"
}
```

### Dependências de Produção

```json
{
  "express": "^5.1.0"
}
```

## 📁 Estrutura do Projeto

```
src/
├── app.ts                    # Configuração principal da aplicação
├── server.ts                 # Servidor HTTP
├── routes.ts                 # Definição das rotas
├── controllers/              # Controladores (camada de apresentação)
│   └── players.controller.ts
├── services/                 # Serviços (lógica de negócio)
│   └── players-service.ts
├── repositories/             # Repositórios (camada de dados)
│   └── players-repository.ts
├── models/                   # Modelos/Interfaces
│   ├── player-model.ts
│   └── statistics-model.ts
└── utils/                    # Utilitários
    └── http-helper.ts
```

## 🔧 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/gabrieldiassantiago/champions-league-api.git
   cd champions-league-api
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   # Crie um arquivo .env na raiz do projeto
   PORT=3000
   ```

## 🎮 Uso

### Modo de Desenvolvimento

```bash
npm run start:dev
```

### Modo de Monitoramento

```bash
npm run start:watch
```

### Modo de Produção

```bash
npm run start:dist
```

O servidor estará disponível em `http://localhost:3000`

## 🌐 Endpoints da API

### Base URL
```
http://localhost:3000/api
```

### 1. Listar Todos os Jogadores

**GET** `/api/players`

**Resposta:**
```json
[
  {
    "id": 1,
    "name": "Kevin De Bruyne",
    "club": "Liverpool",
    "nationality": "Norway",
    "position": "Goalkeeper",
    "statistics": {
      "Overall": 97,
      "Pace": 90,
      "Shooting": 63,
      "Passing": 60,
      "Dribbling": 75,
      "Defending": 84,
      "Physical": 89
    }
  }
]
```

### 2. Buscar Jogador por ID

**GET** `/api/players/:id`

**Parâmetros:**
- `id` (number): ID do jogador

**Resposta:**
```json
{
  "id": 1,
  "name": "Kevin De Bruyne",
  "club": "Liverpool",
  "nationality": "Norway",
  "position": "Goalkeeper",
  "statistics": {
    "Overall": 97,
    "Pace": 90,
    "Shooting": 63,
    "Passing": 60,
    "Dribbling": 75,
    "Defending": 84,
    "Physical": 89
  }
}
```

### 3. Criar Novo Jogador

**POST** `/api/players`

**Body:**
```json
{
  "id": 101,
  "name": "Lionel Messi",
  "club": "Paris Saint-Germain",
  "nationality": "Argentina",
  "position": "Forward",
  "statistics": {
    "Overall": 95,
    "Pace": 85,
    "Shooting": 92,
    "Passing": 91,
    "Dribbling": 95,
    "Defending": 40,
    "Physical": 65
  }
}
```

### 4. Atualizar Estatísticas do Jogador

**PATCH** `/api/players/:id`

**Parâmetros:**
- `id` (number): ID do jogador

**Body:**
```json
{
  "Overall": 96,
  "Pace": 86,
  "Shooting": 93,
  "Passing": 92,
  "Dribbling": 96,
  "Defending": 42,
  "Physical": 67
}
```

### 5. Deletar Jogador

**DELETE** `/api/players/:id`

**Parâmetros:**
- `id` (number): ID do jogador

**Resposta:**
```json
{
  "message": "Player deleted successfully"
}
```

## 📊 Modelos de Dados

### PlayerModel

```typescript
interface PlayerModel {
  id: number;
  name: string;
  club: string;
  position: string;
  nationality: string;
  statistics: StatisticsModel;
}
```

### StatisticsModel

```typescript
interface StatisticsModel {
  Overall: number;    // Avaliação geral (0-100)
  Pace: number;       // Velocidade (0-100)
  Shooting: number;   // Finalização (0-100)
  Passing: number;    // Passe (0-100)
  Dribbling: number;  // Drible (0-100)
  Defending: number;  // Defesa (0-100)
  Physical: number;   // Físico (0-100)
}
```

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas (Layered Architecture) com separação clara de responsabilidades:

### 1. **Camada de Apresentação (Controllers)**
- Responsável por receber as requisições HTTP
- Validação de entrada
- Formatação de resposta

### 2. **Camada de Negócio (Services)**
- Contém a lógica de negócio da aplicação
- Orquestra as operações entre camadas
- Validações de regras de negócio

### 3. **Camada de Dados (Repositories)**
- Responsável pelo acesso aos dados
- Simula um banco de dados em memória
- Operações CRUD

### 4. **Camada de Utilitários (Utils)**
- Funções auxiliares
- Helpers para HTTP responses
- Utilitários compartilhados

### Fluxo de Dados

```
HTTP Request → Controller → Service → Repository → Database (In-Memory)
HTTP Response ← Controller ← Service ← Repository ← Database (In-Memory)
```

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| Desenvolvimento | `npm run start:dev` | Inicia o servidor em modo de desenvolvimento com watch |
| Watch | `npm run start:watch` | Inicia o servidor com monitoramento de arquivos |
| Produção | `npm run start:dist` | Executa a versão compilada |
| Teste | `npm test` | Executa os testes (não implementado) |

## 🔧 Configuração do TypeScript

O projeto utiliza as seguintes configurações TypeScript principais:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## 📝 Códigos de Status HTTP

| Código | Descrição |
|--------|-----------|
| 200 | OK - Requisição bem-sucedida |
| 204 | No Content - Nenhum conteúdo encontrado |
| 400 | Bad Request - Dados inválidos |

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

**Gabriel Dias Santiago**
- GitHub: [@gabrieldiassantiago](https://github.com/gabrieldiassantiago)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!