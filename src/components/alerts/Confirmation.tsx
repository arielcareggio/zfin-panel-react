import ReactModal from "react-modal";
import { modalConfirmacionProps } from "../../types/Types";

function Confirmation({ isOpen, onConfirm, onClose, dataConfiguracion }: modalConfirmacionProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={dataConfiguracion.titulo}
      overlayClassName="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
      className="flex justify-center items-center w-10/12 lg:w-6/12"
    >
      <div className="bg-white rounded-lg w-full">
        <div className={`${dataConfiguracion.color} text-white py-2 px-4 rounded-t-lg`}>
          <h2 className="text-lg font-semibold">{dataConfiguracion.titulo}</h2>
        </div>
        <div className='p-6'>
          <h2 className="text-lg font-semibold mb-2"><span className='font-bold'>{dataConfiguracion.subTitulo}</span></h2>
          <div className='flex justify-between'>
            <button
              className="boton-cancelar"
              onClick={onClose}
            >
              {dataConfiguracion.tituloBotonCancelar}
            </button>
            <button
              className="boton-aceptar"
              onClick={onConfirm}
            >
              {dataConfiguracion.tituloBotonAceptar}
            </button>
          </div>
        </div>

      </div>
    </ReactModal>
  );
};

export default Confirmation;
