import React, { createContext, useEffect, useState } from "react";
import { getApi } from "../components/services/apiService";
import { API_GET_TIPOS_MOVIMIENTOS, API_GET_TOTALES } from '../../configApi';
import { HttpMethod } from "../types/HttpMethod";
import { OptionType, datosMovimientosTipos } from "../types/Types";

// Define el tipo para el valor del contexto
type TaskContextValue = {
  apiTotales: any;
  apiTiposIngresos: OptionType[] | null;
  apiTiposEgresos: OptionType[] | null;
  fetchTotales: () => void;
};

export const TaskContext = createContext<TaskContextValue | null>(null);

interface TaskContextProviderProps {
  children: React.ReactNode;
}

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [apiTotales, setTotales] = useState<any>(null);
  const [apiTiposIngresos, setTiposIngresos] = useState<any>(null);
  const [apiTiposEgresos, setTiposEgresos] = useState<any>(null);

  // Función para obtener otros datos
  const fetchTotales = async () => {
    const response = await getApi(HttpMethod.POST, localStorage.getItem('token'), API_GET_TOTALES);
    if (response.error) {
      console.error("Error fetching Totales: " + response.error);
    } else {
      setTotales(response.data);
    }
  };

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
  };

  useEffect(() => {
    const fetchData = async () => {
      //Credenciales, modificar con el login
      localStorage.setItem('token', '23|IJaCobeBQgn0cXFpjVLlnddzBWhZeo4cxW5jgNIL88f0fc84');
      localStorage.setItem('user_id', '1');
      localStorage.setItem('name', 'Ariel');
      localStorage.setItem('last_name', 'Car');
      localStorage.setItem('email', 'ariel@gmail.com"');
      localStorage.setItem('phone', '3572556699');

      // Llama a las funciones para obtener datos
      //setTipos(tipos);
      fetchTotales();
      fetchTiposMovimientos();
    };

    fetchData();
  }, []); // El [] asegura que se ejecute una vez al montar el componente

  return (
    <TaskContext.Provider value={{ apiTotales, apiTiposIngresos, apiTiposEgresos, fetchTotales }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;

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






/* TaskContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}; */


//Como primero se carga el componente y despues se obtienen los datos de "tasks", debemos setear el tasks = [] y luego rellenarlo con useEffect
/* const [tasks, setTasks] = useState([]); // => const tasks = []

//Va a recibir una nueva tarea y la va a agregar al arreglo
function createTask(task) {
  setTasks([...tasks, {
    title: task.title,
    id: tasks.length, //Incrementa el valor
    descripcion: task.descripcion
  }]) //crea un nuevo arreglo agregando el valor indicado, sin alterar el arreglo original
}

function deleteTask(taskId) {
  setTasks(tasks.filter(task => task.id !== taskId)) //tasks.filter(n => n !== 99 ) //Crea un nuevo arreglo con los que son !== 99
}

//Como primero se carga el componente y despues se obtienen los datos de "tasks", debemos utilizar el UseEffect para cargar los datos dentro de "tasks"
useEffect(() => {
  setTasks(data)
}, []) */