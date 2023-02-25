import { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <AppContext.Provider value={{
            isActive,
            setIsActive,
        }}>
          {children}
        </AppContext.Provider>
    )
}

export default AppContext;

