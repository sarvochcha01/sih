import axios from "axios";
import jwtDecode from "jwt-decode";
const authentication = () => {
  let authenticated, decodedToken;
  const token =
    localStorage.FBIdToken == null ? "Bearer " : localStorage.FBIdToken;

  if (token.split("Bearer ")[1]) {
    decodedToken = jwtDecode(token);
    //console.log(decodedToken);
    authenticated = true;
    axios.defaults.headers.common["Authorization"] = token;
    if (decodedToken.exp * 1000 < Date.now()) {
      authenticated = false;
    }
  } else {
    authenticated = false;
  }

  

  return {
    authenticated: authenticated,
    decodedToken: decodedToken,
    token: token,
  };
};

export default authentication;
