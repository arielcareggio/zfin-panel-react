
import React from "react";

interface EgresosProps {
    svgIcon: React.ReactNode;
}

function Egresos({ svgIcon }: EgresosProps) {
    return (
        <div className="bg-rose-200 h-auto rounded-xl text-sm">
            <div>
                <h1 className="text-center tracking-widest font-semibold text-xs sm:text-sm">Accesos Directos - Egresos</h1>
            </div>

            <div className="h-auto flex flex-wrap rounded-xl text-sm">
                <button className="bg-rose-400 hover:bg-rose-500 text-white font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300">
                    <div className="mr-1 w-6">
                        {svgIcon}
                    </div>
                    <span>Supermercado</span>
                </button>

                <button className="bg-rose-400 hover:bg-rose-500 text-white font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300">
                    <div className="mr-1 w-6">
                        {svgIcon}
                    </div>
                    <span>Alquiler</span>
                </button>

                <button className="bg-rose-400 hover:bg-rose-500 text-white font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300">
                    <div className="mr-1 w-6">
                        {svgIcon}
                    </div>
                    <span>Delibery</span>
                </button>

                <button className="bg-rose-400 hover:bg-rose-500 text-white font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300">
                    <div className="mr-1 w-6">
                        {svgIcon}
                    </div>
                    <span>Combustible</span>
                </button>

                <button className="bg-rose-400 hover:bg-rose-500 text-white font-bold px-2 m-1 rounded-full flex items-center h-8 transition ease-in duration-300">
                    <div className="mr-1 w-6">
                        {svgIcon}
                    </div>
                    <span>Salud</span>
                </button>
            </div>
        </div>
    )
}

export default Egresos;
