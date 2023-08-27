import { createContext, useEffect, useState } from "react"


export const TaskContext = createContext() //Contexto

//TaskContextProvider = Componente que va a englobar a todo
export function TaskContextProvider(props) {

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

/* TaskContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}; */

export default TaskContext
