const Educationalinfo =(props)=>{
    return(
        <div className="">
            <div>
                    <div className="h-10 w-full flex justify-center my-auto  px-8 md:px-96">
                        <div className="h-auto w-12 md:w-10 rounded-full  flex items-center bg-green-800 justify-center">1</div>
                        <div className="line w-2/5 bg-green-800 h-0.5 my-5"></div>
                        <div className="h-auto w-12 md:w-10 rounded-full flex items-center bg-green-800 justify-center">2</div>
                        <div className="line w-2/5 bg-green-800 h-0.5 my-5"></div>
                        <div className="h-10 w-12 md:w-10 rounded-full flex items-center bg-gray-300 border-4 border-green-800 justify-center">3</div>
                    </div>
                </div>
            <div className="container h-auto w-11/12 md:w-8/12 mx-auto mt-4 rounded-md bg-blue-950 p-2">
                <form className="">
                    <p className="text-2xl text-sky-300 font-serif my-2 text-center sm:text-left sm:ml-12">Educational Information</p>
                    <div className="details flex flex-col-reverse lg:flex-row h-4/5 sm:justify-evenly">
                        <div className="personal basis-8/12 sm:ml-20">
                            <div className="name flex justify-between sm:h-9 mt-6">
                                <div className="title  basis-4/12  "><label className="text-white font-bold text-md ">Degree:</label></div>
                                <div className="value basis-7/12 "><input name="fullname" className="rounded-xl border-2 border-slate-700 h-8  sm:h-full w-full float-right"/></div>
                            </div>

                            <div className="contact flex  justify-between sm:h-9 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md ">Passing Year:</label></div>
                                <div className="value basis-7/12"><input name="fullname" type="number" className="rounded-xl border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="email flex  justify-between sm:h-9 mt-3">
                                <div className="title basis-4/12"><label className="text-white font-bold text-md">Certificate:</label></div>
                                <div className="value  basis-7/12">
                                    <label  for="img" className="rounded-xl border-2 border-slate-700 h-8 w-1/2 float-right sm:h-full bg-sky-300 text-lg flex justify-center ">Upload</label>
                                    <input id="img" name="fullname" type="file" className="rounded-xl border-2 border-slate-700 h-8 w-full float-right hidden sm:h-full "/></div>
                            </div>

                            <div className="DOB flex  justify-between sm:h-9 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Date of Birth:</label></div>
                                <div className="value basis-7/12"><input name="fullname" className="rounded-xl border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="Language flex justify-between sm:h-9 mt-3 ">
                                <div className="title basis-4/12"><label className="text-white font-bold text-md">Language Spoken:</label></div>
                                <div className="value  basis-7/12 py-3 sm:py-0"><input name="fullname" className="rounded-x border-2 border-slate-700 h-8  w-full float-right sm:h-full"/></div>
                            </div>

                            <div className="ocupation flex  justify-between sm:h-9 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Occupation :</label></div>
                                <div className="value  basis-7/12"><input name="fullname" className="rounded-sm border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="Gender flex justify-between sm:h-9 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Gender:</label></div>
                                <div className="value  basis-7/12"><input name="fullname" className="rounded-sm border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="address flex  justify-between sm:h-9 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Address:</label></div>
                                <div className="value basis-7/12"><input name="fullname" className="rounded-sm border-2 border-slate-700 h-auto w-full float-right  sm:h-full overflow-auto"/></div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6  my-2">
                <input type="reset" value="Back" onClick={() => props.pfun()} className="bg-gray-300 border-2 border-slate-400 w-5/12 md:w-3/12 h-10 text-xl font-extrabold rounded-lg"/>
                <input type="submit" value="Submit" onClick={() => props.nfun()} className="bg-sky-300 border-2 border-slate-400 w-5/12 h-10 text-xl font-extrabold md:w-3/12 rounded-lg"/>
                </div>
                </form>
             </div>   
        </div>
    )
}
export default Educationalinfo;