import axios from "axios";
import api from "../Authentication/apiAddress";

const HandleSignOut = () => {
  axios
    .post(`${api}/signout`)
    .then((res) => {
      axios.defaults.headers.common["Authorization"] = "";

      const FBIdToken = `Bearer `; //Manish
      localStorage.setItem("FBIdToken", FBIdToken); //Manish
      console.log(res.data);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
export default HandleSignOut;
