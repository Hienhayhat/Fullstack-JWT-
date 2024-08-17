import axios from "./axios.customize";
const createUserApi=(name,email,password)=>{
    const data={name,email,password}
    const URL_API ='/v1/api/register'
    
    return axios.post(URL_API,data)
}
const LoginApi=(email,password)=>{
    const data={email,password}
    const URL_API ='/v1/api/login'
    
    return axios.post(URL_API,data)
}
const getUserApi=()=>{
    const URL_API ='/v1/api/user'
    return axios.get(URL_API)
}
export {
    createUserApi,LoginApi,getUserApi
}