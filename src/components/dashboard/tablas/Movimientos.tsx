import AppContext from "../../../context/AppContext";

import { data, dataPagination, datosMovimientos } from "../../../types/Types"
import { useContext, useState, useEffect, useRef } from 'react';
import { getApi } from "../../services/apiService";
import { HttpMethod } from "../../../types/HttpMethod";
import { API_GET_MOVIMIENTOS_ELIMINAR } from "../../../../configApi";
import Success from '../../alerts/alerts';
import Confirmation from "../../alerts/Confirmation";
import { useApiAllMovimientos } from "../../../context/Funciones";
import { itemsPerPage, pageInicial } from "../../../../config";
import InfiniteScroll from "react-infinite-scroll-component";

function Movimientos() {
  const appContext = useContext(AppContext);
  if (!appContext) {
    return <div>Contexto no disponible</div>;// El contexto es nulo, maneja esta situación si es necesario
  }

  const [movimientos, setMovimientos] = useState<datosMovimientos[]>([]);
  const [currentPage, setCurrentPage] = useState(pageInicial);
  const [isLoading, setIsLoading] = useState(false);
  const ApiMovimientos: dataPagination = useApiAllMovimientos(0, currentPage, itemsPerPage);

  //const totalPages = ApiMovimientos.last_page;
  const totalRegistros = ApiMovimientos.total;
  //const registrosXPages = ApiMovimientos.per_page;
  // const pageActual = ApiMovimientos.current_page;
  const TotalEnPantalla = ApiMovimientos.to;

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };


  // Utiliza un efecto para cargar los datos cuando el contexto esté listo
  useEffect(() => {
    if (ApiMovimientos.data?.length > 0) {
      // Filtra registros duplicados antes de agregarlos
      const nuevosRegistros = ApiMovimientos.data.filter((nuevoRegistro) => {
        return !movimientos.some((registroExistente) => registroExistente.id === nuevoRegistro.id);
      });

      setMovimientos((prevMovimientos) => [...prevMovimientos, ...nuevosRegistros]);
      setIsLoading(false);
    }
  }, [ApiMovimientos.data]);

  const loadMoreData = () => {
    // Incrementa la página actual
    setIsLoading(true);
    handlePageChange(currentPage + 1);
  };
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

  /* ******************************************************* HACE EL CALCULO PARA QUE LA TABLA NO PASE EL ALTO DE LA PANTALLA ******************************************************* */
  const tableRef = useRef<HTMLTableElement>(null);
  const [tableHeight, setTableHeight] = useState<number>(0);

  useEffect(() => {
    if (tableRef.current) {
      const windowHeight = window.innerHeight;
      const tableTopOffset = tableRef.current.getBoundingClientRect().top;
      const availableHeight = windowHeight - tableTopOffset;

      setTableHeight(availableHeight - 10);
    }
  }, []);
/* ******************************************************* HACE EL CALCULO PARA QUE LA TABLA NO PASE EL ALTO DE LA PANTALLA ******************************************************* */

  return (
    <div className="h-screen overflow-hidden">
      <div className={overlayClass}>
        <Success texto={texto} tipo={tipo} />
      </div>
      <div id='tabla_movimientos' className="bg-fondo-cuenta-principal rounded-xl text-sm divide-y-2 divide-fondo-cuenta shadow-lg shadow-slate-500 hover:shadow-slate-700">
        <div>
          <h1 className="text-center tracking-widest font-bold text-white">MOVIMIENTOS (Total: {TotalEnPantalla} de {totalRegistros})</h1>
        </div>
        {/* <div className={`overflow-x-auto overflow-y-auto max-h-[calc(${y}px)]`}> */}
        <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: `${tableHeight}px` }}>
          <table ref={tableRef} className="min-w-full divide-y-2 divide-gray-200  text-sm text-center border-b border-gray-700 ">
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

          <InfiniteScroll
            dataLength={movimientos.length}
            next={loadMoreData}
            hasMore={ApiMovimientos.current_page < ApiMovimientos.last_page}
            loader={isLoading && <h4>Loading...</h4>}
          >
          </InfiniteScroll>
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
