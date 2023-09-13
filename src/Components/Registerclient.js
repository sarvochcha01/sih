const Registerclient =()=>{
    return(
           <div className="w-full h-full">
                
            <div className="container h-auto w-11/12 md:w-8/12 mx-auto md:mt-12 mt-5 rounded-2xl drop-shadow-2xl bg-blue-950 p-4">
                <form className="">
                    <div className="details flex flex-col-reverse lg:flex-row h-4/5 sm:justify-evenly">
                        <div className="personal basis-8/12 sm:ml-20">
                            <div className="name flex justify-between sm:h-9  my-6 mt-6">
                                <div className="title  basis-4/12  "><label className="text-white font-bold text-md ">Full Name:</label></div>
                                <div className="value basis-7/12 "><input name="fullname" className="rounded-md border-2 border-slate-700 h-8  sm:h-full w-full float-right"/></div>
                            </div>

                            <div className="contact flex  justify-between sm:h-9  my-6 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md ">Contact no:</label></div>
                                <div className="value basis-7/12"><input name="fullname" type="number" pattern="[0-9]{10}"className="rounded-md border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="email flex  justify-between sm:h-9  my-6 mt-3">
                                <div className="title basis-4/12"><label className="text-white font-bold text-md">Email ID:</label></div>
                                <div className="value  basis-7/12"><input name="fullname" type="email" className="rounded-md border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="DOB flex  justify-between sm:h-9  my-6 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Date of Birth:</label></div>
                                <div className="value basis-7/12"><input name="fullname" className="rounded-md border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="Language flex justify-between sm:h-9  my-6 mt-3 ">
                                <div className="title basis-4/12"><label className="text-white font-bold text-md">Language Spoken:</label></div>
                                <div className="value  basis-7/12 py-3 sm:py-0"><input name="fullname" className="rounded-md border-2 border-slate-700 h-8  w-full float-right sm:h-full"/></div>
                            </div>

                            <div className="ocupation flex  justify-between sm:h-9  my-6 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Occupation :</label></div>
                                <div className="value  basis-7/12"><input name="fullname" className="rounded-md border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="Gender flex justify-between sm:h-9  my-6 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Gender:</label></div>
                                <div className="value  basis-7/12"><input name="fullname" className="rounded-md border-2 border-slate-700 h-8  w-full float-right sm:h-full "/></div>
                            </div>

                            <div className="address flex  justify-between sm:h-9  my-6 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Address:</label></div>
                                <div className="value basis-7/12"><input name="fullname" className="rounded-md border-2 border-slate-700 h-8 w-full float-right  sm:h-full overflow-auto"/></div>
                            </div>
                        
                        </div>
                        <div className="photo basis-4/12">
                            <div className=" h-32 w-32 xl:h-40 xl:w-40 xl:mt-16 mx-auto flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5m7yIkq3oUIi8Gv31tfMsSN3FN_DpkVyEQ&usqp=CAU" height="100%" width="100%" 
                            className="mx-auto rounded-full" id="choosen_file"></img>
                            </div>
                            <label for="uploadbtn" className="flex justify-center"><span className=" mt-2 md:pt-1 rounded-md   w-5/12 md:w-4/12 md:h-8  font-bold  bg-skyblue flex justify-center">Select Image</span></label>
                            <input type="file" id="uploadbtn" name="upploadbtn" accept="image/*" className="hidden"/>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6 mt-6 mb-2">
                <input type="reset" value="Reset" className="bg-gray-300 md:w-2/12 h-10 text-xl font-bold rounded-lg"/>
                <input type="submit" value="Register" className="bg-skyblue  w-5/12 h-10 text-xl font-bold md:w-2/12 rounded-lg" />
                </div>
                </form>
             </div>   
        </div>
    );
}
export default Registerclient;