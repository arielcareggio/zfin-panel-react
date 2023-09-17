import axios from 'axios';

// Función para llamar a un endpoint protegido
export async function getApi(token: string | null, url: string) {
    if(token !== null){
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            //console.log("apiUrl: " + apiUrl + url);
            const response = await axios.get(apiUrl + url, {
                headers: {
                    Authorization: `Bearer ${token}`, // Incluye el token en las cabeceras de la solicitud
                },
            });

            // Maneja la respuesta del endpoint protegido aquí
            //console.log('Respuesta del endpoint protegido:', response.data);
            return response.data;
        } catch (error) {
            //console.error('Error al llamar al endpoint protegido:', error);
            return error;
        }
    }else{
        return 'Debe iniciar sesión';
    }
}