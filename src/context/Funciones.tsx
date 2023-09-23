/* import { API_GET_TIPOS_MOVIMIENTOS } from "../../configApi";
import { getApi } from "../components/services/apiService";
import { HttpMethod } from "../types/HttpMethod";
import { datosMovimientosTipos } from "../types/Types";

const fetchTiposMovimientos = async () => {
    const response = await getApi(HttpMethod.POST, localStorage.getItem('token'), API_GET_TIPOS_MOVIMIENTOS);
    if (response.error) {
      console.error("Error fetching Totales: " + response.error);
    } else {
      //const tipos: data = response.data as data;
      //const datos: datosMovimientosTipos[] = tipos.data as datosMovimientosTipos[];
      const { data: datos } = response.data as { data: datosMovimientosTipos[] };
      let arrayIngresos = [];
      let arrayEgresos = [];

      while (datos.length > 0) {
        const dato = datos.shift(); // shift() extrae el primer elemento y lo SACA del array
        if (!dato) continue; // Evita errores si dato es undefined

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
  }; */
