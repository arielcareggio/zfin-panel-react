import AppContext from "../../../context/AppContext";

import { data, datosMovimientos } from "../../../types/Types"
import { useContext, useState, useEffect } from 'react';
import { getApi } from "../../services/apiService";
import { HttpMethod } from "../../../types/HttpMethod";
import { API_GET_MOVIMIENTOS_ELIMINAR } from "../../../../configApi";
import Success from '../../alerts/alerts';
import Confirmation from "../../alerts/Confirmation";


function Movimientos() {
  const appContext = useContext(AppContext);
  if (!appContext) {
    return <div>Contexto no disponible</div>;// El contexto es nulo, maneja esta situación si es necesario
  }
  const { ApiMovimientos } = appContext;
  const [movimientos, setMovimientos] = useState<datosMovimientos[]>([]);

  // Utiliza un efecto para cargar los datos cuando el contexto esté listo
  useEffect(() => {
    if (ApiMovimientos) {
      setMovimientos(ApiMovimientos);
    }
  }, [ApiMovimientos]);

  /* ******************************************************* PARA EL ALERT ******************************************************* */

  const [isShowing, putShowing] = useState(false);
  const [texto, setTexto] = useState<string>('');
  const [tipo, setTipo] = useState<string>('');

  const showMessage = (texto: string, tipo: string, segundos: number) => {
    setTexto(texto);
    setTipo(tipo);
    putShowing(true);
    setTimeout(() => {
      putShowing(false);
    }, segundos * 1000); // Ocultar después de 5 segundos
  };

  const overlayClass = isShowing ? 'overlay show' : 'overlay';
  /* ******************************************************* PARA EL ALERT ******************************************************* */

  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [movimientoIdToDelete, setMovimientoIdToDelete] = useState<number | null>(null);


  const handleConfirm = () => {
    setShowConfirmation(false);
    console.log('handleConfirm');
    // Lógica a ejecutar cuando se confirma en el modal
    if (movimientoIdToDelete !== null) {
      eliminarMovimiento(movimientoIdToDelete);
      setMovimientoIdToDelete(null); // Reinicia el estado
    }

  };

  const handleCancel = () => {
    // Lógica a ejecutar cuando se cancela el modal
    setShowConfirmation(false);
  };

  const editarMovimiento = () => {
    //showMessage('Editado','success');
    console.log("Editar");
  };

  const eliminarMovimiento = async (idMovimiento: number) => {
    // Actualiza el estado para reflejar la eliminación
    const nuevosMovimientos = movimientos.filter((movimiento) => movimiento.id !== idMovimiento);
    setMovimientos(nuevosMovimientos);


    let dataToSend = {};
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
          setMovimientos(movimientos);
          showMessage('No se pudo eliminar el registro: ' + datos.data.error, 'danger', 5);
        } else {
          eventoConfirmado(datos.data.message);
        }
      }
    }
  };

  const eventoConfirmado = async (mensaje: string) => {
    showMessage(mensaje, 'success', 5);
    await appContext.fetchAllTotales();
  };

  return (
    <div>
      <div className={overlayClass}>
        <Success texto={texto} tipo={tipo} />
      </div>
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
                <th className="px-4 py-2 "></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-fondo-cuenta">

              {movimientos.map((movimiento) => (
                <tr className="hover:bg-fondo-tabla-hover" id={movimiento.id + ''} key={movimiento.id}>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-800">{movimiento.fecha}</td>
                  <td className={`whitespace-nowrap px-4 py-2 font-medium ${(movimiento.monto < 0) ? "text-red-800" : "text-green-800"}`}>{movimiento.monto}</td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-800">{movimiento.name_movimiento_tipo}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-800">{movimiento.name_banco_cuenta}</td>
                  <td className="whitespace-pre-wrap px-4 py-2 text-gray-800">{movimiento.comentario}</td>

                  <td className="whitespace-nowrap px-4 py-2">
                    <div>
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
                        onClick={() => {
                          if (!showConfirmation) {
                            console.log('paso');
                            setMovimientoIdToDelete(movimiento.id);
                            setShowConfirmation(true);
                          }
                        }}
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

        {/* Modal de confirmación para eliminar */}
        <Confirmation
          isOpen={showConfirmation}
          onConfirm={handleConfirm}
          onClose={handleCancel}
          dataConfiguracion={{
            color: "bg-red-600",
            titulo: '¿Estás seguro de que deseas eliminar el registro?',
            subTitulo: 'Una vez eliminado ya no podrá recuperarlo',
            tituloBotonAceptar: 'Eliminar',
            tituloBotonCancelar: 'Cancelar',
            isDisabled: true,
          }}
        />
      </div>
    </div>
  )
}

export default Movimientos
