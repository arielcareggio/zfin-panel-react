import AppContext from "../../../context/AppContext";

import { data, datosMovimientos } from "../../../types/Types"
import { useContext, useState, useEffect } from 'react';
import { getApi } from "../../services/apiService";
import { HttpMethod } from "../../../types/HttpMethod";
import { API_GET_MOVIMIENTOS_ELIMINAR } from "../../../../configApi";
import Success from '../../alerts/alerts';


function Movimientos() {
  const appContext = useContext(AppContext);
  if (!appContext) {
    return <div>Contexto no disponible</div>;// El contexto es nulo, maneja esta situación si es necesario
  }
  const { ApiMovimientos } = appContext;


  const movimientos: datosMovimientos[] = ApiMovimientos ? ApiMovimientos : [];

  /* ******************************************************* PARA EL ALERT ******************************************************* */

  const [isShowing, putShowing] = useState(false);
  const [texto, setTexto] = useState<string>('');
  const [tipo, setTipo] = useState<string>('');

  const showMessage = (texto: string, tipo: string) => {
    setTexto(texto);
    setTipo(tipo);
    putShowing(true);
    setTimeout(() => {
      putShowing(false);
    }, 3000); // Ocultar después de 5 segundos
  };

  const overlayClass = isShowing ? 'overlay show' : 'overlay';
  /* ******************************************************* PARA EL ALERT ******************************************************* */


  const editarMovimiento = () => {
    //setIsMenuOpen(!isMenuOpen);
    console.log("hola");
  };

  const eliminarMovimiento = async (idMovimiento: number) => {
    //setIsMenuOpen(!isMenuOpen);

    showMessage('Agregado','success');
    //showMessage('Agregado','danger');

    /* let dataToSend = {};
    if (idMovimiento != 0) {
      dataToSend = {
        id_movimiento: idMovimiento
      };
    }

    const response = await getApi(HttpMethod.DELETE, localStorage.getItem('token'), API_GET_MOVIMIENTOS_ELIMINAR, dataToSend);
    //console.log(response.error);
    if (response.error) {
      console.error("Error fetching Totales: " + response.error);
    } else {
      if (response.data) {
        let datos: data = response.data ? response.data : '';
        if (datos.data.error) {
          console.log("Error: " + datos.data.error);
        } else {
          console.log("Eliminado: " + datos.data.message);
        }

        //setMovimientos(datos.data);
      }
      //setTotales(response.data);
    }  */

    await appContext.fetchAllTotales();
  };

  return (
    <div className="bg-fondo-cuenta-principal h-auto rounded-xl text-sm divide-y-2 divide-fondo-cuenta shadow-lg shadow-slate-500 hover:shadow-slate-700">

      <div className={overlayClass}>
        <Success texto={texto} tipo={tipo}/>
      </div>

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

                    <span
                      className="w-10 h-10 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full cursor-pointer"
                      onClick={editarMovimiento}
                    >
                      <img
                        alt="User"
                        className=""
                        width={16}
                        src="src/assets/pen.svg"
                      />
                    </span>

                    <span
                      className="w-10 h-10 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full cursor-pointer"
                      onClick={() => eliminarMovimiento(movimiento.id)}
                    >
                      <img
                        alt="User"
                        width={16}
                        src="src/assets/trash.svg"
                      />
                    </span>
                  </div>
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
