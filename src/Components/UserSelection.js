import { useState } from "react";
import { Link } from "react-router-dom";

const UserSelection =()=>{

    const [clientOrProvider, setClientOrProvider] = useState();
    const [typeOfProvider, setTypeOfProvider] = useState();
    const handleClientOrProvider = (e) => {
        setClientOrProvider(e.target.value)
        localStorage.setItem("clientOrProvider", e.target.value)
        
    }
    const handleTypeOfProvider = (e) => {
        setTypeOfProvider(e.target.value)
        localStorage.setItem("typeOfProvider", e.target.value)
    }

    

    return( 
        
        <div className=" mt-24 h-[500px] flex flex-col justify-start pt-12">
            <div className=" h-auto">
                <form action="">
                    <div className="flex justify-evenly">
                        <div>
                            <input className="h-5 w-5" type="radio" id="h1" name="fav_language" value="Client"
                            onChange={(e) => handleClientOrProvider(e)} 
                            checked={localStorage.getItem("clientOrProvider") === 'Client'}/>
                            <label className="text-4xl" htmlFor="h1">Client</label><br/>
                        </div>
                        <div>
                            <input className="h-5 w-5" type="radio" id="h2" name="fav_language" value="Provider"
                            onChange={(e) => handleClientOrProvider(e)} 
                            checked={localStorage.getItem("clientOrProvider") === 'Provider'}/>
                            <label className="text-4xl" htmlFor="h2">Service Provider</label><br/>
                        </div>
                    </div>
                    
                </form>
                <form>
                    <div className=" flex flex-col pl-[650px]">
                        <div>
                            <input className="h-4 w-4" type="radio" id="h3" name="fav_language" value="Lawyer"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Lawyer'}/>
                            <label className="text-2xl" htmlFor="h3">Lawyer</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="h4" name="fav_language" value="Law Firm"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Law Firm'}/>
                            <label className="text-2xl" htmlFor="h4">Law Firm</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="h5" name="fav_language" value="Arbitrator"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Arbitrator'}/>
                            <label className="text-2xl" htmlFor="h5">Arbitrator</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="h6" name="fav_language" value="Notaries"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Notaries'}/>
                            <label className="text-2xl" htmlFor="h6">Notaries</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="h7" name="fav_language" value="Mediator"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Mediator'}/>
                            <label className="text-2xl" htmlFor="h7">Mediator</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="h8" name="fav_language" value="Document Writter"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Document Writter'}/>
                            <label className="text-2xl" htmlFor="h8">Document Writter</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="h9" name="fav_language" value="Consultant"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Consultant'}/>
                            <label className="text-2xl" htmlFor="h9">Consultant</label><br/>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        
                        <Link to = 
                        {localStorage.getItem("clientOrProvider") === 'Client' ? '/clientRegister' : '/providerRegister'}
                        ><input className="bg-green-300 h-12 w-16 mr-10" type="button" value="Next"
                        /></Link>
                    </div>
                </form>
                
            </div>
        </div>
    );
}
export default UserSelection;