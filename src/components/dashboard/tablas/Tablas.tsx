import Gastos_fijos_mensuales from "./Gastos_fijos_mensuales"
import Movimientos from "./Movimientos"


function Tablas() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 h-auto rounded-xl text-sm p-1">
            <div className="mx-1">
                <Movimientos />
            </div>
            <div className="mx-1 xl:my-0 my-4">
                <Gastos_fijos_mensuales />
            </div>
        </div>
    )
}

export default Tablas
