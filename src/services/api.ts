import axios from 'axios';

const siteUrl = '';
const apiURL = '';
const painelURL = '';

const api = axios.create({
  baseURL: apiURL,
});

const pathsApi = {
  apiURL,
  projectName: 'Base',
  base: painelURL,
  uploads: painelURL + 'uploads/',
  file: painelURL + 'arquivos/Portfolio/',
  service: painelURL + 'imagens/Servico/',
  product: painelURL + 'imagens/Produto/',
  portfolio: painelURL + 'imagens/Portfolio/',
  blogs: '',
};

export { api, apiURL, pathsApi, painelURL, siteUrl };
