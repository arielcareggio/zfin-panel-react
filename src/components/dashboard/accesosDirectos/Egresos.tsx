
import { OptionType } from "../../../types/Types";
import AddMovimiento from "./modals/AddMovimiento";
import { useState } from 'react';

interface EgresosProps {
    svgIcon: React.ReactNode;

}



const opciones: OptionType[] = [
    { value: '1', label: 'Ingreso' },
    { value: '2', label: 'Egreso' },
];

function Egresos({ svgIcon }: EgresosProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-fondo-contenedor h-auto rounded-xl text-sm shadow-md shadow-gray-500"> {/* bg-rose-200 */}
            <div>
                <h1 className="text-center tracking-widest font-semibold text-xs sm:text-sm">Accesos Directos - Egresos</h1>
            </div>

            <div className="h-auto flex flex-wrap rounded-xl text-sm text-black">
                <button id="Egreso" className="bg-red-700 hover:bg-red-900 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md text-white shadow-slate-800 hover:shadow-slate-950 ring-2 ring-red-700/30"
                    onClick={openModal}>
                    <div className="mr-1 w-6 text-white">
                        {svgIcon}
                    </div>
                    <span>Egreso</span>
                </button>

                <div className="mx-2"></div>

                <button className="bg-fondo-botones-rojo hover:bg-red-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-red-500/50">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Supermercado</span>
                </button>

                <button className="bg-fondo-botones-rojo hover:bg-red-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-red-500/50">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Alquiler</span>
                </button>

                <button className="bg-fondo-botones-rojo hover:bg-red-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-red-500/50">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Delibery</span>
                </button>

                <button className="bg-fondo-botones-rojo hover:bg-red-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-red-500/50">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Combustible</span>
                </button>

                <button className="bg-fondo-botones-rojo hover:bg-red-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-red-500/50">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Salud</span>
                </button>

                <AddMovimiento
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    dataConfiguracion={
                        {
                            color: "bg-red-600",
                            titulo: 'Nuevo Egreso',
                            tipo: '2',
                            isDisabled: true
                        }}
                    dataOpcionesSelect={opciones} />

                {/* <AddMovimiento isOpen={isModalOpen} onClose={closeModal}/> */}
            </div>
        </div>
    )
}

export default Egresos;
//datos={Array("color", "bg-fondo-cuenta-principal")