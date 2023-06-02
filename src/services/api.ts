import axios from 'axios';

const siteUrl = '';
const apiURL = 'https://apimikrokosmos.codie.digital/';
const painelURL = 'https://painel-grandnet.codiehost.com.br/';

const api = axios.create({
  baseURL: apiURL,
});

const pathsApi = {
  apiURL,
  projectName: 'Empório Guimaraes',
  base: painelURL,
  uploads: painelURL + 'uploads/',
  file: painelURL + 'arquivos/Portfolio/',
  service: painelURL + 'imagens/Servico/',
  product: painelURL + 'imagens/Produto/',
  portfolio: painelURL + 'imagens/Portfolio/',
};

export { api, apiURL, pathsApi, painelURL, siteUrl };
