const UserSelection =()=>{
    return(
        <div className=" mt-24 h-[500px] flex flex-col justify-start pt-12">
            <div className=" h-auto">
                <form action="">
                    <div className="flex justify-evenly">
                        <div>
                            <input className="h-5 w-5" type="radio" id="html" name="fav_language" value="HTML"/>
                            <label className="text-4xl" for="html">Client</label><br/>
                        </div>
                        <div>
                            <input className="h-5 w-5" type="radio" id="html" name="fav_language" value="HTML"/>
                            <label className="text-4xl" for="html">Service Provider</label><br/>
                        </div>
                    </div>
                    <input className="bg-green-300 h-12 w-16 mr-10 float-right" type="submit" value="Next"/>
                </form>
                <form>
                    <div className=" flex flex-col pl-[650px]">
                        <div>
                            <input className="h-4 w-4" type="radio" id="html" name="fav_language" value="HTML"/>
                            <label className="text-2xl" for="html">Lawyer</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="html" name="fav_language" value="HTML"/>
                            <label className="text-2xl" for="html">Law Firm</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="html" name="fav_language" value="HTML"/>
                            <label className="text-2xl" for="html">Arbitrator</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="html" name="fav_language" value="HTML"/>
                            <label className="text-2xl" for="html">Notaries</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="html" name="fav_language" value="HTML"/>
                            <label className="text-2xl" for="html">Mediator</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="html" name="fav_language" value="HTML"/>
                            <label className="text-2xl" for="html">Document Writter</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="html" name="fav_language" value="HTML"/>
                            <label className="text-2xl" for="html">Consultant</label><br/>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <input className="bg-green-300 h-12 w-16 mr-10" type="submit" value="Next"/>
                        <input className="bg-gray-300 h-12 w-16" type="reset" value="Reset"/>
                    </div>
                </form>
                
            </div>
        </div>
    );
}
export default UserSelection;