import { datosConfigInput } from "../../../types/Types";
import { useState } from 'react';

interface InputProps {
    dataConfig: datosConfigInput;
    onChange: (value: string | null, isValid: boolean) => void;
}

export default function InputFecha({ dataConfig, onChange }: InputProps) {
    const [value, setValue] = useState<string>(dataConfig.defaultValue);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        // Expresión regular para el formato DD/MM/AAAA
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

        // Comprueba si el valor cumple con el formato
        const isValidFormat = dateRegex.test(newValue);

        // Llama a la función onChange con el valor de fecha y la validez
        onChange(newValue, isValidFormat);
    };

    return (
        <div>
            <label htmlFor={dataConfig.name} className="block mb-3 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {dataConfig.title}
            </label>
            <input
                type='date'
                id={dataConfig.name}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-1 hover:border-1 hover:border-stone-400 transition ease-in duration-100
                    ${dataConfig.size || 'w-full'}
                `}
                /* placeholder={dataConfig.placeholder} */
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}
