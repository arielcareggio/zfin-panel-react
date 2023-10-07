// Funciones.tsx

import { API_GET_ACCESOS_DIRECTOS, API_GET_CUENTAS, API_GET_MOVIMIENTOS, API_GET_TIPOS_MOVIMIENTOS, API_GET_TOTALES } from "../../configApi";
import { getApi } from "../components/services/apiService";
import { HttpMethod } from "../types/HttpMethod";
import { data, dataPagination, datosAccesosDirectos, datosMovimientosTipos } from "../types/Types";
import { useState, useEffect } from 'react';


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
            console.log('Hola');
            setTotales(response.data);
        }
    };
    return { apiTotales, fetchAllTotales };
}

/**
 * Llamamos al EndPoint para obtener todos los totales de las cuentas
 * @returns respuesta del EndPoint con los datos
 */
export function useApiAllMovimientos(idCuenta: number, page: number, per_page: number): dataPagination {
    const [ApiMovimientos, setMovimientos] = useState<dataPagination>();

    useEffect(() => {
        const fetchAllMovimientos = async () => {
            let dataToSend = {
                id_cuenta: idCuenta,
                page: page, // Página actual
                per_page: per_page // Número de elementos por página
            };

            const response = await getApi(HttpMethod.POST, localStorage.getItem('token'), API_GET_MOVIMIENTOS, dataToSend);

            if (response.error) {
                console.error("Error fetching Movimientos: " + response.error);
            } else {
                if (response.data) {
                    const datos: data = response.data ?? '';
                    const datos_nuevos: dataPagination = datos.data ?? '';
                    setMovimientos(datos_nuevos);
                }
            }
        };

        fetchAllMovimientos();
    }, [idCuenta, page]);

    return ApiMovimientos ?? {
        data: [],
        current_page: 0,
        last_page: 0,
        per_page: 0,
        to: 0,
        total: 0,
    };
}


/**
 * Para Select: Llamamos al EndPoint para obtener todos los Tipos de Movimientos y trabajamos el resultado para que se pueda cargar en los Select
 * @returns array con objetos {value: string, label: string} listo para cargar en Select
 */
export function useApiAllCuentas() {
    const [apiCuentas, setCuentas] = useState<any>(null);
    const fetchAllCuentas = async () => {
        const response = await getApi(HttpMethod.POST, localStorage.getItem('token'), API_GET_CUENTAS);
        if (response.error) {
            console.error("Error fetching Movimientos Accesos Directos: " + response.error);
        } else {
            const { data: datos } = response.data as { data: datosAccesosDirectos[] };
            let arrayCuentas = [];

            while (datos.length > 0) {
                const dato = datos.shift();
                if (!dato) continue;

                const array = {
                    value: dato.id.toString(),
                    label: dato.name,
                    id_movimiento_tipo: dato.id_movimiento_tipo,
                    monto: dato.monto
                };

                arrayCuentas.push(array);
                
            }
            console.log(arrayCuentas);
            setCuentas(arrayCuentas);

        }
    };

    return { apiCuentas, fetchAllCuentas };
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

    return { apiTiposIngresos, apiTiposEgresos, fetchAllTiposMovimientos };
}

/**
 * Para Select: Llamamos al EndPoint para obtener todos los Tipos de Movimientos y trabajamos el resultado para que se pueda cargar en los Select
 * @returns array con objetos {value: string, label: string} listo para cargar en Select
 */
export function useApiAllAccesosDirectos() {
    const [apiAccesosDirectosIngresos, setTiposIngresos] = useState<any>(null);
    const [apiAccesosDirectosEgresos, setTiposEgresos] = useState<any>(null);
    const fetchAllAccesosDirectos = async () => {
        const response = await getApi(HttpMethod.POST, localStorage.getItem('token'), API_GET_ACCESOS_DIRECTOS);
        if (response.error) {
            console.error("Error fetching Movimientos Accesos Directos: " + response.error);
        } else {
            const { data: datos } = response.data as { data: datosAccesosDirectos[] };
            let arrayAccesosDirectosIngresos = [];
            let arrayAccesosDirectosEgresos = [];

            while (datos.length > 0) {
                const dato = datos.shift();
                if (!dato) continue;

                const array = {
                    value: dato.id.toString(),
                    label: dato.name,
                    id_movimiento_tipo: dato.id_movimiento_tipo,
                    monto: dato.monto
                };

                if (dato.id_tipo === 1) {
                    arrayAccesosDirectosIngresos.push(array);
                } else {
                    arrayAccesosDirectosEgresos.push(array);
                }
            }
            console.log(arrayAccesosDirectosIngresos);
            console.log(arrayAccesosDirectosEgresos);
            setTiposIngresos(arrayAccesosDirectosIngresos);
            setTiposEgresos(arrayAccesosDirectosEgresos);
        }
    };

    return { apiAccesosDirectosIngresos, apiAccesosDirectosEgresos, fetchAllAccesosDirectos };
}
/**
 * Armamos el objeto que se utiliza en los select con formato {value: string, label: string}
 * @param dato recibe el dato con formato datosMovimientosTipos
 * @returns objeto con formato {value: string, label: string}
 */
function paraSelect(dato: datosMovimientosTipos) {
    const objeto = {
        value: dato.id.toString(),
        label: dato.name
    };
    return objeto;
}
