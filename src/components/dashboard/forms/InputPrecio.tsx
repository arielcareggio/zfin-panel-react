import { datosConfigInput } from "../../../types/Types";
import { useState } from 'react';

interface InputProps {
    dataConfig: datosConfigInput;
    onChange: (value: number) => void;
}

//export default function App({ opciones, dataConfig }: SelectProps) {
export default function InputPrecio({ dataConfig, onChange  }: InputProps) {
    const [value, setValue] = useState<string>(dataConfig.defaultValue);

    // Función para manejar cambios en el input
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
  
      // Convierte el valor a número y llama a la función onChange
      const numericValue = parseFloat(newValue);
      onChange(numericValue);
    };

    return (
        <div>
            <label htmlFor="company" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {dataConfig.title}
            </label>
            <input
                type={dataConfig.type}
                id="company"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-1 hover:border-1 hover:border-stone-400 transition ease-in duration-100
                    ${dataConfig.size || 'w-full'}
                `}
                placeholder={dataConfig.placeholder}
                value={value}
                required={dataConfig.required || false}
                defaultValue={value}
                onChange={handleInputChange}
            />
        </div>
    );
}

/* <div className="flex items-center mt-6"> */
/* 


className={`my-react-select-container ${dataConfig.size || 'w-full'}`}

Input Monto
https://tailwindui.com/components/application-ui/forms/input-groups
<div>
               
                <div className="relative mt-2 rounded-md shadow-sm w-1/2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-700 sm:text-sm">Monto: $</span>
                    </div>
                    <input type="number" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-20 pr-4 text-gray-900 ring-1 ring-inset
               ring-gray-300 placeholder:text-gray-400  sm:text-base sm:leading-7" placeholder="0.00" />
                   <div className="absolute inset-y-0 right-0 flex items-center">
                <label form="currency" className="sr-only">Currency</label>
                 <select id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select> 
              </div>
                </div>
            </div>
*/