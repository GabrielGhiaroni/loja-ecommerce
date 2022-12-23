import React, {useState, createContext} from 'react';

//create context

export const BarraLateralContext = createContext();

const BarraLateralProvider = ({children}) => {
  //state barra lateral
  const [aberto, setAberto] = useState(false);

  const handleClose = () => {
    setAberto(false);
  }

  return <BarraLateralContext.Provider value={{aberto, setAberto, handleClose}}>{children}</BarraLateralContext.Provider>;
};

export default BarraLateralProvider;
