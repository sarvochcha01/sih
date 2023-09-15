import ClientHome from "./Pages/ClientHome";
import ClientHomeNavbar from "./Components/ClientHomeNavBar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import ClientProfileView from "./Pages/ClientProfileView";
import ServiceProviderList from "./Pages/ServiceProviderList";

import AdvocatesList from "./Data/Advocates.json";
import LawFirmsList from "./Data/LawFirmsList.json";

import ServiceProviderProfile from "./Pages/ServiceProviderProfile";
import NotFound404 from "./Components/NotFound404";

import Signinup from "./Components/Signinup";
import jwtDecode from "jwt-decode";

//checking for authorization

import RegisterProvider from "./Components/Registration/Provider/RegisterProvider";
import UserSelection from "./Components/UserSelection";
import Registerclient from "./Components/Registration/Client/Registerclient";
import RegisterLawFirm from "./Components/Registration/Provider/RegisterLawFirm";
import ProvidersDash from "./Components/ProvidersDash";
import RegistrationSuccess from "./Components/Registration/Provider/RegisterationSuccess";
function App() {
  return (
    <div className="flex flex-col w-full">
      <ClientHomeNavbar />
      <Routes>
        <Route path="/" element={<ClientHome />} />
        <Route path="/profile" element={<ClientProfileView />} />
        <Route
          path="/advocates"
          element={
            <ServiceProviderList
              searchName="Advocates"
              searchLocation="Bangalore"
              list={AdvocatesList}
              providerType="advocates"
            />
          }
        />
        <Route path="/advocates/:id" element={<ServiceProviderProfile />} />
        <Route
          path="/law-firms"
          element={
            <ServiceProviderList
              searchName="Law Firms"
              searchLocation="Bangalore"
              list={LawFirmsList}
              providerType="law-firms"
            />
          }
        />
        <Route path="/signin" element={<Signinup a={true} b={false} />} />
        <Route path="/signup" element={<Signinup a={false} b={true} />} />
        <Route path="/providerRegister" element={<RegisterProvider />} />
        <Route path="/UserSelection" element={<UserSelection />} />
        <Route path="/clientRegister" element={<Registerclient />} />

        <Route path="/providerRegister" element={<RegisterProvider />} />

        <Route path="/providerRegister" element={<RegisterProvider />} />

        <Route path="/providerRegister" element={<RegisterProvider />} />

        <Route path="/UserSelection" element={<UserSelection />} />
        <Route path="/clientRegister" element={<Registerclient />} />
        <Route path="/LawFirmRegister" element={<RegisterLawFirm />} />
        <Route path="/ProviderDash" element={<ProvidersDash />} />
        <Route path="/not-found" element={<NotFound404 />} />

        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
