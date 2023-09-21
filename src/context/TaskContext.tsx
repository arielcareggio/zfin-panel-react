import React, { createContext, useEffect, useState } from "react";
import { getApi } from "../components/services/apiService";
import { API_GET_TIPOS, API_GET_TOTALES } from '../../apiConfig';
import { HttpMethod } from "../types/HttpMethod";


// Define el tipo para el valor del contexto
type TaskContextValue = {
  apiTipos: any; // Cambia 'any' por el tipo adecuado si lo conoces
  apiTotales: any;
};

export const TaskContext = createContext<TaskContextValue | null>(null); // Contexto

interface TaskContextProviderProps {
  children: React.ReactNode;
}

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [apiTipos, setTipos] = useState<any>(null);
  const [apiTotales, setTotales] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      //Credenciales, modificar con el login
      localStorage.setItem('token', '23|IJaCobeBQgn0cXFpjVLlnddzBWhZeo4cxW5jgNIL88f0fc84');
      localStorage.setItem('user_id', '1');
      localStorage.setItem('name', 'Ariel');
      localStorage.setItem('last_name', 'Car');
      localStorage.setItem('email', 'ariel@gmail.com"');
      localStorage.setItem('phone', '3572556699');

      // Función para obtener tipos
      const fetchTipos = async () => {
        try {

          const response = await getApi(HttpMethod.GET, localStorage.getItem('token'), API_GET_TIPOS);
          setTipos(response.data);
        } catch (e) {
          console.error("Error fetching tipos:", e);
        }
      };

      // Función para obtener otros datos
      const fetchTotales = async () => {
        try {
          const response = await getApi(HttpMethod.POST, localStorage.getItem('token'), API_GET_TOTALES);
          setTotales(response.data);
        } catch (e) {
          console.error("Error fetching Totales:", e);
        }
      };

      // Llama a las funciones para obtener datos
      fetchTipos();
      fetchTotales();
    };

    fetchData();
  }, []); // El [] asegura que se ejecute una vez al montar el componente

  return (
    // Creamos el componente y le pasamos un objeto con las funciones y arreglo:
    <TaskContext.Provider value={{ apiTipos, apiTotales }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;

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