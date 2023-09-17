import { createContext, useEffect, useState } from "react"
import { getApi } from "../components/services/apiService";

export const TaskContext = createContext() //Contexto

//TaskContextProvider = Componente que va a englobar a todo

/* ACÁ SE PONEN LAS VARIABLES, DATOS, ARRAY, OBJETOS GLOBALES */

export function TaskContextProvider(props) {

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Credenciales, modificar con el login
        localStorage.setItem('token', '21|fRYzXEi9Vlxbwi1DgULcgZs0K3KLLJVaAdWXlcIM');
        localStorage.setItem('user_id', '1');
        localStorage.setItem('name', 'Ariel');
        localStorage.setItem('last_name', 'Car');
        localStorage.setItem('email', 'ariel@gmail.com"');
        localStorage.setItem('phone', '3572556699');

        const response = await getApi(localStorage.getItem('token'), '/tipos/getAllTipos');
        console.log("response: " + response.value);
        // Aquí puedes realizar acciones con la respuesta, como establecer el estado del contexto.
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // El [] asegura que se ejecute una vez al montar el componente

  return (
    //Creamos el componente y le pasamos un objeto con las funciones y arreglo:
    <TaskContext.Provider value={
      {
        //tasks,
        //deleteTask,
        //createTask
      }
    }>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext

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