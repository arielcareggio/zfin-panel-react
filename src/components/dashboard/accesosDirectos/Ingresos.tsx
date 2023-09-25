
import { tipos } from "../../../../config";
import TaskContext from "../../../context/TaskContext";
import { OptionType } from "../../../types/Types";
import AddMovimiento from "./modals/AddMovimiento";
import { useState, useContext, useEffect } from 'react';

interface IngresosProps {
    svgIcon: React.ReactNode;
}

function Ingresos({ svgIcon }: IngresosProps) {
    const [apiTipos, setTipos] = useState<any>(null);
    const tipo = tipos.find((tipo) => tipo.value === '1'); // Busca el Ingreso

    const taskContext = useContext(TaskContext);
    if (!taskContext) {
        return <div>Contexto no disponible</div>;// El contexto es nulo, maneja esta situación si es necesario
    }
    const { apiTiposIngresos, apiAccesosDirectosIngresos } = taskContext;
    const tiposIngresos: OptionType[] = apiTiposIngresos ? apiTiposIngresos : [];
    const AccesosDirectosIngresos: OptionType[] = apiAccesosDirectosIngresos ? apiAccesosDirectosIngresos : [];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategoria, setSelectedCategoria] = useState<OptionType>();

    const [nombre, setNombre] = useState<string>('');
    const [monto, setMonto] = useState<string>('');

    const openModal = (datos?: OptionType) => {
        (datos?.label) ? setNombre(datos?.label + '') : setNombre('');
        (datos?.monto) ? setMonto(datos.monto + '') : setMonto('');

        const tipoIn = tiposIngresos.find((tipoIn) => tipoIn.value == datos?.id_movimiento_tipo); // Buscamos el tipo a traves del id_movimiento_tipo
        if (tipoIn) {
            setSelectedCategoria(tipoIn);
        }

        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCategoria(undefined);
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            setTipos(tipos);
        };

        fetchData();
    }, []); // El [] asegura que se ejecute una vez al montar el componente

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

                {AccesosDirectosIngresos.map((AccesoDirectoIngreso) => (
                    <button
                        key={AccesoDirectoIngreso.value} // Asegura que cada botón tenga una clave única
                        id={AccesoDirectoIngreso.value}   // Establece el ID basado en el valor
                        className="bg-emerald-400 hover:bg-emerald-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                        duration-300 shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-green-500/50"
                        onClick={() => openModal(AccesoDirectoIngreso)}
                    >
                        <div className="mr-1 w-6 text-gray-800">
                            {svgIcon}
                        </div>
                        <span>{AccesoDirectoIngreso.label}</span>
                    </button>
                ))}

                <AddMovimiento
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    dataConfiguracion={{
                        color: "bg-green-600",
                        titulo: nombre ? 'Nuevo Ingreso "' + nombre + '":' : 'Nuevo Ingreso:',
                        tipo: tipo ? [tipo] : [], // Ingreso
                        defaultValueSelect: selectedCategoria ? [selectedCategoria] : [], // Aquí se crea un array con un solo elemento
                        defaultValueInput: monto ? monto : '',
                        defaultValueTextArea: nombre ? nombre : '',
                        isDisabled: true,
                    }}
                    dataSelect_Tipos={apiTipos ? apiTipos : []}
                    dataSelect_Categorias={tiposIngresos}
                />
            </div>
        </div >
    )
}

export default Ingresos;
