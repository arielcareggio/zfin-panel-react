import { useState } from 'react';
import Select, { ActionMeta, ValueType, StylesConfig } from 'react-select';


type OptionType = { value: string; label: string; };

const options: OptionType[] = [
  { value: '1', label: 'Ingreso' },
  { value: '2', label: 'Egreso' },
];

// Define el tipo específico para los estilos personalizados
const customStyles: StylesConfig<OptionType, false> = {
  // Estilo del contenedor principal del Select
  container: (provided) => ({
    ...provided,
    className: 'w-6', // Personaliza el ancho según tus necesidades
  }),

  // Estilo del menú desplegable
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'white', // Personaliza el color de fondo
  }),

  option: (provided, state) => ({
    ...provided,
    /* backgroundColor: state.isSelected ? 'blue' : 'white',
    color: state.isSelected ? 'white' : 'black',*/
    //className: `py-2 px-4 ${state.isSelected ? 'bg-red-100' : 'bg-white'}`, // Clases de Tailwind CSS
    className: "bg-red-100 !important"
  }),

  // Estilo de las opciones individuales
  /* option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'blue' : 'white', // Cambia el color de fondo cuando se selecciona
    color: state.isSelected ? 'white' : 'black', // Cambia el color del texto cuando se selecciona
  }), */
};

export default function App() {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const onChange = (option: ValueType<OptionType>, actionMeta: ActionMeta<OptionType>) => {
    console.log(option);
    setSelectedOption(option as OptionType);
  };
{/* <div className="flex items-center mt-6"> */}
  return (
    
    <div className="mt-6">
      <label htmlFor="company" className="block mr-2 mb-3 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
        Tipo movimiento
      </label>
      <Select
        isClearable={true}
        isSearchable={true}
        value={selectedOption}
        onChange={onChange}
        options={options}
        placeholder="Seleccione un tipo"
        /* styles={customStyles} */
        className="my-react-select-container"
        classNamePrefix="my-react-select"
      />
    </div>
  );
}

/* isDisabled={true} */
/*
isMulti={true}
closeMenuOnSelect={false}
 */

/* https://react-select.com/home */
/* https://github.com/JedWatson/react-select */

/* https://react-select.com/components#components */