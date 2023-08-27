import React from "react";
import Egresos from "./Egresos";
import Ingresos from "./Ingresos";

interface AccesoDirectoProps {
    svgIcon: React.ReactNode;
}

function AccesoDirecto({ svgIcon }: AccesoDirectoProps) {
    return (
        <div className="m-2">
            <div className="grid grid-cols-2 h-auto rounded-xl text-sm p-1">
                <div className="mx-1">
                    
                    <Egresos svgIcon={svgIcon} />
                </div>

                <div className="mx-1">
                    <Ingresos svgIcon={svgIcon} />
                </div>
            </div>
        </div>
    )
}

export default AccesoDirecto
