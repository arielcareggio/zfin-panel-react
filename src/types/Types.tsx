// Tipo para Select
export type OptionType = { value: string; label: string; };

export type data = {
    data: datosMovimientosTipos[] | undefined,
    logId?: number
    status?: number
    success?: boolean
}

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

export type datosMovimientosTipos = {
    id: number,
    id_cuenta: number,
    id_tipo: number,
    name: string,
    icono: string | null,
    created_at: string | null,
    updated_at: string | null,
    name_cuenta: string | string
}