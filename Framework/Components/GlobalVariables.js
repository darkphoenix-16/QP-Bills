import { createContext, useState } from "react"
export const AppContext = createContext()

export function AppProvider({ children }) {
    const [userUID, setUserUID] = useState("sdnkvjbkdsnm")
    const [userInfo, setUserInfo] = useState({})

    return (

        <AppContext.Provider
            value={{
                userUID, setUserUID,
                userInfo, setUserInfo
            }}
        >
            {children}
        </AppContext.Provider>
    )
}