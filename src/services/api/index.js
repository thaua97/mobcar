import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9000/',
}) 

export async function addCar(car) {
    try {
        await api.post('cars', car);
    } catch (error) {
        return;
    }
};

export default api; 
