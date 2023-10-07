import React, { createContext, useEffect } from "react";
import { OptionType } from "../types/Types";

import {
  useApiAllTotales,
  useApiAllCuentas,
  useApiAllTiposMovimientos,
  useApiAllAccesosDirectos,
} from "./Funciones"; // Importa los hooks personalizados

// Define el tipo para el valor del contexto
type AppContextValue = {
  apiTotales: any;
  apiCuentas: OptionType[] | null;
  apiTiposIngresos: OptionType[] | null;
  apiTiposEgresos: OptionType[] | null;
  fetchAllTotales: () => void;
  apiAccesosDirectosEgresos: OptionType[] | null;
  apiAccesosDirectosIngresos: OptionType[] | null;
  fetchAllAccesosDirectos: () => void;
};

export const AppContext = createContext<AppContextValue | null>(null);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export function AppContextProvider(props: AppContextProviderProps) {

  const { apiTotales, fetchAllTotales } = useApiAllTotales();
  const { apiCuentas, fetchAllCuentas } = useApiAllCuentas();
  const { apiTiposIngresos, apiTiposEgresos, fetchAllTiposMovimientos } = useApiAllTiposMovimientos();
  const { apiAccesosDirectosEgresos, apiAccesosDirectosIngresos, fetchAllAccesosDirectos } = useApiAllAccesosDirectos();

  useEffect(() => {
    const fetchData = async () => {
      //Credenciales, modificar con el login
      localStorage.setItem('token', '23|IJaCobeBQgn0cXFpjVLlnddzBWhZeo4cxW5jgNIL88f0fc84');
      localStorage.setItem('user_id', '1');
      localStorage.setItem('name', 'Ariel');
      localStorage.setItem('last_name', 'Car');
      localStorage.setItem('email', 'ariel@gmail.com"');
      localStorage.setItem('phone', '3572556699');

      // Llama a las funciones para obtener datos
      fetchAllTotales();
      fetchAllTiposMovimientos();
      fetchAllAccesosDirectos();
      fetchAllCuentas();
    };

    fetchData();
  }, []); // El [] asegura que se ejecute una vez al montar el componente

  return (
    <AppContext.Provider value={
      {
        apiTotales,
        apiCuentas,
        apiTiposIngresos,
        apiTiposEgresos,
        fetchAllTotales,
        apiAccesosDirectosEgresos,
        apiAccesosDirectosIngresos,
        fetchAllAccesosDirectos,
      }
    }>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;