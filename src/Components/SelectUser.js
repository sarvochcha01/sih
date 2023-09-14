const SelectUser =()=>{
    let box = document.getElementById("mainbox");
    let up=()=>{
        box.translate(100,200);
    };
    return(
        <div className="bg-green-200 mt-16 h-screen flex items-center justify-center">
            <div className="bg-blue-400 w-3/6 mx-auto h-48 flex  flex-col p-4" id="mainbox">
                <div className="bg-red-600 h-2/6 text-center text-3xl font-semibold">
                    You are Signing in as:
                </div>
                <div className="bg-green-600 h-3/6 flex justify-evenly items-center">
                    <form className="flex space-x-12">
                        <div>
                        <input className="h-4 w-4 mt-3" type="radio" id="Client" name="user"/>
                        <label className="text-3xl" htmlFor="Client">Client</label>
                        </div>
                        <div>
                        <input className="h-4 w-4 mt-3" type="radio" id="Provider" name="user" onClick={up}/>
                        <label className="text-3xl" htmlFor="Provider">Service Provider</label>
                        </div>
                    </form>
                </div>
                <div className="bg-blue-600 h-1/6 pl-4">
                Further registration will be done on the basis of your selection.
                </div>
            </div>
        </div>
    );
}
export default SelectUser;