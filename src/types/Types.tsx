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
}