import { createContext, useState } from "react"


const AuthContext = createContext({})
export default AuthProvider = ({children})=> {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('name')))
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}