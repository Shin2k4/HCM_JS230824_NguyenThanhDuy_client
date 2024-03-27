import axios from "axios";

export const todoApi = {
    create: async (data:string) => {
        return await axios.post(`${import.meta.env.VITE_SV_API_URL}/api/v1/todo`, data)
    },
    findAll: async () => {
        return await axios.get(`${import.meta.env.VITE_SV_API_URL}/api/v1/todo/${localStorage.getItem("token")}`)
    },
    delete: async (id:string) => {
        return await axios.delete(`${import.meta.env.VITE_SV_API_URL}/api/v1/todo/${id}`)
    }
}