import ReactModal from 'react-modal';
import InputPrecio from '../../forms/InputPrecio';
import TextArea from '../../forms/TextArea';
import { OptionType } from '../../../../types/Types';
import Select from '../../forms/Select';

/* 
    Recibir:
        - Titulo
        - Color
    */


interface addMovimientoProps {
  onClose: () => void;
  isOpen: boolean;
  dataConfiguracion: datosConfigRecibir; // Agrega el tipo adecuado para tu array aquí
  dataOpcionesSelect: OptionType[];
}

type datosConfigRecibir = {
  /* [key: string]: string; */
  color: string,
  titulo: string,
  tipo: string,
  isDisabled: boolean
}

function AddMovimiento({ onClose, isOpen, dataConfiguracion, dataOpcionesSelect }: addMovimientoProps) {
  
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={dataConfiguracion.titulo}
      overlayClassName="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
      className="flex justify-center items-center w-10/12 xl:w-6/12" //Acá se maneja el tamaño del modal
    >
      <div className="bg-white rounded-lg w-full">

        {/* Barra de título */}
        <div className={`${dataConfiguracion.color} text-white py-2 px-4 rounded-t-lg`}>
          <h2 className="text-lg font-semibold">{dataConfiguracion.titulo}</h2>
        </div>

        {/* Contenedor del modal */}
        <div className='p-6'>
          <h2 className="text-lg font-semibold mb-2">Complete los campos para el {dataConfiguracion.titulo}</h2>

          {/* VERRR FILTRO: https://codepen.io/dixie0704/pen/jOVxGXL */}
          <div className='grid gap-6 mb-6 mt-6 md:grid-cols-1'>
            <Select opciones={dataOpcionesSelect} dataConfig={
              {
                name: 'select_1',
                placeholder: 'Seleccione un tipo',
                size: 'w-60',
                required: true,
                isDisabled: dataConfiguracion.isDisabled,
              }
            }/>
            <InputPrecio />
            <TextArea />
          </div>

          {/* <p>Este es un contenido dentro del modal.</p> */}
          <div className='flex justify-between'>
            <button
              className="boton-cancelar"
              onClick={onClose}
            >
              Cerrar Modal
            </button>

            <button
              className="boton-aceptar"
              onClick={onClose}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

export default AddMovimiento;



{/* Input Tipo Movimiento */ }
{/* https://tailwindui.com/components/application-ui/forms/select-menus */ }

{
  {/* <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select> */}


  /* <Modal
        isOpen={isOpen} // Puedes ajustar esto según tus necesidades
        onRequestClose={onClose} //especifica la función que se ejecutará cuando el usuario intente cerrar el modal, ya sea haciendo clic fuera del modal o presionando la tecla "Esc".
        contentLabel="Ejemplo de Modal" //Esto es especialmente útil para usuarios con discapacidades visuales que utilizan lectores de pantalla. Cuando un lector de pantalla encuentra un modal, leerá el contenido de la etiqueta contentLabel
        

        style={{
          content: {
            width: "50%", // Establece el ancho del modal
            height: "70%", // Establece la altura del modal
            margin: "auto", // Centra el modal horizontalmente
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.65)", // Fondo transparente detrás del modal
          },
        }}
      >
        <div className="bg-white rounded-lg p-6 w-1/2">
          <h2 className="text-lg font-semibold mb-2">Contenido del Modal</h2>
          <p>Este es un contenido dentro del modal.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={onClose}>
            Cerrar Modal
          </button>
        </div>
      </Modal> */}
//