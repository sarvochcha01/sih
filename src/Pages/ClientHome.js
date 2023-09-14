import { Link } from "react-router-dom";
import BgEllipse from "../Components/BgEllipse";
import Card from "../Components/Card";
import CardContainer from "../Components/CardContainer";
import SearchArea from "../Components/SearchArea";
import GetUserLocation from "../Components/GetUserLocation";

const ClientHome = () => {
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
            name="Document Writers"
            src="./img/logo/DocumentWriterLogo.png"
            scale="70px"
          />
          <Card
            name="Consultants"
            src="./img/logo/ConsultantLogo.png"
            scale="100px"
          />
        </CardContainer>
      </div>
    </div>
  );
};

export default ClientHome;
