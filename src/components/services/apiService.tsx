import axios from 'axios';
import { HttpMethod } from '../../types/HttpMethod';

type ApiError = {
    status: number;
    message: string;
    // Otras propiedades de error si las necesito
};

type ApiResponse<T> = {
    data?: T;
    error?: ApiError; // Anotación de tipo explícita
};

export async function getApi<T>(method: HttpMethod, token: string | null, url: string, data: any = null): Promise<ApiResponse<T>> {
    if (token !== null) {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const headers = { Authorization: `Bearer ${token}` };
            let response = null;
            switch (method) {
                case HttpMethod.GET:
                    response = await axios.get(apiUrl + url, { headers });
                    return { data: response.data };
                case HttpMethod.POST:
                    response = await axios.post(apiUrl + url, data, { headers });
                    return { data: response.data };
                case HttpMethod.DELETE:
                    response = await axios.delete(apiUrl + url, {
                        headers: headers,
                        params: data
                      });
                    return { data: response.data };
                default:
                    return { error: { status: 400, message: 'Método HTTP no válido' } };
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const response = error.response;
                if (response) {
                    // Maneja el error según el código de estado HTTP
                    switch (response.status) {
                        case 401:
                            return { error: { status: 401, message: 'Debe iniciar sesión' } };
                        default:
                            return { error: { status: response.status, message: response.data?.message || 'Error desconocido' } };
                    }
                }
            }
            // Error desconocido
            return { error: { status: 500, message: 'Error desconocido' } };
        }
    } else {
        return { error: { status: 401, message: 'Debe iniciar sesión' } };
    }
}
