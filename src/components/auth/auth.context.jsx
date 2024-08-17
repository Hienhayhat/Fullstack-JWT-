import { createContext,useState } from "react";

export const authContext = createContext({
    islogined:false,
    userEmail:'',
    userName:''
})
export const AuthWrapper=(props) => {
    const [auth, setAuth] = useState({
        islogined:false,
        userEmail:'',
        userName:''
    });
    const [loading,setLoading]=useState(true)
    
    return (
      <authContext.Provider value={{auth,setAuth,loading,setLoading}}>
        {props.children} 
      </authContext.Provider>
    );
  }