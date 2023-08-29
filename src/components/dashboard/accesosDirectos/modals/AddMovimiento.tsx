import ReactModal from 'react-modal';
import Modal from 'react-modal';

Modal.setAppElement("#root");

interface addMovimientoProps {
  onClose: () => void;
  isOpen: boolean;
}

function AddMovimiento({ onClose, isOpen }: addMovimientoProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ejemplo de Modal"
      shouldCloseOnOverlayClick={true}
      overlayClassName="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
      className="inset-0 flex justify-center items-center z-50 w-full" // Agrega tu clase personalizada aquí
      //className="custom-modal-content" // Agrega tu clase personalizada aquí
      //className="fixed inset-0 flex justify-center items-center z-50"
    >
      {/* Contenedor del modal */}
      <div className="bg-white rounded-lg p-6 w-1/2">
        <h2 className="text-lg font-semibold mb-2">Contenido del Modal</h2>
        <p>Este es un contenido dentro del modal.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={onClose}
        >
          Cerrar Modal
        </button>
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