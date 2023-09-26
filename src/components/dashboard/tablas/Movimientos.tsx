import TaskContext from "../../../context/TaskContext";
import { datosMovimientos } from "../../../types/Types"
import { useContext } from 'react';

function Movimientos() {
  const taskContext = useContext(TaskContext);
  if (!taskContext) {
    return <div>Contexto no disponible</div>;// El contexto es nulo, maneja esta situación si es necesario
  }
  const { ApiMovimientos } = taskContext;

  const movimientos: datosMovimientos[] = ApiMovimientos ? ApiMovimientos : [];

  // const datos: data[] = movimientos;

  console.log(movimientos);

  return (
    <div className="bg-fondo-cuenta-principal h-auto rounded-xl text-sm divide-y-2 divide-fondo-cuenta shadow-lg shadow-slate-500 hover:shadow-slate-700">
      <div>
        <h1 className="text-center tracking-widest font-bold text-white">MOVIMIENTOS</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200  text-sm text-center border-b border-gray-700 ">
          <thead className="ltr:text-left rtl:text-right text-white">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium">Fecha</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">Monto</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">Movimiento</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">Cuenta</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">Comentario</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-fondo-cuenta">

            {movimientos.map((movimiento) => (
              <tr className="hover:bg-fondo-tabla-hover" id={movimiento.id + ''} key={movimiento.id}>
                <td className="whitespace-nowrap px-4 py-2 text-gray-800">{movimiento.fecha}</td>
                <td className={`whitespace-nowrap px-4 py-2 font-medium ${(movimiento.monto < 0) ? "text-red-800" : "text-green-800"}`}>{movimiento.monto}</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-800">{movimiento.name_movimiento_tipo}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-800">{movimiento.name_banco_cuenta}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-800">{movimiento.comentario}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  <div className="grid gap-2 mb-2 mt-2 grid-cols-2">
                    <img
                      alt="User"
                      className=""
                      width={16}
                      src="src/assets/pen.svg"
                    />

                    <img
                      alt="User"
                      width={16}
                      src="src/assets/trash.svg"
                    />
                  </div>
                  {/* <a id={movimiento.id + ''} href="#" className="inline-block rounded bg-fondo-cuenta-principal px-4 py-2 text-xs font-medium text-white hover:bg-fondo-boton-hover">
                    View
                  </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Movimientos
