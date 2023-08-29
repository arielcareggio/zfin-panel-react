
import React from "react";

interface IngresosProps {
    svgIcon: React.ReactNode;
}

function Ingresos({ svgIcon }: IngresosProps) {
    return (
        <div className="bg-fondo-contenedor h-auto rounded-xl text-sm"> {/* bg-green-200 */}
            <div>
                <h1 className="text-center tracking-widest font-semibold text-xs sm:text-sm">Accesos Directos - Ingresos</h1>
            </div>

            <div className="h-auto flex flex-wrap rounded-xl text-sm text-black">
                <button className="bg-green-700 hover:bg-green-900 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg text-white">
                    <div className="mr-1 w-6 text-white">
                        {svgIcon}
                    </div>
                    <span>Ingreso</span>
                </button>

                <div className="mx-2"></div>
                
                <button className="bg-green-300 hover:bg-green-400 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Venta</span>
                </button>


                <button className="bg-green-300 hover:bg-green-400 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Sueldo</span>
                </button>

                <button className="bg-green-300 hover:bg-green-400 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Bono</span>
                </button>

                <button className="bg-green-300 hover:bg-green-400 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Aguinaldo</span>
                </button>

                <button className="bg-green-300 hover:bg-green-400 font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300 shadow-lg">
                    <div className="mr-1 w-6 text-gray-800">
                        {svgIcon}
                    </div>
                    <span>Sueldo</span>
                </button>
            </div>
        </div >
    )
}

export default Ingresos;
