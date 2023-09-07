// Tipo para Select
export type OptionType = { value: string; label: string; };

export type datosConfigSelect = {
    name: string,
    title: string,
    placeholder: string,
    defaultValue: OptionType[],
    size?: string,
    required?: boolean
    isDisabled?: boolean
    onSelect?: (option: OptionType | null) => void; // Agrega onSelect como una propiedad opcional
    value?: OptionType | null | undefined;
}