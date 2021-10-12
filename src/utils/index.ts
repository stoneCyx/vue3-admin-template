export const setToken = (accessToken:string)=>{
    console.log('sss',accessToken)
    window.localStorage.setItem("accessToken",accessToken);  
}
export const getToken = ()=>{
    return window.localStorage.getItem("accessToken") ;  
}