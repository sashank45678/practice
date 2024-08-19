import { useEffect,useState } from "react"
const useOnlineStatus=()=>{
    const [onlinestatus,setonlinestatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",function(e){
            setonlinestatus(false);
        })
        window.addEventListener("online",function(e){
            setonlinestatus(true);
        })
    },[])
    return onlinestatus;
}
export default useOnlineStatus;