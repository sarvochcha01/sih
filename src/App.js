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

import RegisterProvider from "./Components/Registration/Provider/Lawyer/RegisterProvider";
import UserSelection from "./Components/UserSelection";
import Registerclient from "./Components/Registration/Client/Registerclient";
import RegisterLawFirm from "./Components/Registration/Provider/LawFirm/RegisterLawFirm";
import ProvidersDash from "./Components/ProvidersDash";
import RegistrationSuccess from "./Components/Registration/Provider/RegisterationSuccess";
import Appointment from "./Components/Appointment";
import AppointmentRequest from "./Components/AppointmentRequest";
import RequestAppointment from "./Components/RequestAppointment";
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
              list={AdvocatesList}
              providerType="advocates"
            />
          }
        />
        <Route path="/advocates/:id" element={<ServiceProviderProfile />} />
        <Route
          path="/law-firms"
          element={
            <ServiceProviderList list={LawFirmsList} providerType="law-firms" />
          }
        />
        <Route
          path="/law-firms"
          element={
            <ServiceProviderList list={LawFirmsList} providerType="law-firms" />
          }
        />
        <Route
          path="/arbitrators"
          element={
            <ServiceProviderList list={LawFirmsList} providerType="law-firms" />
          }
        />
        <Route
          path="/notaries"
          element={
            <ServiceProviderList list={LawFirmsList} providerType="law-firms" />
          }
        />
        <Route
          path="/mediators"
          element={
            <ServiceProviderList list={LawFirmsList} providerType="law-firms" />
          }
        />
        <Route
          path="/deed-writers"
          element={
            <ServiceProviderList list={LawFirmsList} providerType="law-firms" />
          }
        />
        <Route
          path="/tax-consultants"
          element={
            <ServiceProviderList
              list={AdvocatesList}
              providerType="advocates"
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
        <Route path="/Appointment" element={<Appointment/>} />
        <Route path="/AppRequest" element={<AppointmentRequest/>} />

        <Route path="/UserSelection" element={<UserSelection />} />
        <Route path="/clientRegister" element={<Registerclient />} />
        <Route path="/LawFirmRegister" element={<RegisterLawFirm />} />
        <Route path="/ProviderDash" element={<ProvidersDash />} />
        <Route path="/not-found" element={<NotFound404 />} />

        <Route path="/request-appointment" element={<RequestAppointment/>} />
        <Route path="/success" element={<RegistrationSuccess />} />

        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
