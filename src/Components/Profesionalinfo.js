
const Professionalinfo =(props)=>{
    return( 
        <div>
            <div className="">
                    <div className="h-10 w-full flex justify-center my-auto mt-1 px-8 md:px-96">
                        <div className="h-auto w-12 md:w-10 rounded-full flex items-center bg-green-800 justify-center">1</div>
                        <div className="line w-2/5 bg-green-800 h-0.5 my-5"></div>
                        <div className="h-auto w-12 md:w-10 rounded-full flex items-center  border-4 border-green-800 bg-gray-300 justify-center">2</div>
                        <div className="line w-2/5 bg-gray-500 h-0.5 my-5"></div>
                        <div className="h-10 w-12 md:w-10 rounded-full flex items-center bg-gray-300 justify-center">3</div>
                    </div>
                </div>
                <div className="container h-auto w-11/12 md:w-8/12 mx-auto mt-4 rounded-md bg-blue-950 p-2">
                <form className="">
                    <p className="text-2xl text-sky-300 font-serif my-2 text-center sm:text-left sm:ml-12">Professional Information</p>
                    <div className="details flex flex-col-reverse lg:flex-row h-4/5 sm:justify-evenly">
                        <div className="personal basis-8/12 sm:ml-20">
                            

                            <div className="contact flex  justify-between sm:h-9 mt-3 mb-2">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md ">Year of Experience:</label></div>
                                <div className="value basis-6/12"><input name="fullname" type="number" className="rounded-xl border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="email flex  justify-between sm:h-9 mt-3 mb-2">
                                <div className="title basis-4/12"><label className="text-white font-bold text-md">Law Firm(if any):</label></div>
                                <div className="value  basis-6/12"><input name="fullname" type="email" className="rounded-xl border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="DOB flex  justify-between sm:h-9 mt-3 mb-2">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Work Location:</label></div>
                                <div className="value basis-6/12"><input name="fullname" className="rounded-xl border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="Language flex justify-between sm:h-9 mt-3 mb-2">
                                <div className="title basis-4/12"><label for="user" className="text-white font-bold text-md">Type of Lawyer : </label></div>
                                
                                <div className="value  basis-7/12 py-3 sm:py-0 mb-8"><select name="user" id="user" className="text-black w-auto ml-14 text-base rounded-lg px-2 py-1 border-2 border-slate-500 bg-gray-300">
                                    <option value="client">Criminal Lawyer</option>
                                    <option value="lawyer">Family Lawyers</option>
                                    <option value="consultant">Corporate Lawyers</option>
                                    <option value="lawfirm">Labor Lawyers</option>
                                    <option value="notary">Tax Lawyer</option>
                                    <option value="mediator">Public Interest Lawyer</option>
                                    <option value="documentwriter">Intellectual Property Lawyer</option>
                                    <option value="consultant">Immigration Lawyers</option>
                                    <option value="client">Civil Rights Lawyer</option>
                                    <option value="lawyer">Environmental Lawyer</option>
                                    <option value="consultant">Entertainment Lawyer</option>
                                    <option value="lawfirm">Estate Planning Lawyer</option>
                                    <option value="notary">Civil Litigation Lawyers</option>
                                    <option value="client">Constitutional Lawyers</option>
                                    <option value="lawyer">Real Estate Lawyers</option>
                                    <option value="consultant">Bankruptcy Lawyers</option>
                                    <option value="lawfirm">Malpractice Lawyers</option>
                                    <option value="notary">Personal injury lawyer</option>
                                    <option value="notary">Property lawyer</option>
                                    <option value="client">Divorce lawyer</option>
                                    </select></div>
                                    </div>
                            <div className="ocupation flex  justify-between sm:h-9 mt-3 mb-4">
                                <div className="title  basis-4/12">
                                    <label className="text-white font-bold text-md">Bar Association Certificate :</label>
                                </div>
                                <div className="value  basis-6/12 h-8">
                                    <input type="file" name="fullname" className="text-white rounded-sm border-2 border-slate-900 h-8  w-full float-right sm:h-full flex"/>
                                </div>
                                
                            </div>
                            <div className="DOB flex flex-col justify-between sm:h-auto mt-3 mb-8">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Bio<span className="text-sm font-light">(Description of your profile):</span><br/></label></div>
                                <div className="value basis-11/12"><input type="text" name="fullname" className="rounded-xl border-2 border-slate-700 h-8  w-full float-right sm:h-24 cursor-auto"></input></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6  my-2">
                <input onClick={() => props.pfun()} type="reset" value="Back" className="bg-gray-300 border-2 border-slate-400 rounded-lg w-5/12 md:w-3/12 h-10 text-xl font-extrabold"/>
                <input type="submit" onClick={() => props.nfun()} value="Next" className="bg-sky-300 border-2 border-slate-400 w-5/12 h-10 text-xl rounded-lg font-extrabold md:w-3/12"/>
                </div>
                </form>
             </div>   
        </div>
    );
}
export default Professionalinfo; 