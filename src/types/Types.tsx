// Tipo para Select
export type OptionType = { value: string; label: string; };

export type datosConfigSelect = {
    name: string,
    title: string,
    placeholder: string,
    defaultValue: OptionType[],
    size?: string,
    isDisabled?: boolean
    onSelect?: (option: OptionType | null) => void // Agrega onSelect como una propiedad opcional
    value?: OptionType | null | undefined;
}

export type datosConfigInput = {
    name: string,
    title: string,
    placeholder: string,
    defaultValue: string,
    size?: string,
    isDisabled?: boolean
}