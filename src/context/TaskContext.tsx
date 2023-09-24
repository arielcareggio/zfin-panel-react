import React, { createContext, useEffect } from "react";
import { OptionType } from "../types/Types";
import {
  useApiAllTotales,
  useApiAllTiposMovimientos
} from "./Funciones"; // Importa los hooks personalizados

// Define el tipo para el valor del contexto
type TaskContextValue = {
  apiTotales: any;
  apiTiposIngresos: OptionType[] | null;
  apiTiposEgresos: OptionType[] | null;
  fetchAllTotales: () => void;
};

export const TaskContext = createContext<TaskContextValue | null>(null);

interface TaskContextProviderProps {
  children: React.ReactNode;
}

export function TaskContextProvider(props: TaskContextProviderProps) {
  const { apiTotales, fetchAllTotales } = useApiAllTotales();
  const { apiTiposIngresos, apiTiposEgresos, fetchAllTiposMovimientos } = useApiAllTiposMovimientos();

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
      fetchAllTotales();
      fetchAllTiposMovimientos();
    };

    fetchData();
  }, []); // El [] asegura que se ejecute una vez al montar el componente

  
  return (
    <TaskContext.Provider value={{ apiTotales, apiTiposIngresos, apiTiposEgresos, fetchAllTotales }}>
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