const ClientProfileView = () => {
  return (
    <div className="">
      <div className="w-full mt-14 h-96 justify-center absolute -z-50 bg-cover">
        <img
          src="./img/UserProfileBg.png"
          alt=""
          className="object-cover w-full lg:w-2/3 mx-auto h-5/6 lg:h-4/6 lg:rounded-xl"
        />
      </div>
      <div className="details flex flex-col lg:flex-row w-4/5 lg:w-3/5 h-auto mt-40 lg:mt-64 mx-auto">
        <div className="name flex flex-col h-80 lg:h-user-profile-panel-desktop lg:w-1/4 bg-gray-200 border border-slate-300 rounded-xl">
          <div className="img w-1/2 h-1/2 lg:h-48 lg:w-48 lg:mt-16  mx-auto rounded-full">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/s458/blank-profile-picture-hd-images-photo.JPG"
              alt=""
              className="rounded-full p-2"
            />
          </div>
          <div className="name mx-auto text-xl lg:text-lg font-bold text-center">
            Divyansh Yaduvanshi
          </div>
          <div className="username mx-auto mt-2 text-lg lg:text-sm font-bold text-lsp">
            @divy05
          </div>
          <div className="btn flex flex-row lg:flex-col mt-6 lg:mt-10 w-60 lg:w-full lg:space-y-4 mx-auto">
            <div className="edit-profile mx-auto bg-edit-profile text-white px-4 lg:px-8 py-2 rounded-xl hover:cursor-pointer">
              Edit Profile
            </div>
            <div className="edit-profile mx-auto bg-white text-lsp px-4 lg:px-8 py-2 rounded-xl hover:cursor-pointer">
              My Activity
            </div>
          </div>
        </div>
        <div className="info flex flex-col h-user-profile-panel-mobile lg:h-user-profile-panel-desktop mt-8 lg:mt-0 lg:w-3/4 lg:ml-4 bg-gray-200 border border-slate-300 rounded-xl">
          <div className="full-name flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Full name:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
              Divyansh Yaduvanshi
            </div>
          </div>
          <div className="username flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Username:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
              @divy05
            </div>
          </div>
          <div className="contact-no flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Contact number:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
              +91-8852xxxx99
            </div>
          </div>
          <div className="email flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              E-mail id:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
              divyanshy@gmail.com
            </div>
          </div>
          <div className="dob flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Date of birth:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
              25 May 2004
            </div>
          </div>
          <div className="language flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Languages spoken:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
              English, Hindi
            </div>
          </div>
          <div className="occupation flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Occupation:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
              Student
            </div>
          </div>
          <div className="address flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Address:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
              B33, SK Resisdency, Manglam City, Jaipur
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfileView;
