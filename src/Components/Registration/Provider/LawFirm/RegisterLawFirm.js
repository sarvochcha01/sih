import { useState } from "react";
import LawFrimPersonalinfo from "./LawFirmPersonalInfo";
import LawFirmProfessionalInfo from "./LawFirmProfessionalInfo";
import LawFirmDocUpload from "./LawFirmDocUpload";
import RegistrationSuccess from "../RegisterationSuccess";

const RegisterLawFirm = ()=>{
    const [state, changeState] = useState(1);

    const nextState = () => {
      changeState(state + 1);
    };
    const prevState = () => {
      changeState(state - 1);
    };
    return(
        
            <div className="  flex flex-col h-full w-full mt-4">
            <div className="flex sm:h-12 text-lg font-extrabold my-2 md:my-0 md:text-3xl items-center justify-center h-auto md:mt-12">SERVICE PROVIDER REGISTRATION FORM</div>
            {state === 1 && <LawFrimPersonalinfo nfun={nextState} pfun={prevState}/>}
            {state === 2 && <LawFirmProfessionalInfo nfun={nextState} pfun={prevState}/>}
            {state === 3 && <LawFirmDocUpload nfun={nextState} pfun={prevState}/>}
            {state === 4 && <RegistrationSuccess nfun={nextState} pfun={prevState}/>}
        </div>
    );
}
export default RegisterLawFirm;