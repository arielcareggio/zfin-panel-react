
import AddMovimiento from "./modals/AddMovimiento";
import { useState } from 'react';

interface EgresosProps {
    svgIcon: React.ReactNode;
}

function Egresos({ svgIcon }: EgresosProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-fondo-contenedor h-auto rounded-xl text-sm"> {/* bg-rose-200 */}
            <div>
                <h1 className="text-center tracking-widest font-semibold text-xs sm:text-sm">Accesos Directos - Egresos</h1>
            </div>

            <div className="h-auto flex flex-wrap rounded-xl text-sm text-black">
                <button id="Egreso" className="bg-red-700 hover:bg-red-900 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg text-white"
                    onClick={openModal}>
                    <div className="mr-1 w-6 text-white">
                        {svgIcon}
                    </div>
                    <span>Egreso</span>
                </button>
                
                <div className="mx-2"></div>

                <button className="bg-rose-300 hover:bg-rose-400 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Supermercado</span>
                </button>

                <button className="bg-rose-300 hover:bg-rose-400 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Alquiler</span>
                </button>

                <button className="bg-rose-300 hover:bg-rose-400 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Delibery</span>
                </button>

                <button className="bg-rose-300 hover:bg-rose-400 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Combustible</span>
                </button>

                <button className="bg-rose-300 hover:bg-rose-400 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Salud</span>
                </button>

                <AddMovimiento isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>
    )
}

export default Egresos;