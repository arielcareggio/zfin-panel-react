import { datosConfigInput } from "../../../types/Types";
import { useState } from 'react';

interface InputProps {
    dataConfig: datosConfigInput;
    onChange: (value: number | null, isValid: boolean) => void;
}

export default function InputPrecio({ dataConfig, onChange }: InputProps) {
    const [value, setValue] = useState<string>(dataConfig.defaultValue);
    //const [isPrecioValid, setIsPrecioValid] = useState<boolean>(false); // NO ES NECESARIO

    // Función para manejar cambios en el input
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        // Convierte el valor a número
        const numericValue = parseFloat(newValue);
        // Valida si es un número válido
        const isValid = !isNaN(numericValue) && isFinite(numericValue);
        // Actualiza el estado de la validez
       // setIsPrecioValid(isValid); // NO ES NECESARIO
        // Llama a la función onChange con el valor numérico y la validez
        onChange(isValid ? numericValue : null, isValid);
    };

    return (
        <div>
            <label htmlFor={dataConfig.name} className="block mb-3 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {dataConfig.title}
            </label>
            <input
                type='number'
                id={dataConfig.name}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-1 hover:border-1 hover:border-stone-400 transition ease-in duration-100
                    ${dataConfig.size || 'w-full'}
                `}
                placeholder={dataConfig.placeholder}
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}
