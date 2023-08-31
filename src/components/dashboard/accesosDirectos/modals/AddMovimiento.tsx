import ReactModal from 'react-modal';

interface addMovimientoProps {
  onClose: () => void;
  isOpen: boolean;
  dataArray: datosRecibir; // Agrega el tipo adecuado para tu array aquí
}

type datosRecibir = {
  [key: string]: string;
}

function AddMovimiento({ onClose, isOpen, dataArray }: addMovimientoProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ejemplo de Modal"
      overlayClassName="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
      className="flex justify-center items-center w-10/12 xl:w-6/12" //Acá se maneja el tamaño del modal
    >
      <div className="bg-white rounded-lg w-full">

        {/* Barra de título */}
        <div className={`${dataArray.color} text-white py-2 px-4 rounded-t-lg`}>
          <h2 className="text-lg font-semibold">Nuevo Egreso</h2>
        </div>

        {/* Contenedor del modal */}
        <div className='p-6'>
          <h2 className="text-lg font-semibold mb-2">Contenido del Modal</h2>
          <p>Este es un contenido dentro del modal.</p>
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





{/* <Modal
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