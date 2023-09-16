import axios from "axios"
import api from "../Authentication/apiAddress"
import authentication from "../Authentication/authentication"

const fetchAvailability = () =>{
    let values = authentication()
    if(values.authenticated){
        axios.post(`${api}/fetchAvailability`, {"providerUID": values.decodedToken.user_id})
        .then(data => {
            console.log(data.data)
        })
        .catch(err => {
            console.log("Sadge")
        })
    }
}       
export default fetchAvailability