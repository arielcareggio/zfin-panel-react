import { useState, useEffect } from 'react';
import Select from 'react-select';
import { OptionType, datosConfigSelect } from '../../../types/Types';

interface SelectProps {
  opciones: OptionType[];
  dataConfig: datosConfigSelect & { onSelect?: (option: OptionType | null) => void };
  selectedValue: OptionType | null; // Nuevo prop para la opción seleccionada / estado local para manejar la opción seleccionada
}

export default function App({ opciones, dataConfig, selectedValue }: SelectProps) {
  let [selectedOption, setSelectedOption] = useState<OptionType | null>(selectedValue);

  useEffect(() => {
    if (dataConfig.defaultValue !== undefined) {
      setSelectedOption(dataConfig.defaultValue[0]);
    }
  }, [dataConfig.defaultValue]);

  const onChange = (option: OptionType | null) => {
    setSelectedOption(option);
    if (dataConfig.onSelect) {
      dataConfig.onSelect(option);
    }
  };

  return (
    <div>
      <label htmlFor="company" className="block mr-2 mb-3 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
        {dataConfig.title}
      </label>
      <Select
        name={dataConfig.name}
        isClearable={true}
        isSearchable={true}
        onChange={onChange}
        options={opciones}
        defaultValue={selectedOption ?? null}
        value={selectedOption ?? null}
        placeholder={dataConfig.placeholder}
        className={`my-react-select-container ${dataConfig.size || 'w-full'}`}
        required={dataConfig.required || false}
        isDisabled={dataConfig.isDisabled || false}
      />
    </div>
  );
}





// Define el tipo específico para los estilos personalizados
/* const customStyles: StylesConfig<OptionType, false> = {
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
    backgroundColor: state.isSelected ? 'blue' : 'white',
    color: state.isSelected ? 'white' : 'black',
    //className: `py-2 px-4 ${state.isSelected ? 'bg-red-100' : 'bg-white'}`, // Clases de Tailwind CSS
    className: "bg-red-100 !important"
  }),

  // Estilo de las opciones individuales
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'blue' : 'white', // Cambia el color de fondo cuando se selecciona
    color: state.isSelected ? 'white' : 'black', // Cambia el color del texto cuando se selecciona
  }),
}; */

/* isDisabled={true} */
/*
isMulti={true}
closeMenuOnSelect={false}
 */

/* https://react-select.com/home */
/* https://github.com/JedWatson/react-select */

/* https://react-select.com/components#components */