// Tipo para Select
export type OptionType = { value: string; label: string; id_movimiento_tipo?: string; monto?: number };

export type data = {
    data?: any,
    logId?: number
    status?: number
    success?: boolean
    error?: any
    message?: any
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
    placeholder?: string,
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
    comentario: string | null,
    created_at: string | null,
    updated_at: string | null,
    name_movimiento_tipo: string | null,
    name_banco_cuenta: string | null,
    name_banco: string | null,
    name_persona: string | null,
}

export interface addMovimientoProps {
    onClose: () => void;
    isOpen: boolean;
    dataConfiguracion: datosConfigRecibir;
    dataSelect_Tipos: OptionType[];
    dataSelect_Categorias: OptionType[];
    dataSelect_Cuentas: OptionType[];
    onConfirm?: () => void;
}

export type datosConfigRecibir = {
    color: string;
    titulo: string;
    tipo: OptionType[];
    defaultValueSelectCategoria: OptionType[];
    defaultValueSelectCuenta: OptionType[];
    defaultValueSelectCuentaBanco: OptionType[];
    defaultValueSelectPersona: OptionType[];
    defaultValueInputFecha: string;
    defaultValueInputPrecio: string;
    defaultValueTextArea: string;
    isDisabled: boolean;
}


export interface modalConfirmacionProps {
    isOpen: boolean;
    dataConfiguracion: datosModalConfirmacion;
    onConfirm: () => void;
    onClose: () => void;
}

export type datosModalConfirmacion = {
    color: string;
    titulo: string;
    subTitulo: string;
    tituloBotonAceptar: string;
    tituloBotonCancelar: string;
    isDisabled: boolean;
}

export type dataPagination = {
    data: datosMovimientos[],
    current_page: number,
    last_page: number,
    per_page: number,
    to: number,
    total: number
}