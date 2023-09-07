
import { OptionType } from "../../../types/Types";
import AddMovimiento from "./modals/AddMovimiento";
import { useState } from 'react';

interface IngresosProps {
    svgIcon: React.ReactNode;
}

const tipos: OptionType[] = [
    { value: '1', label: 'Ingreso' },
    { value: '2', label: 'Egreso' },
];

const categorias: OptionType[] = [
    { value: '1', label: 'Venta' },
    { value: '2', label: 'Sueldo' },
    { value: '3', label: 'Bono' },
    { value: '4', label: 'Aguinaldo' },
    { value: '5', label: 'Sueldo' },
];

function Ingresos({ svgIcon }: IngresosProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategoria, setSelectedCategoria] = useState<OptionType>();

    const tipo = tipos.find(tipo => tipo.value === '1'); // Busca el Ingreso

    const openModal = (datos?: OptionType) => {
        if (datos) {
            setSelectedCategoria(datos);
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCategoria(undefined);
        setIsModalOpen(false);
    };


    return (
        <div className="bg-fondo-contenedor h-auto rounded-xl text-sm shadow-md shadow-gray-500"> {/* bg-green-200 */}
            <div>
                <h1 className="text-center tracking-widest font-semibold text-xs sm:text-sm">Accesos Directos - Ingresos</h1>
            </div>

            <div className="h-auto flex flex-wrap rounded-xl text-sm text-black">
                <button className="bg-green-700 hover:bg-green-900 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in 
                duration-300 shadow-md text-white shadow-slate-800 hover:shadow-slate-950 ring-2 ring-green-700/30"
                    onClick={() => openModal()}
                >
                    <div className="mr-1 w-6 text-white">
                        {svgIcon}
                    </div>
                    <span>Ingreso</span>
                </button>

                <div className="mx-2"></div>

                {categorias.map((categoria) => (
                    <button
                        key={categoria.value} // Asegura que cada botón tenga una clave única
                        id={categoria.value}   // Establece el ID basado en el valor
                        className="bg-emerald-400 hover:bg-emerald-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                        duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-green-500/50"
                        onClick={() => openModal(categoria)}
                    >
                        <div className="mr-1 w-6 text-gray-800">
                            {svgIcon}
                        </div>
                        <span>{categoria.label}</span>
                    </button>
                ))}

                <AddMovimiento
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    dataConfiguracion={
                        {
                            color: "bg-green-600",
                            titulo: 'Nuevo Ingreso',
                            tipo: tipo ? [tipo] : [], //Egreso
                            defaultValue: selectedCategoria ? [selectedCategoria] : [], // Aquí se crea un array con un solo elemento
                            isDisabled: true
                        }}
                    dataSelect_Tipos={tipos}
                    dataSelect_Categorias={categorias}
                />


                {/* <button className="bg-emerald-400 hover:bg-emerald-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-green-500/50">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Venta</span>
                </button>


                <button className="bg-emerald-400 hover:bg-emerald-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-green-500/50">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Sueldo</span>
                </button>

                <button className="bg-emerald-400 hover:bg-emerald-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-green-500/50">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Bono</span>
                </button>

                <button className="bg-emerald-400 hover:bg-emerald-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-green-500/50">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Aguinaldo</span>
                </button>

                <button className="bg-emerald-400 hover:bg-emerald-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-green-500/50">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Sueldo</span>
                </button> */}
            </div>
        </div >
    )
}

export default Ingresos;
