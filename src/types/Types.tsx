// Tipo para Select
export type OptionType = { value: string; label: string; id_movimiento_tipo?: string; monto?: number };

export type data = {
    data?: any,
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

export type datosAccesosDirectos = {
    id: number,
    id_tipo: number,
    id_movimiento_tipo: number,
    id_banco_cuenta: number,
    id_persona: number,
    name: string,
    monto: number,
    url_archivo: string | null,
    created_at: string | null,
    updated_at: string | null,
}

export type datosMovimientos = {
    id: number,
    id_movimiento_tipo: number,
    id_banco_cuenta: number,
    id_persona: number,
    fecha: string | null,
    monto: number,
    url_archivo: string | null,
    created_at: string | null,
    updated_at: string | null,
    name_movimiento_tipo: string | null,
    name_banco_cuenta: string | null,
    name_banco: string | null,
    name_persona: string | null,
}