import axios from 'axios';

//https://api.hgbrasil.com/weather?key=cfde9b9f&lat=-23.682&lon=-46.875

export const key = 'cfde9b9f';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;