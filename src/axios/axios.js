import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:5000/api/v1",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    getEventos:() => api.get("/evento"),
    getIngressos:() => api.get("/ingresso"),
    getOrganizador:() => api.get("/organizador")
}

export default sheets;