// Funciones.tsx

import { API_GET_TIPOS_MOVIMIENTOS, API_GET_TOTALES } from "../../configApi";
import { getApi } from "../components/services/apiService";
import { HttpMethod } from "../types/HttpMethod";
import { datosMovimientosTipos } from "../types/Types";
import { useState } from 'react';


/**
 * Llamamos al EndPoint para obtener todos los totales de las cuentas
 * @returns respuesta del EndPoint con los datos
 */
export function useApiAllTotales() {
    const [apiTotales, setTotales] = useState<any>(null);
    const fetchAllTotales = async () => {

        const response = await getApi(HttpMethod.POST, localStorage.getItem('token'), API_GET_TOTALES);
        if (response.error) {
            console.error("Error fetching Totales: " + response.error);
        } else {
            setTotales(response.data);
        }
    };
    return { apiTotales, fetchAllTotales };
}

/**
 * Para Select: Llamamos al EndPoint para obtener todos los Tipos de Movimientos y trabajamos el resultado para que se pueda cargar en los Select
 * @returns array con objetos {value: string, label: string} listo para cargar en Select
 */
export function useApiAllTiposMovimientos() {
    const [apiTiposIngresos, setTiposIngresos] = useState<any>(null);
    const [apiTiposEgresos, setTiposEgresos] = useState<any>(null);
    const fetchAllTiposMovimientos = async () => {
        const response = await getApi(HttpMethod.POST, localStorage.getItem('token'), API_GET_TIPOS_MOVIMIENTOS);
        if (response.error) {
            console.error("Error fetching Tipos de Movimientos: " + response.error);
        } else {
            const { data: datos } = response.data as { data: datosMovimientosTipos[] };
            let arrayIngresos = [];
            let arrayEgresos = [];

            while (datos.length > 0) {
                const dato = datos.shift();
                if (!dato) continue;

                const array = paraSelect(dato);

                if (dato.id_tipo === 1) {
                    arrayIngresos.push(array);
                } else {
                    arrayEgresos.push(array);
                }
            }
            console.log(arrayIngresos);
            console.log(arrayEgresos);
            setTiposIngresos(arrayIngresos);
            setTiposEgresos(arrayEgresos);
        }
    };

    return { apiTiposIngresos, apiTiposEgresos, fetchAllTiposMovimientos};
}
/**
 * Armamos el objeto que se utiliza en los select con formato {value: string, label: string}
 * @param dato recibe el dato con formato datosMovimientosTipos
 * @returns objeto con formato {value: string, label: string}
 */
function paraSelect(dato: datosMovimientosTipos) {
    const objeto = {
        value: dato.id.toString(),
        label: dato.name,
    };
    return objeto;
}
