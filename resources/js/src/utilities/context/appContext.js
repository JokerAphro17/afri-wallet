// AppContext
import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    const [mode, setMode] = useState('light');
    const [sidenavToggled, setSidenavToggled] = useState(false)

    const value = { mode, sidenavToggled, setSidenavToggled, setMode };

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );
}

export { AppProvider, AppContext };
