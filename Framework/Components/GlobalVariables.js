import { createContext, useState } from 'react'

export const AppContext = createContext()

export function AppProvider({ children }) {
    const [userUID, setUserUID] = useState("bfhHqMoApAgrbVZNi5Wd6UqgRbU2");
    const [userInfo, setUserInfo] = useState({firstname:"", lastname:"",balance:0});
    const [preloader, setPreloader] = useState(false);


    return (
        <AppContext.Provider
            value={{
                userUID, setUserUID,
                userInfo, setUserInfo,
                preloader, setPreloader,

            }}
        >
            {children}
        </AppContext.Provider>
    )
}