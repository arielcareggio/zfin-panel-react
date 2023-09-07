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
  defaultValueSelect: OptionType[];
  defaultValueInput: string;
  isDisabled: boolean;
}

function AddMovimiento({ onClose, isOpen, dataConfiguracion, dataSelect_Tipos, dataSelect_Categorias }: addMovimientoProps) {

  /* Input Precio */
  const [precio, setPrecio] = useState<number | null>(
    dataConfiguracion.defaultValueInput !== '' ? parseFloat(dataConfiguracion.defaultValueInput) : null
  );

  /* Select Tipos */
  const [selectedTipo, setSelectedTipo] = useState<OptionType | null>(
    dataConfiguracion.tipo.length > 0 ? dataConfiguracion.tipo[0] : null
  );

  /* Select Categorias */
  const [selectedCategoria, setSelectedCategoria] = useState<OptionType | null>(
    dataConfiguracion.defaultValueSelect.length > 0 ? dataConfiguracion.defaultValueSelect[0] : null
  );

  /* Para realizar la validación de campos obligatorios */
  const [isTipoValid, setIsTipoValid] = useState<boolean>(
    dataConfiguracion.tipo.length > 0 ? true : false
  );
  const [isCategoriaValid, setIsCategoriaValid] = useState<boolean>(
    dataConfiguracion.defaultValueSelect.length > 0 ? true : false
  );
  const [isPrecioValid, setIsPrecioValid] = useState<boolean>(false);
  const [errorMensaje, setErrorMensaje] = useState<string>('');

  /**
   * Tenemos que agregar esto para que cuando se cambie la selección en el Select se actualice el valor seleccionado para tenerlo al momento de presionar el botón "Guardar"
   */
  useEffect(() => {
    setSelectedTipo(dataConfiguracion.tipo.length > 0 ? dataConfiguracion.tipo[0] : null);
    setSelectedCategoria(dataConfiguracion.defaultValueSelect.length > 0 ? dataConfiguracion.defaultValueSelect[0] : null);
    setPrecio(dataConfiguracion.defaultValueInput !== '' ? parseFloat(dataConfiguracion.defaultValueInput) : null);
  }, [dataConfiguracion.tipo, dataConfiguracion.defaultValueSelect]);


  // Funciones para manejar la selección en los Select
  const handleTipoSelect = (option: OptionType | null) => {
    setSelectedTipo(option);
    setIsTipoValid(!!option); // Marca como válido si se ha seleccionado un valor
    setErrorMensaje('');
  };


  const handleCategoriaSelect = (option: OptionType | null) => {
    setSelectedCategoria(option);
    setIsCategoriaValid(!!option); // Establece la validez según si la opción no es nula
    setErrorMensaje('');
  };

  const handlePrecio = (option: number | null) => {
    setPrecio(option);
    setIsPrecioValid(!!option); // Establece la validez según si la opción no es nula
    setErrorMensaje('');
  };

  /* Función que se encargara de guardar */
  const handleGuardar = () => {
    if (isTipoValid && isCategoriaValid && isPrecioValid) {
      // Todos los campos son válidos, puedes guardar los datos aquí
      console.log('Tipo seleccionado:', selectedTipo);
      console.log('Categoría seleccionada:', selectedCategoria);
      console.log('Precio introducido:', precio);
      onClose();
    } else {
      // Al menos un campo no es válido, muestra un mensaje de error
      setErrorMensaje('Por favor, complete todos los campos obligatorios.');
    }
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
                defaultValue: dataConfiguracion.defaultValueSelect,
                size: 'w-full',
                required: true,
                isDisabled: (dataConfiguracion.defaultValueSelect.length !== 0) ? dataConfiguracion.isDisabled : false,
                onSelect: handleCategoriaSelect, // Agrega esta función de manejo de selección
              }
            } />
            <InputPrecio dataConfig={
              {
                name: 'InputPrecio',
                title: 'Monto $',
                placeholder: '0.00',
                defaultValue: dataConfiguracion.defaultValueInput,
                size: 'w-full',
                required: true,
              }
            }
              onChange={(value: number) => handlePrecio(value)}
            />
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
        {errorMensaje && (
          <p className="text-red-500">{errorMensaje}</p>
        )}
      </div>
    </ReactModal>
  );
}

export default AddMovimiento;


{/* Input Tipo Movimiento */ }
{/* https://tailwindui.com/components/application-ui/forms/select-menus */ }
