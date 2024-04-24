import { ReactNode, createContext, useState } from "react";

type ContextType = {
    name: string;
    setName: (n: string) => void;
}

export const LoggedUserContext = createContext<ContextType | null>(null);

export const LoggedUserProvider = ({children} : {children: ReactNode}) => {
    
    const [name, setName] = useState('Lucas');
    return(
        <LoggedUserContext.Provider value={{name, setName}}>{children}</LoggedUserContext.Provider>
    );

}

