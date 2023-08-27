
const cuentas = [
  <>
    <div className="w-28">
      Santander:
    </div>
    <div>
      $500.000.000.000
    </div>
  </>,
  <>
    <div className="w-28">
      Banco Nación:
    </div>
    <div>
      $500.000.000.000
    </div>
  </>,
  <>
    <div className="w-28">
      Frances:
    </div>
    <div>
      $500.000.000.000
    </div>
  </>,
  <>
    <div className="w-28">
      Banco Galicia 1:
    </div>
    <div>
      $500.000.000.000
    </div>
  </>,
  <>
    <div className="w-28">
      MercadoPago Ari:
    </div>
    <div>
      $500.000
    </div>
  </>,
  <>
    <div className="w-28">
      Frances:
    </div>
    <div>
      $500.000
    </div>
  </>,
];

//Hace que muestre 2 cuentas por columnas, si por ejemplo hay 6 cuentas, creara 3 columnas poniendo 2 cuentas por columna
const gruposDeCuentas: JSX.Element[][] = [];
for (let i = 0; i < cuentas.length; i += 2) {
  gruposDeCuentas.push(cuentas.slice(i, i + 2));
}

//El icono de actualizar
const svgIcon = (
  <svg className="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M17 9a1 1 0 0 0-1 1 6.994 6.994 0 0 1-11.89 5H7a1 1 0 0 0 0-2H2.236a1 1 0 0 0-.585.07c-.019.007-.037.011-.055.018-.018.007-.028.006-.04.014-.028.015-.044.042-.069.06A.984.984 0 0 0 1 14v5a1 1 0 1 0 2 0v-2.32A8.977 8.977 0 0 0 18 10a1 1 0 0 0-1-1ZM2 10a6.994 6.994 0 0 1 11.89-5H11a1 1 0 0 0 0 2h4.768a.992.992 0 0 0 .581-.07c.019-.007.037-.011.055-.018.018-.007.027-.006.04-.014.028-.015.044-.042.07-.06A.985.985 0 0 0 17 6V1a1 1 0 1 0-2 0v2.32A8.977 8.977 0 0 0 0 10a1 1 0 1 0 2 0Z" />
  </svg>
);

function Resumen() {
  return (
    <div className="m-2">
      <h1 className="text-sm font-semibold px-1">Dashboard</h1>
      <div className="bg-fondo-contenedor h-auto flex flex-wrap rounded-xl text-sm">
        <div className="bg-fondo-cuenta-principal p-1 m-1 rounded-xl sa:w-40 w-full font-bold text-white flex relative">
          <div className="flex flex-col justify-center items-center flex-1">
            <div id="ariel" className="text-center">
              <div>
                Total:
              </div>
              <div className="text-texto-verde text-xl">
                $100.300
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 mt-2 mr-2 w-4 h-4 cursor-pointer">
            {svgIcon}
          </div>
        </div>

        {gruposDeCuentas.map((grupo, index) => (
          <div id="antonio" key={index} className="flex flex-col sa:w-auto w-full">
            {grupo.map((cuenta, cuentaIndex) => (
              <div key={cuentaIndex} className="bg-fondo-cuenta p-1 my-0.5 mx-1 px-6 rounded-xl text-center justify-center relative grid grid-cols-2">
                {cuenta}
                <div className="absolute top-0 right-0 mt-1 mr-1 w-3 h-4 cursor-pointer">
                  {svgIcon}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resumen;
