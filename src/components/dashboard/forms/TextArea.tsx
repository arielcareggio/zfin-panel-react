/* 
    Recibir:
        - Titulo
        - id
        - placeholder
        - required
        - tamaño
    */

import { useState } from "react";
import { datosConfigInput } from "../../../types/Types";

interface TextAreaProps {
    dataConfig: datosConfigInput;
    onChange: (value: string) => void;
}
export default function TextArea({ dataConfig, onChange  }: TextAreaProps) {
    const [value, setValue] = useState<string>(dataConfig.defaultValue);

    // Función para manejar cambios en el input
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
      onChange(newValue);
    };

    return (
        <div>
            <label form={dataConfig.name} className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">
                {dataConfig.title}
            </label>
            <textarea 
                id={dataConfig.name}
                rows={4}
                defaultValue={value}
                className={`block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500 ${dataConfig.size || 'w-full'}`}
                placeholder={dataConfig.placeholder}
                onChange={handleInputChange}
                >
                
            </textarea>
        </div>
    );
}