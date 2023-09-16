import axios from "axios"
import api from "../Authentication/apiAddress"
import authentication from "../Authentication/authentication"

const getProviderUID = (handle) =>{
    let values = authentication()
    if(values.authenticated){
        //GET PROVIDER UID
        axios.post(`${api}/getProviderUID`, {"handle": handle})
        .then(doc => {
            console.log(doc.data.handle)
            localStorage.setItem("ProviderUID", doc.data.handle )
        })
        .catch(err=>{
            console.log("SADGE")
        })


        //REQUEST APPOINTMENT
    }
}       
export default getProviderUID