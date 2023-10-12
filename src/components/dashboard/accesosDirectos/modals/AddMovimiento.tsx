import ReactModal from 'react-modal';
import { useState, useEffect, useContext } from 'react';
import InputPrecio from '../../forms/InputPrecio';
import TextArea from '../../forms/TextArea';
import { OptionType, addMovimientoProps } from '../../../../types/Types';
import Select from '../../forms/Select';
import { AppContext } from '../../../../context/AppContext.tsx';
import InputFecha from '../../forms/InputFecha.tsx';

function AddMovimiento({ onClose, isOpen, dataConfiguracion, dataSelect_Tipos, dataSelect_Categorias, dataSelect_Cuentas }: addMovimientoProps) {

  const appContext = useContext(AppContext);
  if (!appContext) {
    return <div>Contexto no disponible</div>;// El contexto es nulo, maneja esta situación si es necesario
  }

  const [fecha, setFecha] = useState<string | null>(
    dataConfiguracion.defaultValueInputFecha !== '' ? dataConfiguracion.defaultValueInputFecha : null
  );

  const [comentario, setComentario] = useState<string | null>(
    dataConfiguracion.defaultValueTextArea !== '' ? dataConfiguracion.defaultValueTextArea : null
  );

  const [selectedPersona, setSelectedPersona] = useState<OptionType | null>(null);
  const [selectedCuenta, setSelectedCuenta] = useState<OptionType | null>(null);
  const [selectedCuentaBanco, setSelectedCuentaBanco] = useState<OptionType | null>(null);
  const [selectedTipo, setSelectedTipo] = useState<OptionType | null>(null);
  const [selectedCategoria, setSelectedCategoria] = useState<OptionType | null>(null);

  const [precio, setPrecio] = useState<number | null>(
    dataConfiguracion.defaultValueInputPrecio !== '' ? parseFloat(dataConfiguracion.defaultValueInputPrecio) : null
  );

  const [errorMensaje, setErrorMensaje] = useState<string>('');

  useEffect(() => {
    setSelectedPersona(dataConfiguracion.defaultValueSelectPersona.length > 0 ? dataConfiguracion.defaultValueSelectPersona[0] : null);
    setSelectedCuenta(dataConfiguracion.defaultValueSelectCuenta.length > 0 ? dataConfiguracion.defaultValueSelectCuenta[0] : null);
    setSelectedCuentaBanco(dataConfiguracion.defaultValueSelectCuentaBanco.length > 0 ? dataConfiguracion.defaultValueSelectCuentaBanco[0] : null);
    setFecha(dataConfiguracion.defaultValueInputFecha !== '' ? dataConfiguracion.defaultValueInputFecha : null);
    setSelectedTipo(dataConfiguracion.tipo.length > 0 ? dataConfiguracion.tipo[0] : null);
    setSelectedCategoria(dataConfiguracion.defaultValueSelectCategoria.length > 0 ? dataConfiguracion.defaultValueSelectCategoria[0] : null);
    setPrecio(dataConfiguracion.defaultValueInputPrecio !== '' ? parseFloat(dataConfiguracion.defaultValueInputPrecio) : null);
    setComentario(dataConfiguracion.defaultValueTextArea !== '' ? dataConfiguracion.defaultValueTextArea : null);
  }, [dataConfiguracion.tipo, dataConfiguracion.defaultValueSelectCategoria, dataConfiguracion.defaultValueInputPrecio,
  dataConfiguracion.defaultValueInputFecha, dataConfiguracion.defaultValueSelectCuenta, dataConfiguracion.defaultValueSelectCuentaBanco,
  dataConfiguracion.defaultValueSelectPersona]);

  const handleTipoSelect = (option: OptionType | null) => {
    setSelectedTipo(option);
    setErrorMensaje('');
  };

  const handleCategoriaSelect = (option: OptionType | null) => {
    setSelectedCategoria(option);
    setErrorMensaje('');
  };

  const handleCuentaSelect = (option: OptionType | null) => {
    console.log('Cambio, cargar bancos y Personas');
    setSelectedCuenta(option);
    setErrorMensaje('');
  };

  const handleBancoSelect = (option: OptionType | null) => {
    console.log('Cambio, cargar cuentas bancos');
    setSelectedCuenta(option);
    setErrorMensaje('');
  };

  const handlePersonaSelect = (option: OptionType | null) => {
    console.log('Cambio persona'); //Es posible que haya que modificar la base para que una persona tmb se ecnuentre asociada a una cuenta de banco
    setSelectedPersona(option);
    setErrorMensaje('');
  };

  const handleCuentaBancoSelect = (option: OptionType | null) => {
    setSelectedCuentaBanco(option);
    setErrorMensaje('');
  };

  const handleGuardar = () => {
    if (selectedPersona && selectedCuenta && selectedTipo && selectedCuentaBanco && selectedCategoria && precio !== null) {
      console.log('Cuenta introducido:', selectedCuenta);
      console.log('Cuenta banco:', selectedCuentaBanco);
      console.log('fecha introducido:', fecha);
      console.log('Tipo seleccionado:', selectedTipo);
      console.log('Categoría seleccionada:', selectedCategoria);
      console.log('Precio introducido:', precio);

      //comentario = Puede venir null o '', manejarlo para q en caso de venir '' se guarde como null
      console.log('Comentario introducido:', comentario);
      console.log('id_movimiento_tipo:', dataConfiguracion.tipo[0].value);

      const id_movimiento_tipo = dataConfiguracion.tipo[0].value ?? -1;




      /* const { apiTipos } = appContext;
      console.log(apiTipos); */

      /* const response = getApi(localStorage.getItem('token'), '/tipos/getAllTipos');
      console.log("response: "+response); */



      onClose();
    } else {
      setErrorMensaje('* Por favor, complete todos los campos obligatorios.');
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
          {/* <h2 className="text-lg font-semibold mb-2">Complete los campos para el <span className='font-bold'>{dataConfiguracion.titulo}</span></h2> */}
          <div className='grid gap-6 mb-6 grid-cols-1 md:grid-cols-3'>
            <InputFecha dataConfig={
              {
                name: 'InputFecha',
                title: 'Fecha egreso',
                defaultValue: dataConfiguracion.defaultValueInputFecha,
                size: 'w-full',
              }
            }
              onChange={(value: string | null) => setFecha(value)}
            />



            <Select opciones={dataSelect_Cuentas} dataConfig={
              {
                name: 'select_cuenta',
                title: 'Cuenta',
                placeholder: 'Seleccione una cuenta',
                defaultValue: dataConfiguracion.defaultValueSelectCuenta,
                size: 'w-full',
                /*  isDisabled: dataConfiguracion.isDisabled, */
                onSelect: handleCuentaSelect,
              }
            } selectedValue={selectedCuenta} />

            <Select opciones={dataSelect_Cuentas} dataConfig={
              {
                name: 'select_banco',
                title: 'Banco FALTA',
                placeholder: 'Seleccione un Banco',
                defaultValue: dataConfiguracion.defaultValueSelectCuenta,
                size: 'w-full',
                /*  isDisabled: dataConfiguracion.isDisabled, */
                onSelect: handleBancoSelect,
              }
            } selectedValue={selectedPersona} />


            <Select opciones={dataSelect_Cuentas} dataConfig={
              {
                name: 'select_persona',
                title: 'Persona FALTA',
                placeholder: 'Seleccione una persona',
                defaultValue: dataConfiguracion.defaultValueSelectCuenta,
                size: 'w-full',
                /*  isDisabled: dataConfiguracion.isDisabled, */
                onSelect: handlePersonaSelect,
              }
            } selectedValue={selectedPersona} />

            <Select opciones={dataSelect_Cuentas} dataConfig={
              {
                name: 'select_banco_cuenta',
                title: 'Cuenta del banco FALTA',
                placeholder: 'Seleccione una cuenta del banco',
                defaultValue: dataConfiguracion.defaultValueSelectCuentaBanco,
                size: 'w-full',
                /*  isDisabled: dataConfiguracion.isDisabled, */
                onSelect: handleCuentaBancoSelect,
              }
            } selectedValue={selectedCuentaBanco} />



            {/* Si ya esta seleccionado el tipo entonces no mostramos el select */}
            {!dataConfiguracion.tipo[0].value && (
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
            )}

            {/* Si ya esta seleccionado el tipo entonces no mostramos el select */}
            {dataConfiguracion.defaultValueSelectCategoria.length == 0 && (
              <Select opciones={dataSelect_Categorias} dataConfig={
                {
                  name: 'select_categoria',
                  title: 'Categoría',
                  placeholder: 'Seleccione una categoría',
                  defaultValue: dataConfiguracion.defaultValueSelectCategoria,
                  size: 'w-full',
                  /* isDisabled: (dataConfiguracion.defaultValueSelectCategoria.length !== 0) ? dataConfiguracion.isDisabled : false, */
                  onSelect: handleCategoriaSelect,
                }
              } selectedValue={selectedCategoria} />
            )}

            <InputPrecio dataConfig={
              {
                name: 'InputPrecio',
                title: 'Monto $',
                placeholder: '0.00',
                defaultValue: dataConfiguracion.defaultValueInputPrecio,
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
          <p className="text-red-500 mx-5 mb-2 font-semibold">{errorMensaje}</p>
        )}
      </div>
    </ReactModal>
  );
}

export default AddMovimiento;
