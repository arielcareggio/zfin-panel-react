import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';
import InputPrecio from '../../forms/InputPrecio';
import TextArea from '../../forms/TextArea';
import { OptionType } from '../../../../types/Types';
import Select from '../../forms/Select';

interface addMovimientoProps {
  onClose: () => void;
  isOpen: boolean;
  dataConfiguracion: datosConfigRecibir; // Agrega el tipo adecuado para tu array aquí
  dataSelect_Tipos: OptionType[];
  dataSelect_Categorias: OptionType[];
}

type datosConfigRecibir = {
  color: string;
  titulo: string;
  tipo: OptionType[];
  defaultValue: OptionType[];
  isDisabled: boolean;
}

function AddMovimiento({ onClose, isOpen, dataConfiguracion, dataSelect_Tipos, dataSelect_Categorias }: addMovimientoProps) {

  //*****************************************************************************************************************************************/
  //******************************************************** SELECT *************************************************************************/
  //*****************************************************************************************************************************************/
  const [selectedTipo, setSelectedTipo] = useState<OptionType | null>(
    dataConfiguracion.tipo.length > 0 ? dataConfiguracion.tipo[0] : null
  );
  const [selectedCategoria, setSelectedCategoria] = useState<OptionType | null>(
    dataConfiguracion.defaultValue.length > 0 ? dataConfiguracion.defaultValue[0] : null
  );

  /**
   * Tenemos que agregar esto para que cuando se cambie la selección en el Select se actualice el valor seleccionado para tenerlo al momento de presionar el botón "Guardar"
   */
  useEffect(() => {
    setSelectedTipo(dataConfiguracion.tipo.length > 0 ? dataConfiguracion.tipo[0] : null);
    setSelectedCategoria(dataConfiguracion.defaultValue.length > 0 ? dataConfiguracion.defaultValue[0] : null);
  }, [dataConfiguracion.tipo, dataConfiguracion.defaultValue]);

  
  // Funciones para manejar la selección en los Select
  const handleTipoSelect = (option: OptionType | null) => {
    setSelectedTipo(option);
  };

  const handleCategoriaSelect = (option: OptionType | null) => {
    setSelectedCategoria(option);
  };
  //*****************************************************************************************************************************************/
  //******************************************************** SELECT *************************************************************************/
  //*****************************************************************************************************************************************/

  const handleGuardar = () => {
    // Ahora puedes acceder a los valores seleccionados en selectedTipo y selectedCategoria
    console.log('Tipo seleccionado:', selectedTipo);
    console.log('Categoría seleccionada:', selectedCategoria);
    // Agrega aquí tu lógica para guardar los datos
    onClose();
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={dataConfiguracion.titulo}
      overlayClassName="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
      className="flex justify-center items-center w-10/12 xl:w-6/12"
    >
      <div className="bg-white rounded-lg w-full">
        <div className={`${dataConfiguracion.color} text-white py-2 px-4 rounded-t-lg`}>
          <h2 className="text-lg font-semibold">{dataConfiguracion.titulo}</h2>
        </div>
        <div className='p-6'>
          <h2 className="text-lg font-semibold mb-2">Complete los campos para el <span className='font-bold'>{dataConfiguracion.titulo}</span></h2>
          <div className='grid gap-6 mb-6 mt-6 grid-cols-1 md:grid-cols-2'>
            {/* Configura los Select y maneja las selecciones */}
            <Select opciones={dataSelect_Tipos} dataConfig={
              {
                name: 'select_tipo',
                title: 'Tipo movimiento',
                placeholder: 'Seleccione un tipo',
                defaultValue: dataConfiguracion.tipo,
                size: 'w-full',
                required: true,
                isDisabled: dataConfiguracion.isDisabled,
                onSelect: handleTipoSelect, // Agrega esta función de manejo de selección
              }
            } />

            <Select opciones={dataSelect_Categorias} dataConfig={
              {
                name: 'select_categoria',
                title: 'Categoría',
                placeholder: 'Seleccione una categoría',
                defaultValue: dataConfiguracion.defaultValue,
                size: 'w-full',
                required: true,
                isDisabled: (dataConfiguracion.defaultValue.length !== 0) ? dataConfiguracion.isDisabled : false,
                onSelect: handleCategoriaSelect, // Agrega esta función de manejo de selección
              }
            } />
            <InputPrecio />
            <TextArea />
          </div>
          <div className='flex justify-between'>
            <button
              className="boton-cancelar"
              onClick={onClose}
            >
              Cerrar Modal
            </button>

            <button
              className="boton-aceptar"
              onClick={handleGuardar}
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