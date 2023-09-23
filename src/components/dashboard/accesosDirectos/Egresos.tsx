import { tipos } from "../../../../config";
import TaskContext from "../../../context/TaskContext";
import { OptionType } from "../../../types/Types";

import AddMovimiento from "./modals/AddMovimiento";
import { useState, useContext, useEffect } from 'react';

interface EgresosProps {
  svgIcon: React.ReactNode;
}

function Egresos({ svgIcon }: EgresosProps) {
  const [apiTipos, setTipos] = useState<any>(null);
  const tipo = tipos.find((tipo) => tipo.value === '2'); // Busca el Egreso

  const taskContext = useContext(TaskContext);
  if (!taskContext) {
    return <div>Contexto no disponible</div>;// El contexto es nulo, maneja esta situación si es necesario
  }
  const { apiTiposEgresos } = taskContext;
  const categorias: OptionType[]  = apiTiposEgresos ? apiTiposEgresos : [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState<OptionType | null>(null);

  const openModal = (datos?: OptionType) => {
    if (datos) {
      setSelectedCategoria(datos);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCategoria(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setTipos(tipos);
    };

    fetchData();
  }, []); // El [] asegura que se ejecute una vez al montar el componente

  return (
    <div className="bg-fondo-contenedor h-auto rounded-xl text-sm shadow-md shadow-gray-500">
      <div>
        <h1 className="text-center tracking-widest font-semibold text-xs sm:text-sm">Accesos Directos - Egresos</h1>
      </div>

      <div className="h-auto flex flex-wrap rounded-xl text-sm text-black">
        <button
          id="Egreso"
          className="bg-red-700 hover:bg-red-900 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in
                 duration-300 shadow-md text-white shadow-slate-800 hover:shadow-slate-950 ring-2 ring-red-700/30"
          onClick={() => openModal()}
        >
          <div className="mr-1 w-6 text-white">{svgIcon}</div>
          <span>Egreso</span>
        </button>

        <div className="mx-2"></div>

        {categorias.map((categoria) => (
          <button
            key={categoria.value}
            id={categoria.value}
            className="bg-fondo-botones-rojo hover:bg-red-500 font-bold px-2 m-1 rounded-xl flex items-center h-8 transition ease-in duration-300
                        shadow-md shadow-slate-800 hover:shadow-slate-950 ring-2 ring-red-500/50"
            onClick={() => openModal(categoria)}
          >
            <div className="mr-1 w-6 text-gray-800">{svgIcon}</div>
            <span>{categoria.label}</span>
          </button>
        ))}

        <AddMovimiento
          isOpen={isModalOpen}
          onClose={closeModal}
          dataConfiguracion={{
            color: "bg-red-600",
            titulo: 'Nuevo Egreso',
            tipo: tipo ? [tipo] : [], // Egreso
            defaultValueSelect: selectedCategoria ? [selectedCategoria] : [], // Aquí se crea un array con un solo elemento
            defaultValueInput: '',
            defaultValueTextArea: '',
            isDisabled: true,
          }}
          dataSelect_Tipos={apiTipos ? apiTipos : []}
          dataSelect_Categorias={categorias}
        />
      </div>
    </div>
  );
}

export default Egresos;
