import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';
import InputPrecio from '../../forms/InputPrecio';
import TextArea from '../../forms/TextArea';
import { OptionType } from '../../../../types/Types';
import Select from '../../forms/Select';

interface addMovimientoProps {
  onClose: () => void;
  isOpen: boolean;
  dataConfiguracion: datosConfigRecibir;
  dataSelect_Tipos: OptionType[];
  dataSelect_Categorias: OptionType[];
}

type datosConfigRecibir = {
  color: string;
  titulo: string;
  tipo: OptionType[];
  defaultValueSelect: OptionType[];
  defaultValueInput: string;
  defaultValueTextArea: string;
  isDisabled: boolean;
}

function AddMovimiento({ onClose, isOpen, dataConfiguracion, dataSelect_Tipos, dataSelect_Categorias }: addMovimientoProps) {
  const [comentario, setComentario] = useState<string | null>(
    dataConfiguracion.defaultValueTextArea !== '' ? dataConfiguracion.defaultValueTextArea : null
  );

  const [selectedTipo, setSelectedTipo] = useState<OptionType | null>(null);
  const [selectedCategoria, setSelectedCategoria] = useState<OptionType | null>(null);

  const [precio, setPrecio] = useState<number | null>(
    dataConfiguracion.defaultValueInput !== '' ? parseFloat(dataConfiguracion.defaultValueInput) : null
  );

  const [errorMensaje, setErrorMensaje] = useState<string>('');

  useEffect(() => {
    setSelectedTipo(dataConfiguracion.tipo.length > 0 ? dataConfiguracion.tipo[0] : null);
    setSelectedCategoria(dataConfiguracion.defaultValueSelect.length > 0 ? dataConfiguracion.defaultValueSelect[0] : null);
    setPrecio(dataConfiguracion.defaultValueInput !== '' ? parseFloat(dataConfiguracion.defaultValueInput) : null);
    setComentario(dataConfiguracion.defaultValueTextArea !== '' ? dataConfiguracion.defaultValueTextArea : null);
  }, [dataConfiguracion.tipo, dataConfiguracion.defaultValueSelect, dataConfiguracion.defaultValueInput]);

  const handleTipoSelect = (option: OptionType | null) => {
    setSelectedTipo(option);
    setErrorMensaje('');
  };

  const handleCategoriaSelect = (option: OptionType | null) => {
    setSelectedCategoria(option);
    setErrorMensaje('');
  };

  const handleGuardar = () => {
    if (selectedTipo && selectedCategoria && precio !== null) {
      console.log('Tipo seleccionado:', selectedTipo);
      console.log('Categoría seleccionada:', selectedCategoria);
      console.log('Precio introducido:', precio);

      //comentario = Puede venir null o '', manejarlo para q en caso de venir '' se guarde como null
      console.log('Comentario introducido:', comentario);

      onClose();
    } else {
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
            <Select opciones={dataSelect_Tipos} dataConfig={
              {
                name: 'select_tipo',
                title: 'Tipo movimiento',
                placeholder: 'Seleccione un tipo',
                defaultValue: dataConfiguracion.tipo,
                size: 'w-full',
                isDisabled: dataConfiguracion.isDisabled,
                onSelect: handleTipoSelect,
              }
            } selectedValue={selectedTipo} />

            <Select opciones={dataSelect_Categorias} dataConfig={
              {
                name: 'select_categoria',
                title: 'Categoría',
                placeholder: 'Seleccione una categoría',
                defaultValue: dataConfiguracion.defaultValueSelect,
                size: 'w-full',
                isDisabled: (dataConfiguracion.defaultValueSelect.length !== 0) ? dataConfiguracion.isDisabled : false,
                onSelect: handleCategoriaSelect,
              }
            } selectedValue={selectedCategoria} />

            <InputPrecio dataConfig={
              {
                name: 'InputPrecio',
                title: 'Monto $',
                placeholder: '0.00',
                defaultValue: dataConfiguracion.defaultValueInput,
                size: 'w-full',
              }
            }
              onChange={(value: number | null) => setPrecio(value)}
            />
            <TextArea rows={2} dataConfig={
              {
                name: 'TextAreaComentario',
                title: 'Comentario',
                placeholder: 'Escribe aquí...',
                defaultValue: dataConfiguracion.defaultValueTextArea,
                size: 'w-full',
              }
            }
              onChange={(value: string | null) => setComentario(value)}
            />
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
