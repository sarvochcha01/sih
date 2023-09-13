const SearchArea = () => {
  return (
    <div className="flex flex-col w-full max-w-screen-3xl mt-16 self-center  text-white items-center">
      <div className="flex w-full  lg:w-4/5 justify-center px-3 py-4 mt-8">
        <span className="text-3xl font-bold text-center lg:text-5xl">
          Finding legal solutions has never been easier
        </span>
      </div>
      <div className="flex w-full lg:w-3/5 h-auto mt-6 text-center">
        <span className="px-8 text-xl lg:text-2xl font-semibold">
          Find Lawyers, Law-firms, Notaries, Document writers and other{" "}
          <span className="text-lsp">legal service providers</span> near you!
        </span>
      </div>
      <div className="searchbox flex w-4/5 lg:w-3/5 text-black mt-8 md:h-40 rounded-xl bg-white px-8 py-6">
        <div className="content flex flex-col lg:flex-row w-full justify-evenly">
          <div className="w-full lg:w-1/3 h-32  flex flex-col">
            <label className="text-lg font-semibold" htmlFor="serviceInput">
              Select a service:
            </label>
            <div>
              <input
                id="serviceInput"
                type="text"
                className="w-full bg-slate-200 h-16 px-2 rounded-xl mt-2"
                placeholder="Select a service"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3 h-32  flex flex-col">
            <label className="text-lg font-semibold" htmlFor="cityInput">
              Location:
            </label>
            <div>
              <input
                id="cityInput"
                type="text"
                className="w-full bg-slate-200 h-16 px-2 rounded-xl mt-2"
                placeholder="City"
              />
            </div>
          </div>
          <div className="w-40 lg:w-48 h-16 bg-navbar flex justify-center items-center self-center rounded-xl text-white text-xl lg:mt-5 hover:cursor-pointer hover:shadow-xl">
            Find
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
