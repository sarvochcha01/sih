import { Link } from "react-router-dom";
import BgEllipse from "../Components/BgEllipse";
import Card from "../Components/Card";
import CardContainer from "../Components/CardContainer";
import SearchArea from "../Components/SearchArea";
import authentication from "../Authentication/authentication";
import api from "../Authentication/apiAddress";
import axios from "axios";
import { useEffect } from "react";

const ClientHome = () => {
  const clientOrProvider = () => {
    let values = authentication();
    if (values.authenticated) {
      axios
        .post(`${api}/user/whoishe`, { UID: values.decodedToken.user_id })
        .then((data) => {
          //setFetchedData(data.data.data.clientPersonalInfo)
          localStorage.setItem("WhoIsHe", data.data.whoishe);
        })
        .catch((err) => {
          console.log("sadge");
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("WhoIsHe") === "") clientOrProvider();
  }, []);

  return (
    <div className="flex flex-col">
      <BgEllipse />
      <SearchArea />
      <div className=" w-72 mx-auto lg:w-4/5 mt-40 lg:mt-60 relative flex justify-center ">
        <CardContainer
          title="Our services"
          subtitle="Excellence in Diverse Legal Disciplines"
        >
          <Link to="/advocates">
            <Card
              name="Advocates"
              src="./img/logo/LawyerLogo.png"
              scale="70px"
            />
          </Link>
          <Link to="/law-firms">
            <Card
              name="Law Firms"
              src="./img/logo/LawFirmLogo.png"
              scale="100px"
            />
          </Link>
          <Card
            name="Arbitrators"
            src="./img/logo/ArbitratorLogo.png"
            scale="100px"
          />
          <Card name="Notaries" src="./img/logo/NotaryLogo.png" scale="55px" />
          <Card
            name="Mediators"
            src="./img/logo/MediatorLogo.png"
            scale="100px"
          />
          <Card
            name="Deed Writers"
            src="./img/logo/DocumentWriterLogo.png"
            scale="70px"
          />
          <Card
            name="Tax Consultants"
            src="./img/logo/ConsultantLogo.png"
            scale="100px"
          />
        </CardContainer>
      </div>
    </div>
  );
};

export default ClientHome;
